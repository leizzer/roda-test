class DevicesBox extends React.Component {
  constructor(){
    super();
    this.state = { devices: [], device_types: [], selectedDevice: null }
  }

  componentWillMount(){
    this._getDevices();
    this._getDeviceTypes();
  }

  _getDevices(){
    jQuery.ajax({
      method: 'GET',
      url: '/admin/devices',
      success: (result) => {
        this.setState({devices: JSON.parse(result)});
      }
    })
  }

  _getDeviceTypes(){
    jQuery.ajax({
      method: 'GET',
      url: '/admin/device_types',
      success: (result) => {
        this.setState({device_types: JSON.parse(result)});
      }
    })
  }

  _renderDevices(){
    return this.state.devices.map( device => {
      return (
        <Device key={device.id} dname={device.name} dip={device.ip} dtype={device.device_type.name} dcontrols={device.controls} dstates={device.control_states} device={device} handleEdit={this._handleEditDevice.bind(this)} />
      )
    });
  }

  _handleNewDevice(){
    $('#deviceModal .modal-header .modal-title').html('New Device');
  }

  _handleEditDevice(device){
    $('#deviceModal .modal-header .modal-title').html('Edit Device');

    this.setState({selectedDevice: device});
  }


  render(){
    var devices = this._renderDevices();

    return (
        <div>
          <div className="row">
            <div className="col-sm-12">
              <h3>Devices</h3>

              <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#deviceModal">
                New Device
              </button>
            </div>

            <div className="device-modal modal fade" id="deviceModal" role="dialog" aria-labelledby="deviceModalLabel">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title" id="deviceModalLabel">Modal title</h4>
                  </div>

                  <div className="modal-body">
                    <DevicesForm dtypes={this.state.device_types} device={this.state.selectedDevice} />
                  </div>
                </div>
              </div>
            </div>

            <div id="devices-list" className="row">
              <div className="col-sm-12">
                {devices}
              </div>
            </div>
          </div>

        </div>
        );
  }
}

ReactDOM.render( <DevicesBox /> , document.getElementById('devices-box-component'));
