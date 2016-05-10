'use strict';
var app = app || {};

(function (name) {

  var Name = Backbone.Model.extend({

    defaults: {
      text: name,
      suggestions: []
    },

  });

  app.Name = Name;

})();