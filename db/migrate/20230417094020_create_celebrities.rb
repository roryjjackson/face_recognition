class CreateCelebrities < ActiveRecord::Migration[7.0]
  def change
    create_table :celebrities do |t|
      t.string :name
      t.float :value
      t.string :app_id

      t.timestamps
    end
  end
end
