class ControlState < Sequel::Model
  many_to_one :device
  many_to_one :control
end
