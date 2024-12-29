import { Fragment } from "react";
import "./Input.sass";
const Input = (props) => {
  return (
    <Fragment>
        <input {...props} />
    </Fragment>
  );
};

export default Input;
