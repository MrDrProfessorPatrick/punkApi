import React from "react";

export default class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: "",
      };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({ value: event.target.value });
  
      this.props.filterCards(event.target.value);
    }
  
    render() {
      return <input value={this.state.value} onChange={this.handleChange} />;
    }
  }