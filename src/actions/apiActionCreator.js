import axios from "axios";
import { FETCH_POSTS_SUCCESS,FETCH_POSTS_REQUEST,FETCH_POSTS_FAILURE } from "./actionType.js";

export const fetchApiRequest = () =>(
    {
        type: FETCH_POSTS_REQUEST
    }
)

export const fetchApiSuccess = (posts) => (
    {
        type: FETCH_POSTS_SUCCESS,
        payload: posts

    }
)

export const fetchApiFailure = (error) => (
    {
        type: FETCH_POSTS_FAILURE,
        payload: error
    }
)

//fetching data from api
export const fetchingData = () => {
    return (dispatch) => {
        dispatch(fetchApiRequest())
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {dispatch(fetchApiSuccess(response.data))
            console.log(response.data);
        }
        )
        .catch((error) => dispatch(fetchApiFailure(error)))
    }
}