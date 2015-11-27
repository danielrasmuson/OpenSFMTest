var file = require('./util/file.js');
var Rx = require('rx');

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
