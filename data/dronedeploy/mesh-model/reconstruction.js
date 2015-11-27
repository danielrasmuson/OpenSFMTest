var addCamera = require('./camera');
var addPoint = require('./point');


function addReconstruction(){
  var me = this;
  me.reconstruction = {
    "cameras": {},
    "points": {},
    "shots": {}
  };
  me.reconstructions.push(me.reconstruction);
  return {
    addCamera: addCamera.bind(me),
    addPoint: addPoint.bind(me)
  }
}

module.exports = addReconstruction;
