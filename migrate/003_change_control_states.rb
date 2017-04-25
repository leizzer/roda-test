Sequel.migration do
  change do
    alter_table(:control_states) do
      set_column_default :value, ''
      add_column :extra_options, String, default: ''
    end
  end
end
