    $(function(){

   var todos = [
     {id: 1, title: "Do Homework", completed: false},
     {id: 2, title: "Walk the dog", completed: true},
     {blah: 3, title: "Eat Lunch", completed: true}
        ];

    var App = {};
   
    App.count = 0;

    App.setTemp = function(name){
        this.tempName = name;
       	this.temp = HandlebarsTemplates[this.tempName];
       
        return this;
    };

    App.setTarget = function(sel){
        this.target =  sel;
        this.$target = $(sel);
        return this;
    };
    
    
    App.make = function(item){
        this.$el = $(this.temp(item));
        return this;
    };
    
    App.append = function(){
        this.$target.append(this.$el);
        return this;
    };

    App.use = function(targetSel, tempSel){
        return this.setTarget(targetSel).setTemp(tempSel);
     };
    App.render = function(item){
      this.make(item).append();
      this.count += 1;
        return this;
    };
    
    App.doThis = function(fn){
        fn.apply(App);
        return this;
     };


    App.url = "SOMETHING GOES HERE";
    
    App.saveItem = function(item, callback){
      this.count += 1;
      item.id = this.count;
      // DO SOEMTHING HERE
      callback(item);
      return this;
    };


    App.updateItem = function(item, callback){
    	// DO SOMETHING HERE
    	callback();
    };

    App.deleteItem = function(item, callback){
    	// DO SOMETHING HERE
    	callback();
    };

    App.use("#todos", "todo")
      .render(todos[0])
      .render(todos[1]);
    
   	App.models = todos;


   	// Eventhandler for adding todos
    App.doThis(function(){
       var _this = this;
      
       $("#addTodo").on("submit", function(event){
        event.preventDefault();
        
        var newTodo = {completed: false};
        newTodo.title = $("#todo_title").val();
        _this.saveItem(newTodo, function(data){
        	 _this.models.push(data);
             _this.render(data);
         });
        this.reset();
      });
    });


    // Eventhandler for changing todos
    App.doThis(function(){
       var _this = this;
      
      // event for CLICK CHECKBOX
      $("#todos").on("click", ".todo", function(event){
      	var id = this.dataset.id;
       	if(event.target.name === "completed"){
        	var todo =  _this.models[id];
        	todo.completed = !todo.completed;

        	// UPDATE ITEM
        	_this.updateItem(todo, function(){
        		$(this).toggleClass("done-true");
        	});
        }

        if(event.target.id === "removeTodo"){
        	var view = this;

        	// DELETE ITEM
        	_this.deleteItem(id, function(){
        		_this.models.splice(id,1);
        		$(view).remove();
        	})
        }
      });
    });
    
     
    });