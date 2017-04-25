class DeviceTypesForm extends React.Component {

  _getCsrfToken(){
    return $('meta[name="_csrf"]').attr('content');
  }

  render(){
    var token = this._getCsrfToken();

    return (

        <form action="/admin/device_types" className="form-horizontal" method="post">
          <input name="_csrf" value={token} type="hidden" />

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
                <button onClick={this.props.handleAddControl} type="button" className="btn btn-primary btn-sm">
                  <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                </button>
              </h4>

              {this.props.control_forms}
            </div>
          </div>


          <div className="input-group">
            <input className="btn btn-primary" value="Save" type="submit" />
          </div>
        </form>

        );
  }
}
