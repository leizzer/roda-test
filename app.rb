require_relative 'models'

require 'roda'

class Smarthome < Roda
  opts[:unsupported_block_result] = :raise
  opts[:unsupported_matcher] = :raise
  opts[:verbatim_string_matcher] = true

  plugin :default_headers,
    'Content-Type'=>'text/html',
    'X-Frame-Options'=>'deny',
    'X-Content-Type-Options'=>'nosniff',
    'X-XSS-Protection'=>'1; mode=block'

  use Rack::Session::Cookie,
    :key => '_Smarthome_session',
    #:secure=>!TEST_MODE, # Uncomment if only allowing https:// access
    :secret=>File.read('.session_secret')

  plugin :csrf
  plugin :render, engine: 'slim'
  plugin :multi_route

  plugin :public
  plugin :static, ['/js', '/css', '/images']

  Unreloader.require('routes'){}

  route do |r|
    r.multi_route

    r.root do
      view 'index'
    end
  end
end
