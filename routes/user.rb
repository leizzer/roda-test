class Smarthome
  route 'user' do |r|

    r.on 'devices' do
      r.get do
        Device.to_json(include: [:controls, :device_type, :control_states])
      end
    end

    r.is do
      r.get do
        @devices = Device.all
        view 'user/index'
      end
    end

  end
end
