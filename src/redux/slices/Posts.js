import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import PostsDataServices from '../services/PostsServices';

const initialState = [];

export const getAllPosts = createAsyncThunk(
    "get_posts",
    async (params) => {
        const response = await PostsDataServices.getAll(params);
        return response.data
    }
);

export const deletePost = createAsyncThunk(
    "delete_post",
    async ({id}) => {
        await PostsDataServices.deletePost(id);
        return {id};
    }
);

export const createPost = createAsyncThunk(
    "post",
    async (data) => {
        const response = await PostsDataServices.post(data);
        return response.data
    }
);

const postSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: {
        [getAllPosts.fulfilled]: (state, action) => {
            return [...action.payload];
        },
        [deletePost.fulfilled]: (state, action) => {
            let index = state.findIndex(({id}) => id === action.payload.id);
            state.splice(index, 1);
        },
        [createPost.fulfilled] : (state,action) =>{
            state.push(action.payload);
        }
    }
});

const { reducer } = postSlice;
export default reducer;
