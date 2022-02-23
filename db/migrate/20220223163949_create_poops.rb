class CreatePoops < ActiveRecord::Migration[7.0]
  def change
    create_table :poops do |t|
      t.datetime :pooped_at
      t.text :description
      t.belongs_to :dog

      t.timestamps
    end

    
  end
end
