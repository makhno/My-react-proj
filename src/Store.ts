import {createStore} from "redux"
import {DUMMY_ACTION, SEND_MESSAGE} from "./Actions"

const initialState = {
    pet: "dog",
}

const reducer = (state = initialState, action:any) => {
    switch (action.type) {
        case DUMMY_ACTION:
            return Object.assign({}, state, {
                pet: action.str
            })
        case SEND_MESSAGE: console.log("deleteme");
            return Object.assign({}, state, {
                message: action.str,
                deleteme: new Date()
            })
        default:
            return state
    }
}

export const store = createStore(reducer);
