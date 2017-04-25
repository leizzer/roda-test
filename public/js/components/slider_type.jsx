class SliderType extends React.Component {

  constructor(){
    super();
    this.state = {cstate: ''}
  }

  componentWillMount(){
    this.setState({cstate: this.props.cstate});
  }

  componentDidMount(){
    $(this.slider).slider();
    $(this.slider).on('change', this._handleChange.bind(this));
  }

  _handleChange(obj){
    this.setState({cstate: obj.value.newValue});

    this.props.sendChange(this.state.cstate);
  }

  render(){
    var max = this.props.coptions || "100";

    return (
      <input ref={(input)=> { this.slider = input; }} type="text" className="slider" data-slider-min="0" data-slider-max={max} data-slider-value={this.props.cstate} data-slider-step="1" />
    )
  }

}
