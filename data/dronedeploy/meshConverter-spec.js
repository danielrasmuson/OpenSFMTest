var file = require('./util/file');
describe('Mesh Converter', function(){
  it('given the data it should print it', function(done){
    file.read(__dirname+'/sparse_points.txt', function(data){
      console.log(data);
      expect(1).toBe(0)
      done();
    })
  })
})
