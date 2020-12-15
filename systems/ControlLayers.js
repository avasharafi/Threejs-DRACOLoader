
class ControlLayers {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
  }

  hideFirstMesh() {
    this.camera.layers.toggle(0);  
    this.renderer.render(this.scene, this.camera);
  }

  
  hideSecondMesh() {
    this.camera.layers.toggle(1);  
    this.renderer.render(this.scene, this.camera);
  }

  hideAll() {
    this.camera.layers.disableAll();
    this.renderer.render(this.scene, this.camera);
  }

  showAll() {
    this.camera.layers.enableAll();
    this.renderer.render(this.scene, this.camera);
  }



}

export { ControlLayers };
