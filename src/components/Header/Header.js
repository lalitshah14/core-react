import React from "react";

const header = props => {
  return (
    <header className="app-header">
      <h1>
        <a href="/" className="app-logo">
          Logo
        </a>
      </h1>
      <ul>
        {props.menus.map((menu, index) => (
          <li key={index}>
            <a href="/">{menu}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default header;
