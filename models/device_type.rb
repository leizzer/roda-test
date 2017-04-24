class DeviceType < Sequel::Model
  plugin :nested_attributes
  plugin :json_serializer

  one_to_many :controls
  one_to_many :devices

  nested_attributes :controls
end
