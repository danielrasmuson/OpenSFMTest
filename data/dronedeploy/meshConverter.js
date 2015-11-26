var reconstruction = {
  "cameras": {},
  "points": {
    "11542": {
      "color": [
        232.0,
        216.0,
        182.0
      ],
      "coordinates": [
        41.058879369581156,
        7.609415306422682,
        -81.24448431236529
      ],
      "reprojection_error": 0.00031525759339263103
    }
  },
  "shots": {
    "dji_0667.jpg": {
      "camera": "dji fc300x",
      "capture_time": 1438441529.0,
      "faces": [],
      "gps_dop": 15.0,
      "gps_position": [
        54.06667585288653,
        -58.86775726743872,
        1.9994984893128276
      ],
      "orientation": 1,
      "rotation": [
        -2.704549657889575,
        -1.5139182396282014,
        -0.01336689867768531
      ],
      "translation": [
        21.696583947378134,
        -74.66030401921762,
        -1.4777540089824655
      ],
      "vertices": []
    }
  }
}



// # Label,X/East,Y/North,Z/Altitude,Yaw,Pitch,Roll,Error (m),X error,Y error,Z error,Error (deg),Yaw error,Pitch error,Roll error,X est,Y est,Z est,Yaw est,Pitch est,Roll est
// dji_0644.jpg,-123.114647,38.426791,91.000000,,,,1.967148,-1.217930,1.488887,-0.411745,,,,,-123.114661,38.426805,90.588254,9.331940,1.245151,0.161194
// [['shot name', 'yaw', 'pitch', 'roll', 'unknown', 'unknown', 'unknown', 'lat', 'lon', 'alt'],['dji_0644.jpg', ]]
function addShot(shotName, camera){
}

function addPoint(){
}

// cameraSettings = {
//   focal: 0.5652250151571309,
//   focal_prior: 0.5555555555555556,
//   height: 3000,
//   k1: -0.025479429064465504,
//   k2: 0.014685481212948845,
//   width: 4000
// }
function addCamera(name, cameraSettings){
  // TODO understand 
  // reconstructionMeshed can contain an array of recons
  reconstruction.cameras[name] = cameraSettings;
  return {
    addShot: addShot 
  }
}

function generate(){
  return [reconstruction];
}

module.exports = {
  addCamera: addCamera,
  generate: generate
}
