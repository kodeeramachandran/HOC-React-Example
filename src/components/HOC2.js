import React from 'react';

export const Hoc2 = (WrappedComponent) => (props) => {
    return (
      <div>
        <WrappedComponent {...props}>
          {props.children.toUpperCase()}
        </WrappedComponent>
      </div>
    )
  }
