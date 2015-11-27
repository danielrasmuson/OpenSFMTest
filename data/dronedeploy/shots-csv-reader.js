var file = require('./util/file.js');
var Rx = require('rx');

function translateRow(shotData){
  return {
    name: shotData[0],
    lat: parseFloat(shotData[1]),
    lon: parseFloat(shotData[2]),
    alt: parseFloat(shotData[3]),
    yaw: parseFloat(shotData[18]),
    pitch: parseFloat(shotData[19]),
    roll: parseFloat(shotData[20]),
    x: parseFloat(shotData[15]),
    y: parseFloat(shotData[16]),
    z: parseFloat(shotData[17])
  }
}

function getShots(){
  return Rx.Observable.create(function(observer){
    var me = this;
    file.read(__dirname+'/shots.csv', function(data){
      data.split('\n').forEach(function(row){
        var cells = row.split(',');
        if (cells.length === 1) return; // blank line
        observer.onNext(translateRow(cells))
      })
      observer.onCompleted();
    });
  });
}

module.exports = getShots;
