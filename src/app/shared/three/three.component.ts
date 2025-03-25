import { Component, AfterViewInit } from '@angular/core';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";
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
  title = "threeJs";
  constructor(private window: Window) {}
  

  ngAfterViewInit(): void {
    const width = 240, height = 240;
    
    // camera
    const camera = new THREE.PerspectiveCamera(65, width / height, 0.01, 100);
    camera.position.set(5, 1, 12);  // camera settings
    camera.lookAt(new THREE.Vector3(0, 0, 0)); 

    // scene
    const scene = new THREE.Scene();

    // white ambient
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);  
    scene.add(ambientLight);

    // orange light
    const orangeLight = new THREE.RectAreaLight(0xee8c1b, 20, 10, 2);
    orangeLight.position.set(10, 0, 0);
    orangeLight.lookAt(0, 0, 0);
    scene.add(orangeLight);

    // blue light
    const blueLight = new THREE.RectAreaLight(0x1b8cee, 10, 20, 2);
    blueLight.position.set(-5, 0, 0);
    blueLight.lookAt(0, 0, -6);
    scene.add(blueLight);

    // help views for debugging
    //scene.add(new RectAreaLightHelper(orangeLight));
    //scene.add(new RectAreaLightHelper(blueLight));

    const frontLight = new THREE.DirectionalLight(0xffffff, 0.7);
    blueLight.position.set(0, 0, 10);  // from front
    scene.add(frontLight);

    // GLTF Loader
    const loader = new GLTFLoader();
    let logo: THREE.Object3D; // reference for animation

    loader.load('/assets/obj/logo.glb', (gltf) => {
      logo = gltf.scene;
      logo.scale.set(0.2, 0.2, 0.2);
      scene.add(logo);
      //outlines / stroke
      logo.traverse((child: any) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          const edges = new THREE.EdgesGeometry(mesh.geometry, 45); // 45° => only edges
          const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x343434, linewidth: 5 });
          const edgeLines = new THREE.LineSegments(edges, edgeMaterial);
          mesh.add(edgeLines); 
        }
      });
    });

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // background transparent
    const canvas = renderer.domElement;
    document.getElementById('three-container')?.appendChild(canvas);
    canvas.classList.add("model-canvas"); // add class

    // Animation
    function animate(time: number) {
      if (logo) {
        logo.rotation.y = time / 3000;
      }
      renderer.render(scene, camera);
    }
    renderer.setAnimationLoop(animate);
  }
}
