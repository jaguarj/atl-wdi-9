# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Todo.delete_all
Category.delete_all

grocery_category = Category.create(name: "grocery store")
sports_category = Category.create(name: "sports")

Todo.create(content: "Grab some beer", category_id: grocery_category.id)
Todo.create(content: "A dozen eggs", category_id: grocery_category.id)

Todo.create(content: "Play football", category_id: sports_category.id)
Todo.create(content: "Shoot hoops", category_id: sports_category.id)






