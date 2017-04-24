class ControlForm extends React.Component {

  render(){
    return (
        <div>
          <div className="form-group">
            <label className="col-md-2 control-label" htmlFor="name">Label</label>

            <div className="input-group col-md-10">
              <span className="input-group-addon" id="control-icon">
                <span aria-hidden="true" className="glyphicon glyphicon-tasks"></span>
              </span>

              <input aria-describedby="control-icon" className="form-control" name="controls_attributes[][label]" placeholder="eg. Volume" type="text" />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-2 control-label" htmlFor="controls_attributes[input_type]">Control type</label>

            <div className="input-group col-md-10">
              <select className="form-control" name="controls_attributes[][input_type]">
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

              <input aria-describedby="control-icon" className="form-control" name="controls_attributes[][options]" placeholder="Rock, Pop, Ultra-Bass" type="text" />
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
