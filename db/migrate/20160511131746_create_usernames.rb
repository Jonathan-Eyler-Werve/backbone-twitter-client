class CreateUsernames < ActiveRecord::Migration
  def change
    create_table :usernames do |t|

      t.timestamps null: false
    end
  end
end
