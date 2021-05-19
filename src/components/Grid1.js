import React from "react";

// props = propiedades
export const Grid1 = (props) => {
  return (
    <div className={props.clase}>
        <div>
          <h1>{props.title}</h1>
          <h2> {props.subtitle} </h2>
          <h2> {props.subtitle2} </h2>
        </div>
        <div>
          <img
            src={props.image}
            alt=""
          />
        </div>
    </div>
  );
};
