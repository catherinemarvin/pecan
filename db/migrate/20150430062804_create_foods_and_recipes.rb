class CreateFoodsAndRecipes < ActiveRecord::Migration
  def change
    create_table :foods_recipes, id: false do |t|
      t.belongs_to :food, index: true
      t.belongs_to :recipe, index: true
    end
  end
end
