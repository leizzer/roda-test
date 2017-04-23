class Smarthome
  route 'user' do |r|

    r.is do
      r.get do
        @devices = Device.all
        view 'user/index'
      end
    end
  end
end
