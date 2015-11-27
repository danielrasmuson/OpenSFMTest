function addShot(shotName){
  var me = this;
  me.shot = {};
  me.reconstruction.shots[shotName] = me.shot;
  me.shot.camera = me.cameraName;

  me.setCaptureTime = function setCaptureTime(captureTime){
    me.shot.capture_time = captureTime;
    return me;
  };

  me.setGpsDop = function setGpsDop(gpsDop){
    me.shot.gps_dop = gpsDop;
    return me;
  };

  me.setGPSPosition = function setGPSPosition(lat, lon, alt){
    me.shot.gps_position = [lat, lon, alt]
    return me;
  };

  me.setOrientation = function setOrientation(orientation){
    me.shot.orientation = orientation;
    return me;
  };

  me.setRotation = function setRotation(yaw, pitch, roll){
    me.shot.rotation = [yaw, pitch, roll];
    return me;
  };

  // todo what variables are needed in set translation?
  // maybe x, y, z
  me.setTranslation = function setTranslation(unknown1, unknown2, unknown3){
    me.shot.translation = [unknown1, unknown2, unknown3];
    return me;
  };

  return me;
}


module.exports = addShot;
