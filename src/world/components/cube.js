function createCube() {
    const geometry = new THREE.BoxBufferGeometry(2, 2, 2);
    const material = new THREE.MeshStandardMaterial({ color: 'lightgreen' });
    const cube = new THREE.Mesh(geometry, material);
  
    cube.rotation.set(0.5, 0.1, -0.5);
  

    cube.scale.x = 0.5;
    cube.scale.y = 0.5;
    cube.scale.z = 0.5;

   /* const radiansPerSecond = THREE.MathUtils.degToRad(30);
    cube.tick = (delta) => {
      cube.rotation.z += radiansPerSecond * delta;
      cube.rotation.x += radiansPerSecond * delta;
      cube.rotation.y += radiansPerSecond * delta;
    };*/
  
    return cube;
  }

  export{ createCube };