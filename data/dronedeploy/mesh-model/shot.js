// # Label,X/East,Y/North,Z/Altitude,Yaw,Pitch,Roll,Error (m),X error,Y error,Z error,Error (deg),Yaw error,Pitch error,Roll error,X est,Y est,Z est,Yaw est,Pitch est,Roll est
// dji_0644.jpg,-123.114647,38.426791,91.000000,,,,1.967148,-1.217930,1.488887,-0.411745,,,,,-123.114661,38.426805,90.588254,9.331940,1.245151,0.161194
// [['shot name', 'yaw', 'pitch', 'roll', 'unknown', 'unknown', 'unknown', 'lat', 'lon', 'alt'],['dji_0644.jpg', ]]
function addShot(shotName){
  var me = this;
  me.shot = {};
  me.reconstruction.shots[shotName] = me.shot;
  me.shot.camera = me.cameraName;

  me.setCaptureTime = function setCaptureTime(captureTime){
    me.shot.capture_time = captureTime;
  };

  me.setGpsDop = function setGpsDop(gpsDop){
    me.shot.gps_dop = gpsDop;
  };

  me.setGPSPosition = function setGPSPosition(lat, lon, alt){
    me.shot.gps_position = [lat, lon, alt]
  };

  me.setOrientation = function setOrientation(orientation){
    me.shot.orientation = orientation;
  };

  me.setRotation = function setRotation(yaw, pitch, roll){
    me.shot.rotation = [yaw, pitch, roll];
  };

  // todo what variables are needed in set translation?
  me.setTranslation = function setTranslation(unknown1, unknown2, unknown3){
    me.shot.translation = [unknown1, unknown2, unknown3];
  };

  return me;
}


module.exports = addShot;
