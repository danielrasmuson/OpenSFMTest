var addShot = require('./shot');
// cameraSettings = {
//   focal: 0.5652250151571309,
//   focal_prior: 0.5555555555555556,
//   height: 3000,
//   k1: -0.025479429064465504,
//   k2: 0.014685481212948845,
//   width: 4000
// }
function addCamera(cameraName, cameraSettings){
  var camera = this;
  camera.cameraName = cameraName;
  camera.reconstruction.cameras[cameraName] = cameraSettings;
  return {
    addShot: addShot.bind(camera) 
  }
}

module.exports = addCamera;
