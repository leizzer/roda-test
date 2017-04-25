Sequel.migration do
  change do
    alter_table(:controls) do
      add_column :endpoint, String, default: ''
    end
  end
end
