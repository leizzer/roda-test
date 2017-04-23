class DeviceType < Sequel::Model
  one_to_many :controls
  one_to_many :devices
end
