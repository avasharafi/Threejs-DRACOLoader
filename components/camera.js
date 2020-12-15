function createCamera() {
  const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 20);


  camera.position.set(0,0,10);

  //camera.updateProjectionMatrix();

  return camera;
}

export { createCamera };
