var file = require('./util/file.js');

function translateRow(shotData){
  return {
    name: shotData[0],
    lat: shotData[1],
    lon: shotData[2],
    alt: shotData[3],
    yaw: shotData[18],
    pitch: shotData[19],
    roll: shotData[20],
    x: shotData[15],
    y: shotData[16],
    z: shotData[17]
  }
}

function getShots(){
  var me = this;
  file.read(__dirname+'/shots.csv', function(data){
    data.split('\n').forEach(function(row){
      var cells = row.split(',');
      if (cells.length === 1) return; // blank line
      me.forEach(translateRow(cells));
    })
    me.done();
  });

  return {
    forEach: function(callback, error, done){
      me.forEach = callback;
      me.done = done;
    }
  }
}

module.exports = getShots;
