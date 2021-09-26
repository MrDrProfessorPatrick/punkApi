import React from "react";
import { render } from "react-dom";
import "./App.css";

function ShowListProd(props) {
  console.log("props.props", props.data); // list with arrays
  return props.data.map((item) => {
    if (props.arrIds.includes(item.id)) {
      return (
        <CardFullInfo
          name={item.name}
          description={item.description}
          abv={item.abv}
          contributed_by={item.contributed_by}
          brewers_tips={item.brewers_tips}
          first_brewed={item.first_brewed}
          food_pairing={item.food_pairing}
          ibu={item.ibu}
          ph={item.ph}
          srm={item.srm}
          tagline={item.tagline}
          onClick={() => props.onClickBack(item.id)}
        />
      );
    } else {
      return (
        <Card
          name={item.name}
          image_url={item.image_url}
          description={item.description}
          onClick={() => props.onClickShowDetails(item.id)}
        />
      );
    }
  });
}

function Card(props) {
  return (
    <div class="card">
      <button class="showButton" onClick={props.onClick}>
        ShowFullInfo
      </button>
      <div class="nameDescriptions">
        <b> {props.name} </b>
        <span>{props.description}</span>
      </div>
      <img alt={props.name} src={props.image_url} />
    </div>
  );
}

function CardFullInfo(props) {
  //TODO: indgredienc should be added, method, volume
  return (
    // need to delete id here
    <div class="card">
      <button class="showButton" onClick={props.onClick}>
        {" "}
        / Back
      </button>
      <b> Name: {props.name} </b>
      <span>
        <b>Description:</b> {props.description}
      </span>
      <span>
        <b>ABV:</b> {props.abv}
      </span>
      <span>
        <b>Contributed by:</b>
        {props.contributed_by}
      </span>{" "}
      brewers_tips
      <span>
        <b>Brewer Tips:</b>
        {props.brewers_tips}
      </span>
      <span>
        <b>First Brewed:</b>
        {props.first_brewed}
      </span>
      <span>
        <b>FoodPairing:</b>
        {props.food_pairing}
      </span>
      <span>
        <b>IBU:</b>
        {props.ibu}
      </span>
      <span>
        <b>PH:</b>
        {props.ph}
      </span>
      <span>
        <b>SRM:</b>
        {props.srm}
      </span>
      <span>
        <b>Tag Line:</b>
        {props.tagline}
      </span>
    </div>
  );
}

function DropDownToSort() {
  return (
    <div class="dropdown">
      <button class="dropbtn">Dropdown</button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
}

function Error(props) {
  return <div> {props.error} </div>;
}

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      statusRequest: "initial",
      idToShowFullInfo: [],
    };
    this.showFullInfo = this.showFullInfo.bind(this);
    this.hideFullInfo = this.hideFullInfo.bind(this);
  }

  componentDidMount() {
    this.getListProd("https://api.punkapi.com/v2/beers");
  }

  async getListProd(url) {
    let response = await fetch(url); //'https://api.punkapi.com/v2/beers'
    let results = await response.json();
    console.log("response results", response, results);
    if (response.ok) {
      this.setState({
        list: results,
        statusRequest: "successful",
      });
    } else {
      this.setState({
        statusRequest: "failed",
      });
    }
  }

  showFullInfo(id) {
    let arrIds = this.state.idToShowFullInfo.slice(0);
    arrIds.push(id);
    this.setState({
      idToShowFullInfo: arrIds,
    });
    console.log("showFullInfo Works", this.state.idToShowFullInfo);
  }

  hideFullInfo(id) {
    let arrIds = this.state.idToShowFullInfo.splice(id, 1);
    this.setState({
      idToShowFullInfo: arrIds,
    });
    console.log("hideFullInfoWorks");
  }

  render() {
    console.log("state in render", this.state.list);
    console.log("stateID", this.state.idToShowFullInfo);
    return (
      <div>
        <DropDownToSort />
        <ShowListProd
          data={this.state.list}
          arrIds={this.state.idToShowFullInfo}
          onClickShowDetails={(id) => this.showFullInfo(id)}
          onClickBack={(id) => this.hideFullInfo(id)}
        />
        {this.state.statusRequest ===
          "Failed: Somethint wrong with the server" && (
          <Error error={this.state.statusRequest} />
        )}
      </div>
    );
  }
}
