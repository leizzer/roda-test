Sequel.migration do
  change do
    create_table(:controls) do
      primary_key :id
      Integer :device_type_id
      String :label
      String :input_type
      String :options
    end

    create_table(:devices) do
      primary_key :id
      String :name
      String :ip
      String :device_type_id
    end

    create_table(:device_types) do
      primary_key :id
      String :name
    end
  end
end
