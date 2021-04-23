import React from "react";

function Table(props) {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">E-Mail</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((data) => {
          return (
            <tr>
              <td><img src= {data.picture.medium} /></td>
              <td>{data.name.first} {data.name.last}</td>
              <td>{data.phone}</td>
              <td>{data.email}</td>
              <td>{data.dob.date.slice(0,10)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
