import React from "react";
import {LocationCard} from "./LocationCard"



export const Location = (props) => {
    const { searchTerm } = props
    return (
      <div>       
          <div>
            <h2>Preferred Locations</h2>
          </div>        
        <div>
          {props.data
            .filter((location,index) => `${location.name} ${location.zone} ${location.region}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0)
            .map((location,index) => <LocationCard key={index} {...location} />)}
        </div>
      </div>
    )
  }