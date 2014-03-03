window.SpaApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from Backbone!');
    new SpaApp.Routers.Todos();
    return Backbone.history.start();
  }
};

$(document).ready(function(){
  SpaApp.initialize();
});
