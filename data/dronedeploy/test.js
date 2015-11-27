var Mesh = require('./mesh-model/mesh.js');
var file = require('./util/file.js');

var mesh = new Mesh();
var construction = mesh.addReconstruction();
var camera = construction.addCamera("dji fc300x", {
  focal: 0.5652250151571309,
  focal_prior: 0.5555555555555556,
  height: 3000,
  k1: -0.025479429064465504,
  k2: 0.014685481212948845,
  width: 4000
})

var shot = camera.addShot("dji_0667.jpg")
shot.setCaptureTime(1438441529.0);
shot.setGpsDop(15.0);
shot.setGPSPosition(54.06667585288653, -58.86775726743872, 1.9994984893128276);
shot.setOrientation(1); // todo rename
shot.setRotation(-2.704549657889575, -1.5139182396282014, -0.01336689867768531);
shot.setTranslation(21.696583947378134, -74.66030401921762, -1.4777540089824655);

var point = construction.addPoint();
point.setColor(232.0, 216.0, 182.0)
point.setCoordinates(41.058879369581156, 7.609415306422682, -81.24448431236529)
point.setReprojectionError(0.00031525759339263103)

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
