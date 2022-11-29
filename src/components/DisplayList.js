import React from 'react';

function DisplayList() {

  const usersName = [
    { name: "Parthiban", age: 23 },
    { name: "Kalai", age: 24 },
    { name: "Vivek", age: 25 },
    { name: "Raja", age: 27 },
    { name: "Ramesh", age: 20 },
    { name: "Praveen", age: 19 },
    { name: "Pazhani", age: 24 },
    { name: "Muthukumar", age: 13 },
    { name: "Vilvendhan", age: 29 },
    { name: "Sugan", age: 21 }
  ];

  return (
    <div className="container">
      <div className="row d-flex align-itms-center justify-content-center">
      <div className='col-10'>
      <h5 className='my-4 text-center'>List the values from array of objects using <span className='text-warning'>map() function</span></h5>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {usersName.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
    </div>
  );
};

export default DisplayList;