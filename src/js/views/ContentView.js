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
], function($, _, Backbone, Mustache, contentTemplate, data){
  var ContentView = Backbone.View.extend({
    el: $('#content'),
    render: function(){
      //Using Mustache.js for template rendering
      
      data = JSON.parse(data);
      
      var contentRender = Mustache.to_html(contentTemplate, data);
      
      // Append our compiled template to this Views "el"
      this.$el.html( contentRender );
    }
  });
  // Our module now returns our view
  return ContentView;
});
