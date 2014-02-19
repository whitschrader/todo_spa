    $(function(){

   var todos = [
     {id: 1, title: "Do Homework", completed: false},
     {id: 2, title: "Walk the dog", completed: true}];

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
      item.id = this.count;
      // DO SOEMTHING HERE
      callback(item);
      this.count += 1;
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

    App.findModel = function(id){
      var model;
      $.each(this.models, function(index, item){
          if(item.id === id){
              console.log("found",item)
             model = item;
          }
      });
      console.log(model)
      return model;
    };

    App.removeModel = function(todo){
      var index = this.models.indexOf(todo)
      this.models.splice(index,1);
    };

   
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
        var id = Number(this.dataset.id);
        if(event.target.name === "completed"){
          var view = this;
          var todo =  _this.findModel(id);
          console.log(todo)
          todo.completed = !todo.completed;

          // UPDATE ITEM
          _this.updateItem(todo, function(){
            $(view).toggleClass("done-true");
          });
        }

        if(event.target.id === "removeTodo"){
          var view = this;
          var todo =  _this.findModel(id);
          // DELETE ITEM
          _this.deleteItem(id, function(){
            _this.removeModel(todo)
            console.log(_this.models)
            $(view).remove();
          })
        }
      });
    });
    

     
    });