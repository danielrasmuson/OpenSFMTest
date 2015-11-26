var mesh = require('./meshConverter');
var file = require('./util/file.js');

var camera = mesh.addCamera("dji fc300x", {
  focal: 0.5652250151571309,
  focal_prior: 0.5555555555555556,
  height: 3000,
  k1: -0.025479429064465504,
  k2: 0.014685481212948845,
  width: 4000
})

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
