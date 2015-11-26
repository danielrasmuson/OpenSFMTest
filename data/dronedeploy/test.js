var meshConverter = require('./meshConverter');
var file = require('./util/file.js');

var mesh = meshConverter.addShot();

file.write(
  '/Users/danielrasmuson/Documents/Code/DroneDeploy/OpenSfM/data/bad_test/reconstruction.meshed.json',
  JSON.stringify(mesh),
  function(){
    console.log('success')
  }, 
  function(){
    console.log('error') 
  }
);
