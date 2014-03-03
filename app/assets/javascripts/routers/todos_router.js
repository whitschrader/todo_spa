SpaApp.Routers.Todos = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  index: function() {
    console.log("home page");
    var view = new SpaApp.Views.TodosIndex();
    $('#container').html(view.render().el);
  }
});
