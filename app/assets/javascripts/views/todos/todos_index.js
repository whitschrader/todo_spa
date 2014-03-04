SpaApp.Views.TodosIndex = Backbone.View.extend({
  id: 'todos', //tells us the id of el

  template: HandlebarsTemplates['todos/index'],

  events: {

    'submit #addTodo': 'newTodo',
    'click #removeTodo': 'removeTodo'
  },

  render: function() {
    $(this.el).html(this.template());

    _.each(this.collection, function (someTodo) {
      var view = new SpaApp.Views.TodosShow({ model: someTodo });
      $(this.el).append(view.render().el);
    }, this);

    return this;
  },


  newTodo: function () {
    var _this = this;
    var newTodo = {
      title: $("#todo_title").val(),
      completed: false
    };
    $.ajax({
      type: 'post',
      url: '/todos.json',
      context: this,
      data: { todo: newTodo}
    }).done(function (data) {
      var newTodo = new SpaApp.Views.TodosShow({ model: data });
      _this.$el.append(newTodo);
    });   
  }

});
