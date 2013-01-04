// Filename: views/useragreement
define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'mustache',
  'text!/templates/',
  'text!/config.json'
], function($, _, Backbone, Mustache, sideTemplate, data){
  var SideBarView = Backbone.View.extend({
    el: $('#sidebar'),
    render: function(){
      //Using Mustache.js for template rendering
      
      data = JSON.parse(data);
      
      var sideRender = Mustache.render(sideTemplate, data);
      
      // Append our compiled template to this Views "el"
      this.$el.html( sideRender );
    }
  });
  // Our module now returns our view
  return SideBarView;
});
