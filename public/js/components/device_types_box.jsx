class DeviceTypesBox extends React.Component {

  constructor(){
    super();

    this.state = { device_types: [], control_forms: []};
  }

  componentWillMount(){
    this._getDeviceTypes();
    this._addControlForm();
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

  _addControlForm(){
    var forms = [ <ControlForm key={this.state.control_forms.length} /> ].concat(this.state.control_forms)
    this.setState({control_forms: forms});
  }

  _renderDeviceTypes(){
    return this.state.device_types.map( dtype => {
      return (
        <DeviceType key={dtype.id} devicetype={dtype} />
      );
    });
  }


  render() {
    return (
        <div>
          <div className="row">
            <div className="col-md-12">
              <h3>Device Types</h3>

              <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#typeModal">
                New Type
              </button>
            </div>
          </div>

          <div className="device-modal modal fade" id="typeModal" role="dialog" aria-labelledby="typeModalLabel">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title" id="typeModalLabel">New Device type</h4>
                </div>

                <div className="modal-body">
                  <DeviceTypesForm control_forms={this.state.control_forms} handleAddControl={this._addControlForm.bind(this)} />
                </div>
              </div>
            </div>
          </div>

          {this._renderDeviceTypes()}
        </div>
        );
  }
}

ReactDOM.render( <DeviceTypesBox /> , document.getElementById('device-types-box-component'));
