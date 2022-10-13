class CreateMeals < ActiveRecord::Migration[7.0]
  def change
    create_table :meals do |t|
      t.string :name
      t.string :course
      t.string :image
      t.text :notes
      t.integer :movie_id
      t.integer :user_id

      t.timestamps
    end
  end
end
