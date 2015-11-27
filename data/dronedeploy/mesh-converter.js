var file = require('./util/file.js');
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
})

var shotCSVKey = {
  imageName: 0,
  lat: 1,
  lon: 2,
  alt: 3,
  yaw: 18,
  pitch: 19,
  roll: 20,
  x: 15,
  y: 16,
  z: 17,
}

function addShots(done){
  file.read(__dirname+'/shots.csv', function(data){
    data.split('\n').forEach(function(row){
      var cells = row.split(',');
      if (cells.length === 1) return; // blank line

      camera.addShot(cells[shotCSVKey.imageName])
        .setGPSPosition(cells[shotCSVKey.lat], cells[shotCSVKey.lon], cells[shotCSVKey.alt])
        .setRotation(cells[shotCSVKey.yaw], cells[shotCSVKey.pitch], cells[shotCSVKey.roll])
        .setTranslation(cells[shotCSVKey.x], cells[shotCSVKey.y], cells[shotCSVKey.z])
    })
    done();
  });
}

addShots(function(){

  var meshJSON = mesh.generate();
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
  
})

