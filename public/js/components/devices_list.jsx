class DevicesList extends React.Component {
  constructor(){
    super();
    this.state = { devices: [] }
  }

  componentWillMount(){
    this._getDevices();
  }

  _getDevices(){
    jQuery.ajax({
      method: 'GET',
      url: '/user/devices',
      success: (result) => {
        this.setState({devices: JSON.parse(result)});
      }
    })
  }

  _renderDevices(){
    return this.state.devices.map( device => {
      return (
        <Device key={device.id} dname={device.name} dip={device.ip} dtype={device.device_type.name} dcontrols={device.controls} dstates={device.control_states} device={device} />
      )
    });
  }


  render(){
    return (
        <div className="row">
          <div className="col-sm-12">
            { this._renderDevices() }
          </div>
        </div>
    )
  }
}

ReactDOM.render( <DevicesList /> , document.getElementById('devices-list-component'));
