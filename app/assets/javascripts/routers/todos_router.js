SpaApp.Routers.Todos = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  index: function() {
    var view = new SpaApp.Views.TodosIndex();
    $('#container').html(view.render().el);
  }
});
