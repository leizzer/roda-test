class ControlForm extends React.Component {
  constructor(){
    super();
    this.state = {
      control: {},
      label: '',
      input_type: '',
      options: ''
    };
  }

  componentWillMount(){
    if (this.props.control){
      this._updateState(this.props.control);
    }
  }

  componentWillReceiveProps(nextProps){
    this._updateState(nextProps.control);
  }

  _updateState(control){
    this.setState({
      control: control,
      label: control.label,
      input_type: control.input_type,
      options: control.options,
    });

  }

  _addHiddenId(){
    if (this.state.control.id){
      return <input name="controls_attributes[][id]" value={this.state.control.id} type="hidden" />
    }
  }

  _handleChangeLabel(event){
    this.setState({label: event.target.value})
  }

  _handleChangeInputType(event){
    this.setState({input_type: event.target.value})
  }

  _handleChangeOptions(event){
    this.setState({options: event.target.value})
  }

  render(){
    return (
        <div>
          {this._addHiddenId()}

          <div className="form-group">
            <label className="col-md-2 control-label" htmlFor="name">Label</label>

            <div className="input-group col-md-10">
              <span className="input-group-addon" id="control-icon">
                <span aria-hidden="true" className="glyphicon glyphicon-tasks"></span>
              </span>

              <input name="controls_attributes[][label]" value={this.state.label} aria-describedby="control-icon" className="form-control" placeholder="eg. Volume" type="text" onChange={this._handleChangeLabel.bind(this)} />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-2 control-label" htmlFor="controls_attributes[input_type]">Control type</label>

            <div className="input-group col-md-10">
              <select name="controls_attributes[][input_type]" value={this.state.input_type} className="form-control" onChange={this._handleChangeInputType.bind(this)} >
                <option value="slider">Slider</option>
                <option value="button">Button</option>
                <option value="select">Select</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-2 control-label" htmlFor="name">Options</label>

            <div className="input-group col-md-10">
              <span className="input-group-addon" id="control-icon">
                <span aria-hidden="true" className="glyphicon glyphicon-tasks"></span>
              </span>

              <input value={this.state.options} aria-describedby="control-icon" className="form-control" name="controls_attributes[][options]" placeholder="Rock, Pop, Ultra-Bass" type="text" onChange={this._handleChangeOptions.bind(this)} />
            </div>
            <div className="row">
              <p className="col-md-10 col-md-offset-2 help-block">
                For maximum values use a number (eg: 100). For Select inputs list the options separated by comma.
              </p>
            </div>
          </div>

        </div>
      );
  }

}
