import React, { useState, useCallback, useEffect, createContext, useContext } from 'react';
import { deletePost, getAllPosts } from '../redux/slices/Posts';
import { useDispatch, useSelector } from "react-redux";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PostForm from './PostForm';

function DataTable() {

  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(getAllPosts(''));
  }, [dispatch])

  useEffect(() => {
    initFetch()
  }, [initFetch])

  const handleSearch = (event) => {
    const query = event.target.value;
    dispatch(getAllPosts(`?q=${query}`));
  };

  const deleteOnClick = (id,data) => {
    console.log(data);
    dispatch(deletePost({id}));
  }

  return (
    <div className="container mb-5">
      <div className="row d-flex alig-items-center justify-content-center">
        <div className="col-10">
          <div className="col-12 text-center mb-4">
            <h3>Fetched datas from service layer using
              <strong>
                <span className='text-danger'> R</span>
                <span className='text-warning'>edux</span>
                <span className='text-danger'> T</span>
                <span className='text-warning'>ool</span> <span className='text-danger'> K</span>
                <span className='text-warning'>it</span>
              </strong>
            </h3>
          </div>
          
          <div className="row my-5 align-items-center justify-content-center">
            <div className="col-6">
              <input type="text" className='shadow border-0 p-4 w-100' onChange={handleSearch}  placeholder='serach...' />
            </div>
            <div className="col-6 d-flex justify-content-end">
              <PostForm/>
            </div>
          </div>
          
          <div className="col-12">
            <Paper>
              <TableContainer sx={{ maxHeight: 700 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Id</TableCell>
                      <TableCell>Title</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Edit</TableCell>
                      <TableCell>Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {posts.length > 0 && posts.map((data, index) => (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        <TableCell>{data.id}</TableCell>
                        <TableCell>{data.title}</TableCell>
                        <TableCell>{data.body}</TableCell>
                        <TableCell>
                          <button className='btn btn-success'>Edit</button>
                        </TableCell>
                        <TableCell>
                          <button className='btn btn-danger' onClick={() => deleteOnClick(data.id,data)} >Delete</button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataTable;