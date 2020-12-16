function createControls(camera, canvas) {
  const controls = new THREE.OrbitControls(camera, canvas);

  controls.enableDamping = true;
  controls.target.set(0, 0, 0);

 controls.minDistance = 7;
 controls.maxDistance = 40;
  controls.update();


  return controls;
}

export { createControls };
