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
    "shots": {}
  };
  me.reconstructions.push(me.reconstruction);
  return {
    addCamera: addCamera.bind(me)
  }
}

module.exports = addReconstruction;
