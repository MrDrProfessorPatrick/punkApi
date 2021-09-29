import React from "react";

export function CardDefault(props) {
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