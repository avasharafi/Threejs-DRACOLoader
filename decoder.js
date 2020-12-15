const draco3d = require('draco3d');
const fs = require('fs');


let decoderModule = null;

draco3d.createDecoderModule({})
.then(function(module) {

  decoderModule = module;
  console.log('Decoder Module Initialized!');
  moduleInitialized();
})
.catch((err) => console.log(err));

function moduleInitialized() {
  let decoder = new decoderModule.Decoder();
  if (decoderModule) {
    fs.readFile('./models/bunny.drc', (err, data) => {
      if (err) {return console.log(err);}

      console.log("Decoding file of size " + data.byteLength + " ..");
      // Decode mesh
      const decoder = new decoderModule.Decoder();
      const decodedGeometry = decodeDracoData(data, decoder);
      console.log('Done');

  
      
    });//fs 
  }//if
  cleanup(decoder);
}//function


function decodeDracoData(rawBuffer, decoder) {
  const buffer = new decoderModule.DecoderBuffer();
  buffer.Init(new Int8Array(rawBuffer), rawBuffer.byteLength);
  const geometryType = decoder.GetEncodedGeometryType(buffer);

  let dracoGeometry;
  let status;
  if (geometryType === decoderModule.TRIANGULAR_MESH) {
    dracoGeometry = new decoderModule.Mesh();
    status = decoder.DecodeBufferToMesh(buffer, dracoGeometry);
  } else if (geometryType === decoderModule.POINT_CLOUD) {
    dracoGeometry = new decoderModule.PointCloud();
    status = decoder.DecodeBufferToPointCloud(buffer, dracoGeometry);
  } else {
    const errorMsg = 'Error: Unknown geometry type.';
    console.error(errorMsg);
  }
  decoderModule.destroy(buffer);

  return dracoGeometry;
}

function cleanup(decoder) {
  decoderModule.destroy(decoder);
}

