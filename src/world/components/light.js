function createLights() {
  
    const pointLight = new THREE.PointLight(0xffffff);
    
    pointLight.position.y = 150;
    pointLight.position.z = 200;
  
    return pointLight;
  }
  
  export { createLights };