class DeviceType extends React.Component {

  _renderControls(){
    return this.props.devicetype.controls.map( control => {
      return (
          <div className="row" key={control.id}>
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

            <h4>
              <button onClick={() => { this.props.handleEdit(this.props.devicetype) }} type="button" className="btn btn-primary btn-xs" data-toggle="modal" data-target="#typeModal">
                Edit
              </button>
              <button onClick={() => { this.props.handleDelete(this.props.devicetype) }} type="button" className="btn btn-danger btn-xs">
                Delete
              </button>

              {this.props.devicetype.name}
            </h4>

            {this._renderControls()}
          </div>
        </div>
        )
  }
}
