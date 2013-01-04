// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone, ExtraView, SideBarView, ContentView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
  
    var app_router = new AppRouter;
    
    app_router.on('route:defaultAction', function(){
      //This is the default route
    });
    
    Backbone.history.start({pushState: true, root: "/"});
  };
  return {
    initialize: initialize
  };
});