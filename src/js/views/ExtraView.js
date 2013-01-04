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
], function($, _, Backbone, Mustache, extraTemplate, data){
  var ExtraView = Backbone.View.extend({
    el: $('#extra'),
    render: function(){
      //Using Mustache.js for template rendering
      
      data = JSON.parse(data);
      
      var extraRender = Mustache.to_html(extraTemplate, data);
      
      // Append our compiled template to this Views "el"
      this.$el.html( extraRender );
    }
  });
  // Our module now returns our view
  return ExtraView;
});
