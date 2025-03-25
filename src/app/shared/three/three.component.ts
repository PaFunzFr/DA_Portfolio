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
    const width = 240, height = 240;
    
    // camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.01, 100);
    camera.position.set(5, -2, 10);  // Kamera 12 Einheiten nach hinten versetzen
    camera.lookAt(new THREE.Vector3(0, 0, 0)); 

    // scene
    const scene = new THREE.Scene();

    // white ambient
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);  
    scene.add(ambientLight);

    // orange light
    const orangeLight = new THREE.DirectionalLight(0xee8c1b, 1);  
    orangeLight.position.set(5, 0, 0);  // from right
    scene.add(orangeLight);

    // blue light
    const blueLight = new THREE.DirectionalLight(0x1b8cee, 1);
    blueLight.position.set(-5, 0, 0);  // from left
    scene.add(blueLight);

    // GLTF Loader
    const loader = new GLTFLoader();
    let logo: THREE.Object3D; // reference for animation

    loader.load('/assets/obj/logo_full.glb', (gltf) => {
      logo = gltf.scene;
      logo.scale.set(0.2, 0.2, 0.2);
      scene.add(logo);
      //outlines / stroke
      logo.traverse((child: any) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          const edges = new THREE.EdgesGeometry(mesh.geometry, 45); // 45° => only edges
          const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 });
          const edgeLines = new THREE.LineSegments(edges, edgeMaterial);
          mesh.add(edgeLines); 
        }
      });
    });

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // background transparent
    document.getElementById('three-container')?.appendChild(renderer.domElement);

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
