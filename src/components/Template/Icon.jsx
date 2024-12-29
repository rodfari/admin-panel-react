import React from "react";

const Icon = (props) => {
  return (
    <svg className="icon" style={{ width: "1em", height: "1em" }}>
      <use xlinkHref={`/icomoon/sprite.svg#${props.name}`} />
    </svg>
  );
};

export default Icon;
