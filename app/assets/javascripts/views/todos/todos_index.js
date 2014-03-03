SpaApp.Views.TodosIndex = Backbone.View.extend({

  template: HandlebarsTemplates['todos/index'],

  render: function() {
    $(this.el).html(this.template());
    return this;
  }

});
