const storage = require('electron-json-storage');
const reddit = require('redwrap');
var $ = require("jquery");

storage.set('foobar_' + Date.now(), { foo: Date.now() }, function(error) {
  if (error) throw error;
});

storage.keys(function(error, keys) {
  if (error) throw error;

  for (var key of keys) {
    // console.log('There is a key called: ' + key);
  }
});


reddit.list('hot', function(error, data, res){
  if (error) throw error;

  $('#post').html(data.data.children["0"].data.title);
  // console.log(data);
  // console.log(data.data.children["0"].data.title);

});

// $('.list-group-item').delegate.on('click', function() {
//   $(this).each(function() {
//     $('.list-group-item').removeClass('active');
//     $(this).addClass('active');
//   });
// });

var path = require('path');
var options = [
  {
    title: "Basic Notification",
    body: "Short message part"
  },
  {
    title: "Content-Image Notification",
    body: "Short message plus a custom content image",
    icon: path.join(__dirname, 'icon.png')
  }
]

function doNotify(evt) {
  if (evt.srcElement.id == "basic") {
    new Notification(options[0].title, options[0]);
  }
  else if (evt.srcElement.id == "image") {
    new Notification(options[1].title, options[1]);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("basic").addEventListener("click", doNotify);
  document.getElementById("image").addEventListener("click", doNotify);
})
