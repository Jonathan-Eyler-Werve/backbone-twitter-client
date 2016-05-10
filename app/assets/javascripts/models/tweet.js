'use strict';
var app = app || {};

(function () {

  var Tweet = Backbone.Model.extend({

    defaults: {
      text: '',
      sent: false,
      suggestions: []
    },

    send: function () {
      this.save({
        sent: true
      });
    }

    // fetch suggestions?

    // display suggestions?

  });

  app.Tweet = Tweet;

})();