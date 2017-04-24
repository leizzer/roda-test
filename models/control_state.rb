class ControlState < Sequel::Model
  plugin :json_serializer

  many_to_one :device
  many_to_one :control
end
