class Control extends React.Component {

  _renderInput(){
    switch (this.props.ctype) {
      case 'slider':
        return <SliderType sendChange={this._handleControlChange.bind(this)} cstate={this.props.cstate} coptions={this.props.coptions} />
        break;
      case 'button':
        return <ButtonType sendChange={this._handleControlChange.bind(this)} cstate={this.props.cstate} coptions={this.props.coptions} />
        break;
      case 'select':
        return <SelectType options={this.props.coptions} sendChange={this._handleControlChange.bind(this)} cstate={this.props.cstate} coptions={this.props.coptions} />
        break;
    }
  }

  _getCsrfToken(){
    return $('meta[name="_csrf"]').attr('content');
  }

  _handleControlChange(value){
    jQuery.ajax({
      method: 'POST',
      url: `/user/control_state/${this.props.cid}`,
      data: {_csrf: this._getCsrfToken(), value: value},
      success: (result) => {
        console.log(result);
      },
      error: (result) => {
        console.log('error updating status');
      }
    });
  }

  render(){
    var input_type = this._renderInput();

    return (
          <div className="row">
            <div className="col-xs-4">
              <label>{this.props.clabel}</label>
            </div>
            <div className="col-xs-8">
              {input_type}
            </div>
          </div>
        )
  }
}
