class Device < Sequel::Model
  plugin :nested_attributes

  many_to_one :device_type
  one_to_many :control_states

  nested_attributes :control_states

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
