var addReconstruction = require('./reconstruction');

function mesh(){
  var me = this;
  me.reconstructions = [];
  return {
    addReconstruction: addReconstruction.bind(me),
    generate: function(){
      return me.reconstructions;
    }
  }
}

module.exports = mesh;
