'use strict';
var app = app || {};

app.runTests = function () {
  var testTweet;

  console.log( "=== Tests run ===" );
  console.log( typeof app === "object" );
  console.log( typeof app.Tweet === "function" );
  console.log( typeof app.tweet.get("text") === "string" );
  console.log( typeof app.Name === "function" );

  testTweet = new app.Tweet();
  testTweet.set("text", undefined);
  console.log( app.Tweet.checkForNames(testTweet.attributes.text) === false );

  testTweet = new app.Tweet();
  testTweet.set("text", "no at sign in here");
  console.log( app.Tweet.checkForNames(testTweet.attributes.text) === false );

  testTweet = new app.Tweet();
  testTweet.set("text", "at sign @ followed by space");
  console.log( app.Tweet.checkForNames(testTweet.attributes.text) === false );

  testTweet = new app.Tweet();
  testTweet.set("text", "at sign not @followed by space");
  console.log( app.Tweet.checkForNames(testTweet.attributes.text)[0] === "@followed" );

  testTweet = new app.Tweet();
  testTweet.set("text", "at sign @one @two @three");
  console.log( app.Tweet.checkForNames(testTweet.attributes.text)[0] === "@one" );

  console.log( "=== Tests complete ===" );
};


