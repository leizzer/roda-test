class DeviceType < Sequel::Model
  plugin :association_dependencies
  plugin :nested_attributes
  plugin :json_serializer

  one_to_many :controls
  one_to_many :devices

  add_association_dependencies controls: :destroy, devices: :destroy

  nested_attributes :controls
end
