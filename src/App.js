import HomePage from "./components/HomePage";
import React, { useState, useCallback, useEffect, createContext, useContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "./redux/slices/Posts";
import Router from "./Router";

export const PostContext = createContext([]);

function App() {



  return (
 
    <Router/>

  );
}

export default App;