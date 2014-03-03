SpaApp.Views.TodosIndex = Backbone.View.extend({

  template: JST['todos/index'],

  render: function() {
    $(this.el).html(this.template());
    return this;
  }

});
