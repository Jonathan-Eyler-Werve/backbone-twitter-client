'use strict';
var app = app || {};

app.runTests = function () {
  console.log( "=== Tests run ===" );
  console.log( typeof app === "object" );
  console.log( typeof app.Tweet === "function" );
  console.log( typeof app.tweet.get("text") === "string" );
  console.log( typeof app.Name === "function" );

  console.log( "=== Tests complete ===" );
};


