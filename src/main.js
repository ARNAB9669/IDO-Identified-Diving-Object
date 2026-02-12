import * as THREE from 'three';
import { GUI } from 'lil-gui';

// 1. Basic Setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x001b42); // Deep Ocean Blue

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 2. The IDO (Submarine)
const geometry = new THREE.CapsuleGeometry(0.5, 1.5, 4, 12);
const material = new THREE.MeshNormalMaterial();
const ido = new THREE.Mesh(geometry, material);
ido.rotation.z = Math.PI / 2; 
scene.add(ido);

camera.position.z = 5;

// 3. UI Controls
const gui = new GUI();
gui.add(ido.position, 'y', -5, 5).name('Submerge/Surface');
gui.add(ido.rotation, 'y', 0, Math.PI * 2).name('Turn');

// 4. Animation
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Handle Window Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});