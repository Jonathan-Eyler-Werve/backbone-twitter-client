'use strict';
var app = app || {};

(function () {

  var Names = Backbone.Collection.extend({
    // Reference to this collection's model.
    model: app.Name

  });

  app.Names = Names;

})();