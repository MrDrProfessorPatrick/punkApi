import React from "react";

export function CardFullInfo(props) {
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