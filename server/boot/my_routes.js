'use strict';

module.exports = function(app) {
  // Install a "/ping" route that returns "pong"
  app.get("/success",function(req,res){
    console.log(req["user"]);
    res.send("success");
  });
  // Install a "/ping" route that returns "pong"
  app.get("/error",function(req,res){
    res.status(500)
    res.send("invalid credentials" )
  })

};