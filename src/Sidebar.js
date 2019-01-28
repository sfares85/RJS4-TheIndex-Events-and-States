import React, { Component } from "react";

function Sidebar(props) {
  return (
    <div id="sidebar">
      <img src="theindex.svg" className="logo" alt="the index logo" />
      <section>
        <h4 className="menu-item active">
          <button onClick={() => props.selectAuthor(null)}>AUTHORS</button>
        </h4>
      </section>
    </div>
  );
}

export default Sidebar;
