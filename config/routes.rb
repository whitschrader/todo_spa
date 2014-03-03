SpaApp::Application.routes.draw do
  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
  get "main/index"
  root to: 'main#index'
  get '/todos', to: 'todos#index', as: 'todos'
  post '/todos', to: 'todos#create'
  patch "/todos/:id", to: "todos#update"
  delete '/todos/:id', to: 'todos#destroy'
end
