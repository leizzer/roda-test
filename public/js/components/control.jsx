class Control extends React.Component {

  _renderInput(){
    switch (this.props.ctype) {
      case 'slider':
        return <SliderType sendChange={this._handleControlChange.bind(this)} />
        break;
      case 'button':
        return <ButtonType sendChange={this._handleControlChange.bind(this)} />
        break;
      case 'select':
        return <SelectType options={this.props.coptions} sendChange={this._handleControlChange.bind(this)} />
        break;
    }
  }

  _handleControlChange(){
  }

  render(){
    var input_type = this._renderInput();

    return (
          <div className="row">
            <div className="col-sm-12">
              <label>{this.props.clabel}</label>
              {input_type}
            </div>
          </div>
        )
  }
}
