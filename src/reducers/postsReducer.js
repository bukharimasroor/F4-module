import { FETCH_POSTS_REQUEST,FETCH_POSTS_SUCCESS,FETCH_POSTS_FAILURE } from "../actions/actionType";

const initialState = {
    loading: false,
    posts: [],
    error: ''
}

  const postsReducer = (state = initialState, actions) => {
    switch(actions.type){
        case FETCH_POSTS_REQUEST: return(
            {
                ...state,loading: true
            }
        )
        case FETCH_POSTS_SUCCESS: return(
            {
                ...state, loading: false, posts: actions.payload, error: ''
            }
        )
        case FETCH_POSTS_FAILURE: return(
            {
                ...state, loading: false, posts: [], error: actions.payload
            }
        )
        default: return state
    }

}

export default postsReducer;