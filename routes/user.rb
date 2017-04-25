class Smarthome
  route 'user' do |r|

    r.on 'devices' do
      r.get do
        Device.to_json(include: [:controls, :device_type, :control_states])
      end
    end

    r.post 'control_state', :id do |id|
      # This should change to allow per User state
      control_state = ControlState.find control_id: id

      if control_state
        r.params.delete '_csrf'
        control_state.update r.params

        control_state.to_json
      else
        response.status 404
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
