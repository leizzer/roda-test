class Device < Sequel::Model
  plugin :association_dependencies
  plugin :nested_attributes
  plugin :json_serializer

  many_to_one :device_type, eager: :controls
  one_to_many :control_states

  add_association_dependencies control_states: :destroy

  nested_attributes :control_states

  def controls
    device_type.controls
  end

  def before_create
    unless self.device_type.controls.empty?
      states = []

      self.device_type.controls.each do |c|
        states << {control_id: c.id}
      end

      self.control_states_attributes = states
    end

    super
  end
end
