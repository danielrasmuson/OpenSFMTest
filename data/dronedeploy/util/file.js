var fs = require('fs');
module.exports = {
  read: function(path, success, error){
    fs.readFile(path, "utf8", function (err, data) {
      if (err){
        error(err);
      } else{
        success(data);
      }
    });
  },
  write: function(path, body, success, error){
    fs.writeFile(path, body, function(err){
      if (err){
        error(err);
      } else{
        success();
      }
    });
  }
}
