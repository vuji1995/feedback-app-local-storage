import React from "react";

const Header = function ({ bgColor, textColor, text }) {
  return (
    <header style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: `Feedback App`,
  bgColor: `rgba(0,0,0,0.4)`,
  textColor: `pink`,
};

export default Header;
