import React from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { createPost } from '../redux/slices/Posts';


function PostForm() {

    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createPost(inputs));
        setInputs({});
    }

    return (
        <div>
            <button type="button" className="btn btn-lg btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Add new
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0">
                        <div className="modal-body">
                            <div className="row my-4">
                                <div className="col-12">
                                    <h4 className='text-center'>Add new one</h4>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="d-flex align-items-center justify-content-center my-4">
                                        <div className="col-2">
                                            <label htmlFor="title">Title</label>
                                        </div>
                                        <div className="col-10 me-2">
                                            <input
                                                type="text"
                                                className='border-0 shadow p-4 w-100'
                                                placeholder='Enter post name...'
                                                name='title'
                                                value={inputs.title || ""}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center my-4">
                                        <div className="col-2">
                                            <label htmlFor="title">Descrip<br />tion</label>
                                        </div>
                                        <div className="col-10">
                                            <input
                                                type="text"
                                                className='border-0 shadow p-4 w-100'
                                                placeholder='Enter descriptions...'
                                                name='body'
                                                value={inputs.body || ""}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 mt-5 d-flex justify-content-end">
                                        <div className="col-2">
                                        <button data-bs-dismiss="modal" className="btn btn-success">Post</button>
                                        </div>
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Close</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostForm;