const clock = new THREE.Clock();

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updateList = [];
  }

  start() {
      this.renderer.setAnimationLoop(() =>{
          this.tick();  
          this.renderer.render(this.scene, this.camera);
      });
  }

  stop() {
      this.renderer.setAnimationLoop(null);
  }

  tick() {
    const delta = clock.getDelta();     //how much time has passed since the last time we called 
    const radiansPerSecond = THREE.MathUtils.degToRad(30);

    for (const object of this.updateList) {
        //object.tick(delta);
        object.rotation.z += radiansPerSecond * delta;
        object.rotation.x += radiansPerSecond * delta;
        object.rotation.y += radiansPerSecond * delta;
    }
  }
}

export { Loop };
