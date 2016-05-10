// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require_tree ../templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require_tree .

'use strict';
var app = app || {};

$(function () {

  app.Models = {};
  app.Collections = {};
  app.Views = {};
  app.Routers = {};
  app.initialize = function() {
    app.tweet = new app.Tweet();
  };

  // update app.tweet as user types
  $("#input--main").keyup(function (event) {
    app.tweet.set("text", event.currentTarget.value);

    // if we find an @user in string typed by user...
    if ( app.Tweet.checkForNames(app.tweet.attributes.text) ) {

      var name = app.Tweet.checkForNames(app.tweet.attributes.text);

      // cringing a bit at this data structure; refactor into a Backbone collection of names
      if (!app.name) {
        app.name = new app.Name(name);
      } else {
        app.name.set("text", name);
      }

    console.log(app.name.attributes.text);
    }
  });

  app.initialize();
  app.runTests();

});
