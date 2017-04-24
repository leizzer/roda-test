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
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h4>New device type</h4>

              <form action="/admin/device_types" className="form-horizontal" method="post">
                <input name="_csrf" value="w4R1-M2kZ7RYEDTMvR8k8l8nqOJEitOPgEGAGRXZkIs" type="hidden" />

                <div className="form-group">
                  <label className="col-md-2 control-label" htmlFor="name">Name</label>

                  <div className="input-group col-md-10">
                    <span className="input-group-addon" id="bookmark-icon">
                      <span aria-hidden="true" className="glyphicon glyphicon-bookmark"></span>
                    </span>

                    <input aria-describedby="bookmark-icon" className="form-control" name="name" placeholder="eg. Chromecast" type="text" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-11 col-md-offset-1">
                    <h4>
                      Controls 
                      <button onClick={this._addControlForm.bind(this)} type="button" className="btn btn-primary btn-sm">
                        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                      </button>
                    </h4>

                    {this.state.control_forms}
                  </div>
                </div>


                <div className="input-group">
                  <input className="btn btn-primary" value="Save" type="submit" />
                </div>
              </form>
            </div>

          </div>

          {this._renderDeviceTypes()}
        </div>
        );
  }
}

ReactDOM.render( <DeviceTypesBox /> , document.getElementById('device-types-box-component'));
