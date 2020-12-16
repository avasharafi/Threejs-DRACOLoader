//import * as THREE from  "../node_modules/three/build/three.js";
//import * as THREE from  "https://cdn.rawgit.com/mrdoob/three.js/dev/build/three.min.js";

function createScene() {
  const scene = new THREE.Scene();

  scene.background = new THREE.Color('white');

  return scene;
}

export { createScene };