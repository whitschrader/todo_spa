describe('Todo App', function() {
  it('should show seeded items', function(){
    // load data fixture
    var data = getJSONFixture('todos.json');

    // load container html fixture
    appendSetFixtures('<div id="container"></div>');

    // create the view
    var view = new SpaApp.Views.TodosIndex({ collection: data });

    // render the view
    $('#container').html(view.render().el);

    // check for the rendered data
    expect($('#todos')).toContainText(data[0].title);
    expect($('#todos')).toContainText(data[1].title);
    expect($('#todos')).toContainText(data[2].title);
  });
});
