'use strict';
var app = app || {};

(function () {

  var Name = Backbone.Model.extend({

    defaults: {
      text: '',
      suggestions: []
    },

  });

  app.Name = Name;

})();