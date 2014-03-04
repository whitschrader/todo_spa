SpaApp.Views.TodosShow = Backbone.View.extend({

  template: HandlebarsTemplates['todos/show'],

  events: {

    'click #deleteTodo': 'deleteTodo'
  },

  render: function() {
     $(this.el).html(this.template());

     return this;
  }, 


  });
