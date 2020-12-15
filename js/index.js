// set scene, camera, render
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 20);
camera.position.z = 2;
camera.updateProjectionMatrix();


var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth,window.innerHeight);

//render it into html document
document.body.appendChild(renderer.domElement);


window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})


renderer.render(scene,camera);


// set the light 
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.y = 150;
pointLight.position.z = 200;
scene.add(pointLight);

// object3D constructor 
const object = new THREE.Object3D();


const dracoLoader = new THREE.DRACOLoader();

dracoLoader.setDecoderPath('./dracoFiles/');
dracoLoader.preload();

dracoLoader.load('models/bunny.drc', function (geometry) {

  geometry.computeVertexNormals();
  //const material =  new THREE.MeshLambertMaterial({color:0xaa0000});
  const material =  new THREE.MeshBasicMaterial({ color:0xaa0000}); 

  const dracoMesh = new THREE.Mesh(geometry, material);

  dracoMesh.position.x=0;
  dracoMesh.position.y=-0.5;
  dracoMesh.position.z=-1;

  
object.add(dracoMesh);
});





// group
const group = new THREE.Group();

group.add(object);

scene.add(group);




// orbitcontrolls 
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();


// hide and show
/*document.getElementById('hideAll').addEventListener('click', () =>{
  group.traverse ((child) =>{
    if (child instanceof THREE.Mesh) {
        child.visible = false;
    }
  });
});


document.getElementById('showAll').addEventListener('click', () =>{
  group.traverse ((child) =>{
    if (child instanceof THREE.Mesh) {
        child.visible = true;
    }
  });
});


document.getElementById('hideFirstMesh').addEventListener('click', () =>{
  if(object.visible !=false){
    object.visible = !object.visible;
  }
});


document.getElementById('showFirstMesh').addEventListener('click', () =>{
  if(object.visible !=true){
    object.visible = true;
  }
});


document.getElementById('hideSecondMesh').addEventListener('click', () =>{
  if(object1.visible !=false){
    object1.visible = !object1.visible;
  }
});


document.getElementById('showSecondMesh').addEventListener('click', () =>{
  if(object1.visible !=true){
    object1.visible = true;
  }
}); */



const animation = () => {
  requestAnimationFrame(animation);
  renderer.render(scene, camera);

  group.rotation.x += Math.PI / 180
  group.rotation.y += Math.PI / 180
  group.rotation.z += Math.PI / 180
  
}

animation();

 
 