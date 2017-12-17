class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :author
      t.string :story_id
      t.text :comment

      t.timestamps
    end
  end
end
