function createTriangleMesh() {

    var triangleGeometry = new THREE.Geometry(); 

    triangleGeometry.vertices.push(new THREE.Vector3( 0.0,  1.0, 0.0));
    triangleGeometry.vertices.push(new THREE.Vector3(-1.0, -1.0, 0.0)); 
    triangleGeometry.vertices.push(new THREE.Vector3( 1.0, -1.0, 0.0));
    triangleGeometry.faces.push(new THREE.Face3(0, 1, 2));
    
    triangleGeometry.faces[0].vertexColors[0] = new THREE.Color(0xFF0000); 
    triangleGeometry.faces[0].vertexColors[1] = new THREE.Color(0x00FF00); 
    triangleGeometry.faces[0].vertexColors[2] = new THREE.Color(0x0000FF); 
    
    var triangleMaterial = new THREE.MeshBasicMaterial({ 
      vertexColors:THREE.VertexColors, 
      side:THREE.DoubleSide 
    });

    //group.add(triangleGeometry);
    var triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial); 

    triangleMesh.scale.x = 0.5;
    triangleMesh.scale.y = 0.5;
    triangleMesh.scale.z = 0.5;

   // triangleMesh.position.set = (0,0,0);


    const radiansPerSecond = THREE.MathUtils.degToRad(30);  //utility to convert from degrees to radians.

    triangleMesh.tick = (delta) => {
        triangleMesh.rotation.z += radiansPerSecond * delta;
        triangleMesh.rotation.x += radiansPerSecond * delta;
        triangleMesh.rotation.y += radiansPerSecond * delta;
    };
    
  return triangleMesh;
}

export {createTriangleMesh}