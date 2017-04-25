class DeviceTypesForm extends React.Component {

  constructor(){
    super();
    this.state = {devicetype: {}, control_forms: [] };
  }

  componentWillReceiveProps(nextProps){
    if (this.props.devicetype != nextProps.devicetype) {
      this.setState({
        devicetype: nextProps.devicetype
      })

      this._loadControls(nextProps.devicetype.controls);
    }
  }

  componentWillMount(){
    this._addControlForm();
  }

  _getCsrfToken(){
    return $('meta[name="_csrf"]').attr('content');
  }

  _formAction(){
    if (this.state.devicetype['id']) {
      return `/admin/device_type/${this.state.devicetype['id']}`
    }else{
      return "/admin/device_types"
    }
  }

  _handleChange(event){
    var changed = {};
    changed[event.target.name] = event.target.value;

    this.setState(changed);
  }

  _addControlForm(){
    var forms = [ <ControlForm key={this.state.control_forms.length} /> ].concat(this.state.control_forms)
    this.setState({control_forms: forms});
  }

  _loadControls(controls){
    var forms = controls.map(control =>{
      return <ControlForm key={`e${control.id}`} control={control} />
    });
    console.log(forms);

    this.setState({control_forms: forms});
  }


  render(){
    var token = this._getCsrfToken();

    return (

        <form action={this._formAction()} className="form-horizontal" method="post">
          <input name="_csrf" value={token} type="hidden" />

          <div className="form-group">
            <label className="col-md-2 control-label" htmlFor="name">Name</label>

            <div className="input-group col-md-10">
              <span className="input-group-addon" id="bookmark-icon">
                <span aria-hidden="true" className="glyphicon glyphicon-bookmark"></span>
              </span>

              <input name="name" value={this.state.devicetype.name} aria-describedby="bookmark-icon" className="form-control" placeholder="eg. Chromecast" type="text" onChange={this._handleChange.bind(this)} />
            </div>
          </div>

          <div className="row">
            <div className="col-md-11 col-md-offset-1">
              <h4>
                Controls 
                <button onClick={ this._addControlForm.bind(this) } type="button" className="btn btn-primary btn-xs">
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

        );
  }
}
