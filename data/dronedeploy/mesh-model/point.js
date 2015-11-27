var _ = require('lodash');

function addPoint(){
  var me = this;
  me.id = _.uniqueId();
  me.point = {};
  me.reconstruction.points[me.id] = me.point;

  me.setColor = function setColor(r, g, b){
    me.point.color = [r,g,b];
    return me;
  }

  // todo - are these param names correct?
  me.setCoordinates = function setCoordinates(lat, lon, alt){
    me.point.coordinates = [lat, lon, alt];
    return me;
  }

  me.setReprojectionError = function setReprojectionError(reprojectionError){
    me.point.reprojection_error = reprojectionError;
    return me;
  }

  return me;
}

module.exports = addPoint;
