import React from "react";
import "./CustomButton.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : "isGoogleSignIn"} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
