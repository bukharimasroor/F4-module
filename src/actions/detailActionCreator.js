import {SHOW_POST,REMOVE_POST} from './actionType.js';

export const showPost = (posts) => (
    {
        type: SHOW_POST,
        payload: posts
    }
)

export const removePost = (postsId) => (
    {
        type: REMOVE_POST,
        payload: postsId
    }
)