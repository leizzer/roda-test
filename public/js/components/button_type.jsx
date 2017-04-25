class ButtonType extends React.Component {

  componentDidMount(){
    $(this.button).bootstrapToggle();
    $(this.button).on('change', this._handleChange.bind(this));
  }

  _handleChange(event){
    var value = event.target.checked ? 'on' : 'off'

    this.props.sendChange(value);
  }

  render(){
    return (
        <input ref={(input)=> { this.button = input }} value={this.props.cstate} type="checkbox" data-size="mini" />
    )
  }

}
