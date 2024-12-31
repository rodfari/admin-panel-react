import "./Card.sass";
import GoBackButton from "./GoBackButton";
import Icon from "./Icon";

const Card = ({ header, children, footerSettings }) => {
  const fs = footerSettings;
  return (
    <div className="card">
      <div className="card-header">{header}</div>
      <div className="card-body">{children}</div>
      {fs && (
        <div className="card-footer">
          {fs.cancelButton && <GoBackButton />}
          {fs.saveButton && <button> <Icon name={"icon-save"}/> Save</button>}
        </div>
      )}
    </div>
  );
};

export default Card;
