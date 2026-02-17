// import * as THREE from 'three';
// import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// // --- HELPER: Generate a Neon Blue Glow Texture ---
// function createGlowTexture() {
//   const width = 256;
//   const height = 256;
//   const canvas = document.createElement('canvas');
//   canvas.width = width;
//   canvas.height = height;
//   const ctx = canvas.getContext('2d');

//   const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width / 2);
//   gradient.addColorStop(0.0, 'rgba(200, 240, 255, 1)');   
//   gradient.addColorStop(0.2, 'rgba(0, 200, 255, 0.8)');   
//   gradient.addColorStop(0.5, 'rgba(0, 100, 255, 0.3)');   
//   gradient.addColorStop(1.0, 'rgba(0, 0, 0, 0)');         

//   ctx.fillStyle = gradient;
//   ctx.fillRect(0, 0, width, height);

//   const texture = new THREE.CanvasTexture(canvas);
//   texture.needsUpdate = true;
//   return texture;
// }

// // 1. Scene & Camera Setup
// const canvas = document.querySelector('#ido_canvas');
// const container = document.querySelector('.model_viewport'); 

// const scene = new THREE.Scene();
// scene.background = new THREE.Color(0x111111); 

// const camera = new THREE.PerspectiveCamera(
//   45, 
//   container.clientWidth / container.clientHeight, 
//   0.1, 
//   1000
// );
// camera.position.set(8, 0, 10); 

// // 2. Renderer (Enable Shadows for the Sun Ray effect)
// const renderer = new THREE.WebGLRenderer({ 
//   canvas: canvas, 
//   antialias: true,
//   alpha: true 
// });
// renderer.setSize(container.clientWidth, container.clientHeight);
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.shadowMap.enabled = true; // <--- VITAL FOR SUN RAYS TO LOOK REAL
// renderer.shadowMap.type = THREE.PCFSoftShadowMap; 

// // 3. Lighting

// // A. Ambient (Base fill light)
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
// scene.add(ambientLight);

// // B. The "Sun Ray" SpotLight
// const sunLight = new THREE.SpotLight(0xffd040, 50); // Color: Warm Gold, Intensity: 50
// sunLight.position.set(15, 20, 10); // Top Right Corner
// sunLight.angle = Math.PI / 6; // Narrow beam (30 degrees)
// sunLight.penumbra = 0.5; // Soft edges
// sunLight.decay = 1;
// sunLight.distance = 100;

// // Shadow settings for the sun
// sunLight.castShadow = true;
// sunLight.shadow.mapSize.width = 1024;
// sunLight.shadow.mapSize.height = 1024;
// sunLight.shadow.bias = -0.0001;

// scene.add(sunLight);
// scene.add(sunLight.target); // Essential: Add the target so we can aim it
// sunLight.target.position.set(0, 0, 0); // Aim at the center

// // C. Rim Light (Cool Blue) - Optional, adds contrast to the warm sun
// const rimLight = new THREE.DirectionalLight(0x0088ff, 2);
// rimLight.position.set(-5, 5, -5);
// scene.add(rimLight);

// // 4. Controls
// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;
// controls.dampingFactor = 0.05;
// controls.maxPolarAngle = Math.PI / 2 + 0.1; 

// // 5. Add Neon Glow Base
// const glowTexture = createGlowTexture();
// const glowGeo = new THREE.PlaneGeometry(12, 12); 
// const glowMat = new THREE.MeshBasicMaterial({
//     map: glowTexture,
//     transparent: true,
//     opacity: 1,
//     blending: THREE.AdditiveBlending, 
//     side: THREE.DoubleSide,
//     depthWrite: false, 
// });
// const glowPlane = new THREE.Mesh(glowGeo, glowMat);
// glowPlane.rotation.x = -Math.PI / 2; 
// glowPlane.position.y = -1.5; 
// glowPlane.receiveShadow = true; // <--- The floor catches the rover's shadow
// scene.add(glowPlane);


// // 6. Setup Model Stage
// const stage = new THREE.Group();
// scene.add(stage);

// // 7. Load the 3MF Model
// const loader = new ThreeMFLoader();
// loader.load(
//   '/ido.3mf', 
//   (object) => {
//     object.rotation.x = -Math.PI / 2; 
    
//     // Center geometry
//     const box = new THREE.Box3().setFromObject(object);
//     const center = box.getCenter(new THREE.Vector3());
//     object.position.sub(center); 

//     // ENABLE SHADOWS ON THE MODEL
//     object.traverse((child) => {
//       if (child.isMesh) {
//         child.castShadow = true;    // Casts shadow on the floor
//         child.receiveShadow = true; // Self-shadowing
        
//         // Optional: Make the material slightly shiny to reflect the sun
//         if (child.material) {
//            child.material.roughness = 0.4;
//            child.material.metalness = 0.3;
//         }
//       }
//     });

//     stage.add(object);

//     const overlay = document.querySelector('.model_overlay');
//     if (overlay) overlay.style.display = 'none';
//   },
//   undefined,
//   (error) => { console.error('An error happened', error); }
// );

// window.addEventListener('resize', () => {
//   camera.aspect = container.clientWidth / container.clientHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(container.clientWidth, container.clientHeight);
// });

// // 8. Animation Loop
// const clock = new THREE.Clock(); 
// const floatSpeed = 1.5;  
// const floatHeight = 0.4; 
// const baseHeight = 0.5;  

// function animate() {
//   requestAnimationFrame(animate);

//   const elapsedTime = clock.getElapsedTime();

//   if (stage) {
//     stage.rotation.y -= 0.005; 
//     stage.position.y = baseHeight + Math.sin(elapsedTime * floatSpeed) * floatHeight;
//   }

//   controls.update();
//   renderer.render(scene, camera);
// }

// animate();