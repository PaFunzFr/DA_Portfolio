import { Component, AfterViewInit } from '@angular/core';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

// import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";

RectAreaLightUniformsLib.init();

@Component({
  selector: 'app-three',
  standalone: true,
  imports: [],
  templateUrl: './three.component.html',
  styleUrl: './three.component.scss',
  providers: [
    { provide: Window, useValue: window }
  ]
})
export class ThreeComponent implements AfterViewInit {
  constructor(private window: Window) {}

  ngAfterViewInit(): void {
    const width = 240, height = 240;

    // Camera
    const camera = new THREE.PerspectiveCamera(65, width / height, 0.01, 100);
    camera.position.set(5, 1, 12);  
    camera.lookAt(0, 0, 0);

    // Scene
    const scene = new THREE.Scene();

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 100);  
    scene.add(ambientLight);

    const orangeLight = new THREE.RectAreaLight(0xee8c1b, 60, 10, 2);
    orangeLight.position.set(10, 0, 0);
    orangeLight.lookAt(0, 0, 0);
    scene.add(orangeLight);

    const blueLight = new THREE.RectAreaLight(0x1b8cee, 50, 20, 2);
    blueLight.position.set(-15, 0, 0);
    blueLight.lookAt(0, 0, -6);
    scene.add(blueLight);

    const frontLight = new THREE.DirectionalLight(0xffffff, 2.2);
    frontLight.position.set(0, 0, 10);
    scene.add(frontLight);

    // scene.add(new RectAreaLightHelper(orangeLight));
    // scene.add(new RectAreaLightHelper(blueLight));

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    const canvas = renderer.domElement;
    document.getElementById('three-container')?.appendChild(canvas);
    canvas.classList.add("model-canvas");

    // DepthTexture für Outline-Shader
    const depthTexture = new THREE.DepthTexture(width, height, THREE.UnsignedShortType);
    depthTexture.type = THREE.UnsignedShortType;

    // RenderTarget mit Depth
    const renderTarget = new THREE.WebGLRenderTarget(width, height, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      depthTexture: depthTexture,
      depthBuffer: true,
    });

    // Normal Target
    const normalTarget = new THREE.WebGLRenderTarget(width, height, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat
    });
    const normalMaterial = new THREE.MeshNormalMaterial();

    // GLTF Loader
    const loader = new GLTFLoader();
    let logo: THREE.Object3D;

    loader.load('./assets/obj/logo.glb', (gltf) => {
      logo = gltf.scene;
      logo.scale.set(0.2, 0.2, 0.2);
      scene.add(logo);
    });

    // Composer & Passes
    const composer = new EffectComposer(renderer, renderTarget);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    // Outline Shader
    const outlineShader = {
      uniforms: {
        tDiffuse: { value: null },
        tDepth: { value: depthTexture },
        tNormal: { value: normalTarget.texture },
        outlineColor: { value: new THREE.Color(0x000000) },
        normalSensitivity: { value: 2.0 },
        depthSensitivity: { value: 1.0 },
        thickness: { value: 0.25 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        varying vec2 vUv;
        uniform sampler2D tDiffuse;
        uniform sampler2D tDepth;
        uniform sampler2D tNormal;
        uniform vec3 outlineColor;
        uniform float normalSensitivity;
        uniform float depthSensitivity;
        uniform float thickness;

        float getDepth(sampler2D tex, vec2 uv) {
          return texture2D(tex, uv).r;
        }

        vec3 getNormal(sampler2D tex, vec2 uv) {
          return texture2D(tex, uv).xyz * 2.0 - 1.0;
        }

        void main() {
          vec2 texel = vec2(thickness) / vec2(textureSize(tDepth, 0));
          float depth = getDepth(tDepth, vUv);
          vec3 normal = getNormal(tNormal, vUv);

          float depthDiff = 0.0;
          float normalDiff = 0.0;
          for(int x=-1; x<=1; x++) {
            for(int y=-1; y<=1; y++) {
              vec2 offset = vec2(x, y) * texel;
              depthDiff += abs(depth - getDepth(tDepth, vUv + offset));
              normalDiff += distance(normal, getNormal(tNormal, vUv + offset));
            }
          }

          float edge = depthDiff * depthSensitivity + normalDiff * normalSensitivity;
          edge = smoothstep(0.1, 0.3, edge);

          vec4 baseColor = texture2D(tDiffuse, vUv);
          gl_FragColor = mix(baseColor, vec4(outlineColor, 1.0), edge);
        }`
    };

    const outlinePass = new ShaderPass(new THREE.ShaderMaterial(outlineShader));
    composer.addPass(outlinePass);

    // Animation Loop
    function animate(time: number) {
      if (logo) {
        logo.rotation.y = time / 5000;
      }

      // Normal Pass
      scene.overrideMaterial = normalMaterial;
      renderer.setRenderTarget(normalTarget);
      renderer.render(scene, camera);
      scene.overrideMaterial = null;

      // Render Composer
      renderer.setRenderTarget(null);
      composer.render();
    }

    renderer.setAnimationLoop(animate);
  }
}