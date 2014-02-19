class TodosController < ApplicationController
  def index
    @todos = Todo.all
    respond_to do |f|
      f.html
      f.json { render :json => @todos, only: [:id, :text, :done]}
    end
  end

  def create
    todo_params = params.require(:todo).permit(:text, :done)
    @todo = Todo.create(todo_params)

    respond_to do |f|
      f.json { render :json => @todo, only: [:id, :text, :done] }
    end
  end

  # Fill in destroy
  def destroy
  end

  # Fill in update
  def update
  end
end
