class Device extends React.Component {

  _renderControls(){
    return this.props.dcontrols.map( control => {
      return (
        <Control key={control.id} clabel={control.label} ctype={control.input_type} coptions={control.options} />
      )
    });
  }


  render(){
    var controls = this._renderControls();
    return (
        <div>
          <hr />
          <div className="row">
            <div className="col-sm-8">
              <h4>
                <button onClick={() => { this.props.handleEdit(this.props.device) }} type="button" className="btn btn-primary btn-xs" data-toggle="modal" data-target="#deviceModal">
                  Edit
                </button>

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
