class ButtonType extends React.Component {

  componentDidMount(){
    $(this.button).bootstrapToggle();
  }

  render(){
    return (
        <input ref={(input)=> { this.button = input }} checked type="checkbox" data-size="mini" />
    )
  }

}
