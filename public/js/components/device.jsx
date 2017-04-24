class Device extends React.Component {
  render(){
    return (
        <div>
          <div className="row">
            <div className="col-sm-8">
              <p>TV</p>
            </div>
            <div className="col-sm-4">
              <p className="pull-right">192.148.9.3</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <label>Volume</label>
              <input type="text" className="slider" value="" data-slider-min="0" data-slider-max="100" data-slider-value="50" data-slider-step="1" data-slider-selection="after" />
            </div>
          </div>
        </div>
        );
  }
}
