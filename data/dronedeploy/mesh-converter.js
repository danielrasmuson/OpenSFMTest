var file = require('./util/file.js');
var getShots = require('./shots-csv-reader.js');
var Mesh = require('./mesh-model/mesh.js');

var mesh = new Mesh();
var construction = mesh.addReconstruction();

// this is just some dummy code
var camera = construction.addCamera("dji fc300x", {
  focal: 0.5652250151571309,
  focal_prior: 0.5555555555555556,
  height: 3000,
  k1: -0.025479429064465504,
  k2: 0.014685481212948845,
  width: 4000
});

function writeMeshToFile(meshJSON){
  file.write(
    '/Users/danielrasmuson/Documents/Code/DroneDeploy/OpenSfM/data/dronedeploy/reconstruction.meshed.json',
    JSON.stringify(meshJSON),
    function(){
      console.log('success')
    }, 
    function(){
      console.log('error') 
    }
  );
}

getShots()
  .forEach(function(shot){
    camera.addShot(shot.name)
      .setGPSPosition(shot.lat, shot.lon, shot.alt)
      .setRotation(shot.yaw, shot.pitch, shot.roll)
      .setTranslation(shot.x, shot.y, shot.z)
  }, function(){}, function(){
    writeMeshToFile(mesh.generate());
  })


