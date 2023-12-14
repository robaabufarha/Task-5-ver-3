import React from "react";
import { Link } from "react-router-dom";

function Button({ className, icon, text, action, linkTo, iconStyle }) {
  const renderButtonContent = () => (
    <>
      {icon && <span className={iconStyle}>{icon}</span>}
      <p className="mb-0 mt-0">{text}</p>
    </>
  );

  const renderButton = () => {
    if (linkTo) {
      return (
        <Link to={linkTo} className={className}>
          {renderButtonContent()}
        </Link>
      );
    } else {
      return (
        <button className={className} onClick={action}>
          {renderButtonContent()}
        </button>
      );
    }
  };

  return <>{renderButton()}</>;
}

export default Button;
