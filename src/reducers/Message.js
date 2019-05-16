import * as types from '../constants/actionTypes';
import * as Message from '../constants/messages';
let initialState = Message.MSG_WELCOME;

let myReducer = (state = initialState, action) =>{
        switch (action.type) {
            case types.CHANGE_MESSAGE:
                return action.message;
            default: return [...state];
        }
}
export default myReducer;