class Control extends React.Component {

  _renderInput(){
    switch (this.props.ctype) {
      case 'slider':
        return <SliderType />
        break;
      case 'button':
        return <ButtonType />
        break;
      case 'select':
        return <SelectType options={this.props.coptions}/>
        break;
    }
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
