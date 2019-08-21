import React from "react";

function BookRows(props) {
  return (
    <table className="mt-3 table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Authors</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>{props.authorBooks} </tbody>
    </table>
  );
}

export default BookRows;
