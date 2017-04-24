class DevicesForm extends React.Component {
  _getCsrfToken(){
    return $('meta[name="_csrf"]').attr('content');
  }

  render(){
    var token = this._getCsrfToken();

    return (
        <div className="row">
          <div className="col-md-12">
            <h4>New Device</h4>

            <form action="/admin/device" className="form-horizontal" method="post">
              <input name="_csrf" value={token} type="hidden" />

              <div className="form-group">
                <label className="col-md-2 control-label" htmlFor="name">Name</label>

                <div className="input-group col-md-10">
                  <span className="input-group-addon" id="headphones-icon">
                    <span aria-hidden="true" className="glyphicon glyphicon-headphones"></span>
                  </span>
                  <input aria-describedby="headphones-icon" className="form-control" name="name" placeholder="eg. TV - Living room" type="text" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-2 control-label" htmlFor="ip">IP</label>

                <div className="input-group col-md-10">
                  <span className="input-group-addon" id="signal-icon">
                    <span aria-hidden="true" className="glyphicon glyphicon-signal"></span>
                  </span>
                  <input aria-describedby="signal-icon" className="form-control" name="ip" placeholder="192.168.0.23" type="text" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-2 control-label" htmlFor="device_type_id">Control type</label>

                <div className="input-group col-md-10">
                  <select className="form-control" name="device_type_id">
                    <option value="1"></option>
                    <option value="2">Chromecast</option>
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
