Sequel.migration do
  change do
    create_table(:controls) do
      primary_key :id
      String :label
      String :input_type
    end
  end
end
