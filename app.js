const storage = require('electron-json-storage');
const reddit = require('redwrap');
var $ = require("jquery");

storage.set('foobar_' + Date.now(), { foo: Date.now() }, function(error) {
  if (error) throw error;
});

storage.keys(function(error, keys) {
  if (error) throw error;

  for (var key of keys) {
    console.log('There is a key called: ' + key);
  }
});

reddit.list('hot', function(error, data, res){
  if (error) throw error;

  $('#posts').html(data.data.children["0"].data.title);
  console.log(data);
  console.log(data.data.children["0"].data.title);

});
