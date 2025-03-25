import { Component, AfterViewInit } from '@angular/core';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

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
    const width = 200, height = 200;
    
    // camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.01, 100);
    camera.position.z = 15 ;
    camera.position.x = 0 ;

    // scene
    const scene = new THREE.Scene();

    // white ambient
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);  
    scene.add(ambientLight);

    // orange light
    const orangeLight = new THREE.DirectionalLight(0xee8c1b, 1);  
    orangeLight.position.set(5, 0, 0);  // from right
    scene.add(orangeLight);

    // blue light
    const blueLight = new THREE.DirectionalLight(0x1b8cee, 1);  // Blau
    blueLight.position.set(-5, 0, 0);  // from left
    scene.add(blueLight);

    // GLTF Loader
    const loader = new GLTFLoader();
    let logo: THREE.Object3D; // reference for animation

    loader.load('/assets/obj/logo_full.glb', (gltf) => {
      logo = gltf.scene;
      logo.scale.set(0.2, 0.2, 0.2);
      scene.add(logo);
    });

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // background transparent
    document.getElementById('three-container')?.appendChild(renderer.domElement);

    // Animation
    function animate(time: number) {
      if (logo) {
        logo.rotation.y = time / 1000;
      }
      renderer.render(scene, camera);
    }
    renderer.setAnimationLoop(animate);
  }
}
