import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

const GoBackButton = () => {
  const navigate = useNavigate();
  return (
    <button className="btn-danger" onClick={ () => navigate(-1)}>
        <Icon name="icon-arrow-left" />
        Go back
    </button>
  );
};

export default GoBackButton;
