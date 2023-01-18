import { createStore } from 'redux';

// ----- ACTIONS -----
let actionIncrement = {
    type: "increment",
};

let actionDecrement = {
    type: "decrement",
};

let actionReset = {
    type: "reset",
};
// ---------------

// ----- REDUCERS -----
const counterReducer = (initialState = 10, action) => {
    switch (action.type) {
        case "increment":
            return initialState + 1;
        case "decrement":
            return initialState - 1;
        case "reset":
            return 0;
        default:
            return initialState;
    }
};
// ---------------

// ----- STORE -----
const store = createStore(counterReducer);
// ---------------


const CounterApp = () => {
    return (
        <div>
            <h2>{store.getState()}</h2>
            <button style={{ margin: "0 2px" }} onClick={() => store.dispatch(actionIncrement)}>+</button>
            <button style={{ margin: "0 2px" }} onClick={() => store.dispatch(actionDecrement)}>-</button>
            <button style={{ margin: "0 2px" }} onClick={() => store.dispatch(actionReset)}>reset</button>
        </div>
    )
}

export { CounterApp, store };