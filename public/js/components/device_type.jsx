class DeviceType extends React.Component {

  _renderControls(){
    return this.props.devicetype.controls.map( control => {
      return (
          <div className="row">
            <div className="col-md-3"> {control.label} </div>
            <div className="col-md-3"> {control.input_type} </div>
            <div className="col-md-3"> {control.options} </div>
          </div>
          )
    });
  }

  render() {
    return (
        <div className="row">
          <div className="col-md-12">
            <hr />

            <h5>{this.props.devicetype.name}</h5>

            {this._renderControls()}
          </div>
        </div>
        )
  }
}
