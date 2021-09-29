import React from "react";
import "./App.css";
import Error from "./Error.js";
import RegistartionFormLogic from "./RegistrationFormLogic.js";
import Search from "./Search.js";
import {Cards} from "./Cards.js";

const Statuses = {
  INITIAL: "initial",
  FAILED: "failed",
  SUCCESSFUL: "successful",
};

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      statusRequest: Statuses.INITIAL,
      filteredList: [],
    };
    this.filterCards = this.filterCards.bind(this);
  }

  componentDidMount() {
    this.getListProd("https://api.punkapi.com/v2/beers");
  }

  filterCards(value) {
    this.setState((state) => {
      return {
        filteredList: state.list.filter((item) => {
          return item.name.toLowerCase().includes(value) || item.description.toLowerCase().includes(value);
        }),
      };
    });
  }

  async getListProd(url) {
    let response = await fetch(url); //'https://api.punkapi.com/v2/beers'
    let results = await response.json();
    console.log("response results", response, results);
    if (response.ok) {
      this.setState({
        list: results,
        filteredList: results,
        statusRequest: Statuses.SUCCESSFUL,
      });
    } else {
      this.setState({
        statusRequest: Statuses.FAILED,
      });
    }
  }

  render() {
    console.log("state in render", this.state.list);
    console.log("stateID", this.state.idToShowFullInfo);
    return (
      <div>
        {this.state.statusRequest === Statuses.INITIAL && (
          <p style={{ textAlign: "center", padding: 20 }}>Loading...</p>
        )}
        {this.state.statusRequest === Statuses.SUCCESSFUL && (
          <React.Fragment>
            <Search filterCards={this.filterCards} />
            <RegistartionFormLogic />
            <Cards data={this.state.filteredList} />
          </React.Fragment>
        )}
        {this.state.statusRequest === Statuses.FAILED && (
          <Error error={this.state.statusRequest} />
        )}
      </div>
    );
  }
}
