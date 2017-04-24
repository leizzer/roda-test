class Smarthome
  route 'admin' do |r|

    r.on 'device_types' do
      r.get do
        DeviceType.to_json include: :controls
      end

      r.post do
        r.params.delete '_csrf'
        DeviceType.create r.params

        r.redirect '/admin'
      end
    end

    r.on 'devices' do
      r.get do
        Device.to_json(include: [:controls, :device_type, :control_states])
      end

      r.post do
        r.params.delete '_csrf'
        Device.create r.params

        r.redirect '/admin'
      end

    end

    r.post 'device', :id do |id|
      device = Device.find id: id

      if device
        r.params.delete '_csrf'
        device.update r.params
      end

      r.redirect '/admin'
    end

    r.is do
      r.get do
        @device_types = DeviceType.all
        view 'admin/index'
      end
    end

  end
end
