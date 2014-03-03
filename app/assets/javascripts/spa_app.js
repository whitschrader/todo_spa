window.SpaApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new SpaApp.Routers.Todos();
    return Backbone.history.start();
  }
};

$(document).ready(function(){
  SpaApp.initialize();
});
