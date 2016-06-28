var Rx = require('rx');
var file = require('./util/file.js');
var getShots = require('./shots-csv-reader.js');
var getPoints = require('./sparse-points-reader.js');
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

var shots = getShots();
var points = getPoints();

shots.forEach(function(shot){
    camera.addShot(shot.name)
      .setGPSPosition(shot.lat, shot.lon, shot.alt)
      .setRotation(shot.yaw, shot.pitch, shot.roll)
      // .setRotation(0, 0, 0)
      // .setRotation(shot.x, shot.y, shot.z)
      .setTranslation(shot.x, shot.y, shot.z);
  });

points.forEach(function(point){
    construction.addPoint()
      .setColor(point.r, point.g, point.b)
      .setCoordinates(point.x, point.y, point.z)
      .setReprojectionError(0.00022505052104047338);
  });

Rx.Observable.zip([shots, points]).forEach(function(){}, function(){}, function(){
  writeMeshToFile(mesh.generate());
});
