import React from 'react';
import { useState } from 'react';

function SearchFilter() {

    const list = [
        "Parthiban",
        "Vivek",
        "Muthu Kumar",
        "Pazhani Murugan",
        "Raja Kumar",
        "Ramesh",
        "Kalai",
        "Sugan",
        "Praveen",
        "Kannan",
        "Uvaraj",
        "Karthik"
    ]

    const [nameList, setNameList] = useState(list);

    const handleChange = (event) => {

        let value = event.target.value;

        if (value === "") {
            setNameList(nameList);
        }

        const filteredNameList = list.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
        );
        setNameList(filteredNameList);
    }

    return (
        <div className="container text-center">
            <div className='row align-items-center justify-content-center flex-column'>
                <div className="col-6">
                    <input
                        type="text"
                        onChange={handleChange}
                        className="form-control shadow border-0 py-4"
                        placeholder='Search here...'
                    />
                </div>
                <div className="col-12 my-4">
                    <ul>
                        {nameList.map((item, index) => (
                            <p className='text-decoration-none' key={index}>{item}</p>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SearchFilter;