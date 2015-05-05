# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

cheddar = Food.create(name: "Cheddar Cheese")
bread = Food.create(name: "White Bread")
butter = Food.create(name: "Butter")

grilled_cheese = Recipe.create(name: "Grilled cheese")
grilled_cheese.foods = [cheddar, bread, butter]

snickers = Food.create(name: "Snickers")
pinkie_pie_sandwich = Recipe.create(name: "Pinkie Pie Sandwich")
pinkie_pie_sandwich.foods = [bread, snickers]


