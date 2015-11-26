var reconstructionMeshed = [{
  cameras: {
    "dji fc300x": {
      k2: 0.014685481212948845, 
      height: 3000, 
      focal_prior: 0.5555555555555556, 
      k1: -0.025479429064465504, 
      width: 4000, 
      focal: 0.5652250151571309
    }
  },
  shots: {},
  points: {}  
}];

// # Label,X/East,Y/North,Z/Altitude,Yaw,Pitch,Roll,Error (m),X error,Y error,Z error,Error (deg),Yaw error,Pitch error,Roll error,X est,Y est,Z est,Yaw est,Pitch est,Roll est
// dji_0644.jpg,-123.114647,38.426791,91.000000,,,,1.967148,-1.217930,1.488887,-0.411745,,,,,-123.114661,38.426805,90.588254,9.331940,1.245151,0.161194
// [['shot name', 'yaw', 'pitch', 'roll', 'unknown', 'unknown', 'unknown', 'lat', 'lon', 'alt'],['dji_0644.jpg', ]]
function addShot(shotName, camera){
  return reconstructionMeshed;
}

function addPoint(){

}

module.exports = {
  // TODO: add - addCamera
  addShot: addShot,
  addPoint: addPoint
}
