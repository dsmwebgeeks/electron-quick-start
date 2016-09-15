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

reddit.r('showerthoughts', function(err, data, res) {
  if (err) console.error(err);

  for (var i = 1; i < 7; i++) {
    var id = "#" + String(i)
    $(id).html(data.data.children[i].data.title);

    var clicker = function () {
      return function() {
        $('#posts').html(data.data.children[i].data.selftext);
        console.log("I clicked the thing");
        console.log(data.data.children[i]).data.selftext
        ;
      }
    }
    $(id).click(clicker());
  }
});
