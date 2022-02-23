class CreateDogs < ActiveRecord::Migration[7.0]
  def change
    create_table :dogs do |t|
      t.string :name
      t.text :description
      t.text :image

      t.timestamps
    end

    
  end
end
