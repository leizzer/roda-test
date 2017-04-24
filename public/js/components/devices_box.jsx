class DevicesBox extends React.Component {
  componentDidMount(){
    $('.slider').slider();
  }

  render(){
    return (
        <div>
          <div className="row">
            <div className="col-sm-12">
              <h3>Devices</h3>
            </div>

            <DevicesForm />

            <div className="row">
              <div className="col-sm-12">
                <Device />
              </div>
            </div>
          </div>

        </div>
        );
  }
}

ReactDOM.render( <DevicesBox /> , document.getElementById('devices-box-component'));
