var Rx = require('rx');
var _ = require('lodash');
var file = require('./util/file.js');

function translateRow(cells){
  return {
    lat: cells[0],
    lon: cells[1],
    alt: cells[2],
    r: cells[3],
    g: cells[4],
    b: cells[5]
  };
}

function getPoints(){
  return Rx.Observable.create(function(observer){
    file.read(__dirname+'/sparse_points.txt', function(data){
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
