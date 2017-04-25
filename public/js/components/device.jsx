class Device extends React.Component {

  _renderControls(){
    return this.props.dcontrols.map( control => {
      return (
        <Control key={control.id} cid={control.id} cstate={this._controlState(control)} clabel={control.label} ctype={control.input_type} coptions={control.options} />
      )
    });
  }

  _renderActions(){
    if (this.props.handleEdit && this.props.handleDelete) {
      return (
        <span>
          <button onClick={() => { this.props.handleEdit(this.props.device) }} type="button" className="btn btn-primary btn-xs" data-toggle="modal" data-target="#deviceModal">
            Edit
          </button>
          <button onClick={() => { this.props.handleDelete(this.props.device) }} type="button" className="btn btn-danger btn-xs">
            Delete
          </button>
        </span>
      )
    }
  }

  _controlState(control){
    var controlstates = $.grep(this.props.device.control_states, function(cs){
      return cs.control_id == control.id;
    });

    if (controlstates[0]) {
      return controlstates[0].value;
    }else{
      return '';
    }
  }


  render(){
    var controls = this._renderControls();
    return (
        <div>
          <hr />
          <div className="row">
            <div className="col-sm-8">
              <h4>
                {this._renderActions()}
                {this.props.dname} ({this.props.dtype})
              </h4>
            </div>

            <div className="col-sm-4">
              <p className="pull-right">{this.props.dip}</p>
            </div>

            {controls}
          </div>
        </div>
        );
  }
}
