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
  }
}
