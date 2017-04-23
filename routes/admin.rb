class Smarthome
  route 'admin' do |r|

    r.post 'device_types' do
      r.params.delete '_csrf'
      DeviceType.create r.params

      r.redirect '/admin'
    end

    r.is do
      r.get do
        @devices = Device.all
        @device_types = DeviceType.all
        view 'admin/index'
      end
    end

  end
end
