var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  initialize: function(){
    this.render();
  },

  render: function(){
    $('#main').append('<p>Wat</p>');
  }
});
