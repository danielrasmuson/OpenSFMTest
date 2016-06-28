var Rx = require('rx');
var _ = require('lodash');
var file = require('./util/file.js');

function translateRow(cells){
  return {
    x: parseFloat(cells[0]),
    y: parseFloat(cells[1]),
    z: parseFloat(cells[2]),
    r: parseFloat(cells[3]),
    g: parseFloat(cells[4]),
    b: parseFloat(cells[5])
  };
}

function getPoints(){
  return Rx.Observable.create(function(observer){
    file.read(__dirname+'/sparse_points_testxyzpointcloud.txt', function(data){
      data.split('\n').forEach(function(row){
        var cells = row.split(' ');
        if (cells.length === 1) return; // blank line
        observer.onNext(translateRow(cells))
      });
      observer.onCompleted();
    })
  });
}

module.exports = getPoints;
