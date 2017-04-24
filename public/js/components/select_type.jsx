class SelectType extends React.Component {

  _renderOptions() {
    return this.props.options.split(',').map( value => {
      return (
          <option key={value} value={value}>{value}</option>
      )
    });
  }

  render(){
    var options = this._renderOptions();

    return (
        <select className="form-control">
          {options}
        </select>
    )
  }

}
