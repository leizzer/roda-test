class Smarthome
  route 'admin' do |r|
    r.is do
      r.get { view 'admin/index'}
    end
  end
end
