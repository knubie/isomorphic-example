var monorouter = require('monorouter');
var reactRouting = require('monorouter-react');
var http = require('http');
var PetList = require('./views/PetList');
var PetDetail = require('./views/PetDetail');


module.exports = monorouter()
  .setup(reactRouting())
  .route('index', '/', function(req) {
    var petList = '';
    var that = this;
    http.get({path: '/pets', port: 5000}, function (res) {
      res.on('data', function (data) {
        petList = data;
      })
      .on('end', function() {
        petList = JSON.parse(petList);
        that.render(PetList, {pets: petList});
      });
    });
  })
  .route('pet', '/pet/:name', function(req) {
    this.render(PetDetail, {petName: req.params.name});
  });
