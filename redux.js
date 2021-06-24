const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    id: 0,
    age: 0,
    active: true
}

//Reducer(Membuat rule penyimpanan)
const rootReducer = (state = initialState, action) => {
    if(action.type === "ADD_ID") {
        return {
            ...state,
            id: state.id + 1
        }
    }

    if(action.type === "ADD_AGE") {
        if(action.newValue) {
            return {
                ...state,
                age: state.age + action.newValue
            }
        }
        return {
            ...state,
            age: state.age + 1
        }
    }
    return state;
}

//Store(Membuat penyimpanan)
const store = createStore(rootReducer);
console.log(store.getState());

//Subscribe(Melakukan perintah saat ada update pada penyimpanan)
store.subscribe(() => {
    console.log('Current Value: ', store.getState())
});

//Dispatch(Memanggil rules)
store.dispatch({type: "ADD_ID"});
store.dispatch({type: "ADD_AGE"});
store.dispatch({type: "ADD_AGE", newValue: 17});
