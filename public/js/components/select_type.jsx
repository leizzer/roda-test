class SelectType extends React.Component {

  constructor(){
    super();
    this.state= {cstate: ''};
  }

  componentWillMount(){
    this.setState({cstate: this.props.cstate});
  }

  _renderOptions() {
    return this.props.options.split(',').map( value => {
      return (
          <option key={value} value={value}>{value}</option>
      )
    });
  }

  _handleChange(event){
    this.props.sendChange(event.target.value);
    this.setState({cstate: event.target.value});
  }

  render(){
    var options = this._renderOptions();

    return (
        <select className="form-control" value={this.state.cstate} onChange={this._handleChange.bind(this)} >
          {options}
        </select>
    )
  }

}
