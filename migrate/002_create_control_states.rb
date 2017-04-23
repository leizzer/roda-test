Sequel.migration do
  change do
    create_table(:control_states) do
      primary_key :id
      Integer :device_id
      Integer :control_id
      String :value
    end
  end
end
