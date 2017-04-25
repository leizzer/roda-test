class SliderType extends React.Component {

  componentDidMount(){
    $(this.slider).slider();
  }

  render(){
    return (
      <input ref={(input)=> { this.slider = input; }} type="text" className="slider" value="" data-slider-min="0" data-slider-max="100" data-slider-value="50" data-slider-step="1" />
    )
  }

}
