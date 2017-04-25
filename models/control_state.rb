require 'rest-client'

class ControlState < Sequel::Model
  plugin :json_serializer

  many_to_one :device
  many_to_one :control

  def after_update
    Thread.new do
      verb, url, key = control.split ' '
      params = {}
      params[key] = self.value

      RestClient.send verb.downcase, url, params
    end
  end
end
