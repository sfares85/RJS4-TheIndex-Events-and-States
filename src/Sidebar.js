import React from "react";

function Sidebar() {
  return (
    <div id="sidebar">
      <img src="theindex.svg" className="logo" alt="the index logo" />
      <section>
        <h4 className="menu-item active">
          <button>AUTHORS</button>
        </h4>
      </section>
    </div>
  );
}

export default Sidebar;
