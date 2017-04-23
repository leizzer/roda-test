class Control < Sequel::Model
  TYPES= %w{slider button select}.freeze

  many_to_one :device_type
end
