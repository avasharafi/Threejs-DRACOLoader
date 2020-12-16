//import * as THREE from  "../node_modules/three/build/three.js";
//import * as THREE from  "https://cdn.rawgit.com/mrdoob/three.js/dev/build/three.min.js";

function createRenderer() {
  const renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setClearColor("#e5e5e5");
  renderer.setSize(window.innerWidth,window.innerHeight);

  return renderer;
}

export { createRenderer };