class Control < Sequel::Model
  many_to_one :device_type
end
