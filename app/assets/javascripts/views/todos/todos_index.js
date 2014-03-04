SpaApp.Views.TodosIndex = Backbone.View.extend({
  id: 'todos', //tells us the id of el

  template: HandlebarsTemplates['todos/index'],

  events: {

    'submit #addTodo': 'addTodo',
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

  

  addTodo: function (event) {
    event.preventDefault();
    var todoData = {
      title: $("#todo_title").val(),
      completed: false
    };

    var _this = this;

    $.ajax({
      type: 'post',
      url: '/todos.json',
      context: this,
      data: { todo: todoData}
    }).done(function (data) {
      var showTodo = new SpaApp.Views.TodosShow({ model: data });
      var myHtml = showTodo.render().el;
      _this.$el.append(myHtml);

     
    });   
  }

});
