Rails.application.routes.draw do
  get 'categories/index'

  get 'category/index'

  get 'todos/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get 'todos' => 'todos#index'

end
