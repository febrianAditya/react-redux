import { createStore } from "redux";

const initialState = {
    name: "febrian",
    age: 28,
    address: "Jakarta"
}

function reducer(state=initialState, action) {
    // console.log(action, "==> ini value");
    // switch (action.type) {
    //     case "GET_DATA":
    //         return {...state, events: action.payload}
    //     default:
    //         return state;
    // }
    if (action.type === "GET_DATA") {
        return {...state, events: action.payload}
    }else if(action.type === "GANTI_NAMA") {
        return {...state, name: action.payload}
    }else{
        return state
    }
}


const store = createStore(reducer)

export default store