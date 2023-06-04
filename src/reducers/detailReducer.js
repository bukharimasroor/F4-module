import {SHOW_POST,REMOVE_POST} from '../actions/actionType.js';

const initialState = {
    detailPage: {}
}

const detailpageReducer = (state = initialState, actions) =>{
     switch(actions.type){

    
        case SHOW_POST: return(
            {
                ...state, detailPage: actions.payload
            }
        )
        default: return state
     }
}
export default detailpageReducer;