describe('Todo App', function() {
  var todos;
  beforeEach(function (){
    // load data fixture
    todos = getJSONFixture('todos.json');

    jasmine.Ajax.install();

    jasmine.Ajax.stubRequest('/todos.json').andReturn(todos);

    // load container html fixture
    appendSetFixtures('<div id="container"></div>');

    // create the view
    var view = new SpaApp.Views.TodosIndex({ collection: todos });

    // render the view
    $('#container').html(view.render().el);
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
  });

  it('should show seeded items', function(){
    // check for the rendered todos
    expect($('#todos')).toContainText(todos[0].title);
    expect($('#todos')).toContainText(todos[1].title);
    expect($('#todos')).toContainText(todos[2].title);
  });

  describe('adding a new todo', function() {
    it('should show up in the list of todos', function() {
      $('#todo_title').val('new todo item');
      $('#addTodo').submit();

      expect($('#todos')).toContainText('new todo item');
    });
  });
});
