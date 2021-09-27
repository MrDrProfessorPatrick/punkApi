import React from "react";
import "./App.css";

function Cards(props) {
  console.log("props.props", props.data); // list with arrays
  return props.data.map((item) => <Card key={item.id} item={item}/>);
}

class Card extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isDefault: true,
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((state) => ({isDefault: !state.isDefault}))
  }

  render(){
    const {item} = this.props;

    return (
      <div className="card">
        <button className="showButton" onClick={this.toggle}>
          {this.state.isDefault ? "Show Full Info" : "Back"} 
        </button>
        {this.state.isDefault ? (
          <CardDefault 
            name={item.name}
            image_url={item.image_url}
            description={item.description}/>
          ) : (
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
          />)}
      </div>
    )
  }
}

function CardDefault(props) {
  return (
    <React.Fragment>
      <div className="nameDescriptions">
        <b> {props.name} </b>
        <span>{props.description}</span>
      </div>
      <img alt={props.name} src={props.image_url} />
    </React.Fragment>
  );
}

function CardFullInfo(props) {
  //TODO: indgredienc should be added, method, volume
  return (
    // need to delete id here
      <React.Fragment>
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
      </React.Fragment>
  );
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});

    this.props.filterCards(event.target.value)
  }

  render() {
    return <input value = {this.state.value} onChange={this.handleChange}/>
  }
}

function DropDownToSort() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Dropdown</button>
      <div className="dropdown-content">
        <a href="#">by name</a>
        <a href="#">be volume</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
}

function Error(props) {
  return <div> {props.error} </div>;
}

const Statuses = {
  INITIAL: "initial",
  FAILED: "failed",
  SUCCESSFUL: "successful"
}

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      statusRequest: Statuses.INITIAL,
      filteredList: []
    };
    this.filterCards = this.filterCards.bind(this)
  }

  componentDidMount() {
    this.getListProd("https://api.punkapi.com/v2/beers");
  }

  filterCards(value) {
    this.setState((state) => {
      return {
        filteredList: state.list.filter((item) => {
          return item.name.includes(value) || item.description.includes(value)
        })
      }
    })
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
        {this.state.statusRequest ===
          Statuses.INITIAL && (
          <p style={{textAlign: 'center', padding: 20}}>Loading...</p>
        )}
        {this.state.statusRequest ===
          Statuses.SUCCESSFUL && (
            <React.Fragment>
              <DropDownToSort />
              <Search filterCards={this.filterCards}/>
              <Cards
                data={this.state.filteredList}
              />
            </React.Fragment>
        )}
        {this.state.statusRequest ===
          Statuses.FAILED && (
          <Error error={this.state.statusRequest} />
        )}
      </div>
    );
  }
}
