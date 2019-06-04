ReactJS Higher Order Components

A higher-order component is a function that takes a component and returns a new component.

// HOC.js

import React, {Component} from 'react';

export default function Hoc(HocComponent){
    return class extends Component{
        render(){
            return (
                <div>
                    <HocComponent></HocComponent>
                </div>

            );
        }
    } 
}

The primary use of Higher-Order Component is to enhance the reusability of particular components in multiple modules or components. We can also comprise various components to get improved components. Most of the third party libraries are using this feature to write another cool library.
