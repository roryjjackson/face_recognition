class CreateFaceDetections < ActiveRecord::Migration[7.0]
  def change
    create_table :face_detections do |t|
      t.string :name
      t.decimal :value
      t.string :app_id

      t.timestamps
    end
  end
end
