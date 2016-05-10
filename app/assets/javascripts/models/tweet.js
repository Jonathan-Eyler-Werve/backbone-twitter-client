var app = app || {};

(function () {
  'use strict';

  app.Tweet = Backbone.Model.extend({
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

    // fetch suggestions

    // display suggestions

  });
})();