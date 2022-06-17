import {handleActions} from 'redux-actions'

import axios from 'axios';

function getPostAPI(postId){
    return axios.get(`http://jsonplaceholder.typicode.com/posts/${postId}`);
}

const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

