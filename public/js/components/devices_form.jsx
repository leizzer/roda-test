class DevicesForm extends React.Component {

  constructor(){
    super();

    this.state = {id: null, name: '', ip: '', device_type_id: ''}
  }

  componentWillReceiveProps(nextProps){
    if (this.props.device != nextProps.device) {
      this.setState({
        name: nextProps.device.name,
        id: nextProps.device.id,
        ip: nextProps.device.ip,
        device_type_id: nextProps.device.device_type.id
      })
    }
  }

  _getCsrfToken(){
    return $('meta[name="_csrf"]').attr('content');
  }

  _renderOptions() {
    return this.props.dtypes.map( type => {
      return (
          <option key={type.id} value={type.id}>{type.name}</option>
      )
    });
  }

  _formAction(){
    if (this.state.id) {
      return `/admin/device/${this.state.id}`
    }else{
      return "/admin/devices"
    }
  }

  _handleChange(event){
    var changed = {};
    changed[event.target.name] = event.target.value;

    this.setState(changed);
  }

  render(){
    var token = this._getCsrfToken();
    var type_options = this._renderOptions();

    return (
        <div className="row">
          <div className="col-md-12">
            <form action={this._formAction()} className="form-horizontal" method="post" >
              <input name="_csrf" value={token} type="hidden" />

              <div className="form-group">
                <label className="col-md-2 control-label" htmlFor="name">Name</label>

                <div className="input-group col-md-10">
                  <span className="input-group-addon" id="headphones-icon">
                    <span aria-hidden="true" className="glyphicon glyphicon-headphones"></span>
                  </span>
                  <input value={this.state.name} aria-describedby="headphones-icon" className="form-control" name="name" placeholder="eg. TV - Living room" type="text" onChange={this._handleChange.bind(this)}/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-2 control-label" htmlFor="ip">IP</label>

                <div className="input-group col-md-10">
                  <span className="input-group-addon" id="signal-icon">
                    <span aria-hidden="true" className="glyphicon glyphicon-signal"></span>
                  </span>
                  <input value={this.state.ip} aria-describedby="signal-icon" className="form-control" name="ip" placeholder="192.168.0.23" type="text" onChange={this._handleChange.bind(this)} />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-2 control-label" htmlFor="device_type_id">Device type</label>

                <div className="input-group col-md-10">
                  <select value={this.state.device_type_id} className="form-control" name="device_type_id" onChange={this._handleChange.bind(this)} >
                    {type_options}
                  </select>
                </div>
              </div>

              <div className="input-group">
                <input className="btn btn-primary" value="Save" type="submit" />
              </div>
            </form>

          </div>
        </div>
        );
  }
}
