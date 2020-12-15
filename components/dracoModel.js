
function readDracoFile(){

    const object = new THREE.Object3D();


    var dracoLoader = new THREE.DRACOLoader(); 

    dracoLoader.setDecoderPath('./dracoFiles/');
    dracoLoader.preload();

    dracoLoader.load('../models/bunny.drc', function(geometry){

        geometry.computeVertexNormals();
        const material =  new THREE.MeshBasicMaterial({ color:0xaa0000}); 
        const dracoModel = new THREE.Mesh(geometry, material);

        object.add(dracoModel);

    })
    return object;


}//function

export{ readDracoFile };