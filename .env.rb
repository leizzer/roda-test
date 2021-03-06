ENV['RACK_ENV'] ||= 'development'

ENV['DATABASE_URL'] ||= case ENV['RACK_ENV']
when 'test'
  "postgres:///smarthome_test?user=smarthome"
when 'production'
  "postgres:///smarthome_production?user=smarthome"
else
  "postgres:///smarthome_development?user=smarthome"
end
