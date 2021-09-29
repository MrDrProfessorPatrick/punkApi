import React from "react"
import {Card} from './Card'


export function Cards(props) {
    console.log("props.props", props.data); // list with arrays
    return props.data.map((item) => <Card key={item.id} item={item} />);
  }