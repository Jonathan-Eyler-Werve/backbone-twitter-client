'use strict';
var app = app || {};

(function () {

  var Tweet = Backbone.Model.extend({
    // "instance" methods

    defaults: {
      text: ''
    }

  },

  {
    // "class" methods

    // checkForNames takes a string; returns false or array of strings.
    checkForNames: function (text) {
      var regex, names;

      regex = new RegExp('\\B@\\w+');
      names = [];

      if ( text === undefined ) {
        // console.warn("Got undefined when expected a string");
        return false;
      }

      if ( regex.test(text) === false ){
        // console.log("Did not find a matching string.");
        return false;
      }

      // current behavior only matches to first name in string.
      // better behavior could match based on most recently added (a proxy for cursor position) or return all names
      names.push(text.match(regex)[0]);

      return names;
    },

  });

  app.Tweet = Tweet;

})();