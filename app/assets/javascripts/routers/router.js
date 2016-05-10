var app = app || {};

(function () {
  'use strict';

  var TweetRouter = Backbone.Router.extend({

    routes: {

      // seems like a single-route app, but we'll see

    },

  });

  app.TweetRouter = new TweetRouter();
  Backbone.history.start();
})();