import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { createLights } from './components/light.js';
import { Loop } from './systems/Loop.js';
import { createControls } from './systems/controls.js';
import { ControlLayers } from './systems/ControlLayers.js';
//import { readDracoFile } from '../components/dracoModel.js';


let camera;
let renderer;
let scene;
let loop;
let light;
let controlLayers;

class DracoWorld {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        loop = new Loop(camera, scene, renderer);
        light = createLights();
        

        const object = new THREE.Object3D();

        const dracoLoader = new THREE.DRACOLoader();

        dracoLoader.setDecoderPath('../modules/dracoFiles/');
        dracoLoader.preload();

        dracoLoader.load('models/bunny.drc', function (geometry) {

        geometry.computeVertexNormals();

        const material =  new THREE.MeshBasicMaterial({color:0xBF99BD}); 

        const dracoMesh = new THREE.Mesh(geometry, material);
        
        object.add(dracoMesh);
        });

        object.scale.x = 5;
        object.scale.y = 5;
        object.scale.z = 5;
        
        object.position.set(0, 1 ,0);

        object.layers.set(2);

        camera.layers.enable(2);

        light.layers.enable(2);

        loop.updateList.push(object);

        scene.add(object, light);



        controlLayers = new ControlLayers(camera, scene, renderer);

        container.append(renderer.domElement);

        const controls = createControls(camera, renderer.domElement);


        const resizer = new Resizer(container, camera, renderer);


        controls.addEventListener('change', () => {
            this.render();
        });

    
    }


        render() {
            renderer.render(scene, camera);
        }

        start() {
            loop.start();  //call the start  in Loop
        }

        stop() {
            loop.stop();
        }

        hideFirstMesh() {
            controlLayers.hideFirstMesh();
        }

      /*  hideSecondMesh() {
            controlLayers.hideSecondMesh();
        }*/

        hideAll() {
            controlLayers.hideAll();
        }

        showAll() {
            controlLayers.showAll();
        }
        


}

export { DracoWorld };