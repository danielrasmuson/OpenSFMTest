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
}

function addShots(done){
  file.read(__dirname+'/shots.csv', function(data){
    data.split('\n').forEach(function(row){
      var cells = row.split(',');
      if (cells.length === 1) return; // blank line

      camera.addShot(cells[shotCSVKey.imageName])
        .setGPSPosition(cells[shotCSVKey.lat], cells[shotCSVKey.lon], cells[shotCSVKey.alt])
        .setRotation(cells[shotCSVKey.yaw], cells[shotCSVKey.pitch], cells[shotCSVKey.roll])

    })
    done();
  });
}

addShots(function(){

  var meshJSON = mesh.generate();
  console.log(JSON.stringify(meshJSON));
})

