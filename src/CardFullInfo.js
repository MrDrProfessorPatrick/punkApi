import React from "react";

export function CardFullInfo(props) {
    return (
      // need to delete id here
      <React.Fragment>
        <b> Name: {props.name} </b>
        <span>
          <b>Description:</b> {props.description}
        </span> <br/>
        <span>
          <b>ABV:</b> {props.abv}
        </span> <br/>
        <span>
          <b>Contributed by:</b>
          {props.contributed_by}
        </span>{" "} <br/>
        brewers_tips
        <span> 
          <b>Brewer Tips:</b>
          {props.brewers_tips}
        </span> <br/>
        <span>
          <b>First Brewed:</b>
          {props.first_brewed}
        </span> <br/>
        <span>
          <b>FoodPairing:</b>
          {props.food_pairing}
        </span> <br/>
        <span>
          <b>IBU:</b>
          {props.ibu}
        </span><br/>
        <span> 
          <b>PH:</b>
          {props.ph}
        </span> <br/>
        <span>
          <b>SRM:</b>
          {props.srm}
        </span> <br/>
        <span>
          <b>Tag Line:</b>
          {props.tagline}
        </span>
      </React.Fragment>
    );
  }