function addPoint(){
  var me = this;
  me.id = "11542"; // todo figure out if this number matters
  me.point = {};
  me.reconstruction.points[me.id] = me.point;

  me.setColor = function setColor(r, g, b){
    me.point.color = [r,g,b];
  }

  // todo - are these param names correct?
  me.setCoordinates = function setCoordinates(lat, lon, alt){
    me.point.coordinates = [lat, lon, alt];
  }

  me.setReprojectionError = function setReprojectionError(reprojectionError){
    me.reprojection_error = reprojectionError;
  }

  return me;
}

module.exports = addPoint;
