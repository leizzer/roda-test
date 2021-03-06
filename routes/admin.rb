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

    r.post 'device_type', :id do |id|
      device_type = DeviceType.find id: id

      if device_type
        r.params.delete '_csrf'
        device_type.update r.params
      end

      r.redirect '/admin'
    end

    r.post 'device_type/delete', :id do |id|
      device_type = DeviceType.find id: id

      if device_type
        device_type.delete
        device_type.to_json
      else
        response.status 404
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

    r.post 'device/delete', :id do |id|
      device = Device.find id: id

      if device
        device.delete
        device.to_json
      else
        response.status 404
      end

    end

    r.is do
      r.get do
        @device_types = DeviceType.all
        view 'admin/index'
      end
    end

  end
end
