class Control < Sequel::Model
  plugin :json_serializer

  TYPES= %w{slider button select}.freeze

  many_to_one :device_type
  one_to_many :control_states
end
