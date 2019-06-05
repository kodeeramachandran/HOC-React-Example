import React from "react";

export const LocationCard = (props) => {
    return (
      <div>
        <hr />
        <p><b>Name:</b> {props.name}</p>
        <p><b>Zone:</b> {props.zone}</p>
        <p><b>Region:</b> {props.region}</p>
        <hr />
      </div>
    )
  }