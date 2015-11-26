var addCamera = require('./camera');


function addReconstruction(){
  var me = this;
  me.reconstruction = {
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
  };
  me.reconstructions.push(me.reconstruction);
  return {
    addCamera: addCamera.bind(me)
  }
}

module.exports = addReconstruction;
