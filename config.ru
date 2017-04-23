dev = ENV['RACK_ENV'] == 'development'

if dev
  require 'logger'
  logger = Logger.new($stdout)
end

require 'rack/unreloader'
Unreloader = Rack::Unreloader.new(:subclasses=>%w'Roda Sequel::Model', :logger=>logger, :reload=>dev){Smarthome}
require_relative 'models'
Unreloader.require('app.rb'){'Smarthome'}
run(dev ? Unreloader : Smarthome.freeze.app)
