import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';

const baseURL = "https://jsonplaceholder.typicode.com/users";

function PrintApiData() {

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
    });
  }, []);

  const [users, setUsers] = useState([]);

  return (
    <div className='row my-5 align-items-center justify-content-center'>
      <h4 className='text-center'>Fetch data from <span className='text-warning'>Rest APIs</span> using <span className='text-danger'>axios</span></h4>
      <div className="col-9 text-center">
        <div className='row align-items-center justify-content-center'>
          {users.map((user, index) => (
            <div className="shadow bg-white rounded col-md-3 col-sm-4 col-12 m-3 my-2" key={index}>
              <div className="card-body py-4 mb-2">
                <h5 className="card-title my-3">{user.name}</h5>
                <p className='text-muted'>
                  Some quick example text to build on the card title and make up the bulk of the card's content
                </p>
                <p className="card-text text-muted p-2">{user.company.catchPhrase}</p>
                <a href="#" className="btn btn-warning">NivenSoft</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PrintApiData