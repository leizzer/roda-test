class DeviceType < Sequel::Model
  plugin :nested_attributes

  one_to_many :controls
  one_to_many :devices

  nested_attributes :controls
end
