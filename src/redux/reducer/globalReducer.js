import  actionType  from './globalType';

const globalState = {
    totalOrder: 0
  }
  
const rootReducer = (state = globalState, action) => {
    switch(action.type) {
        case actionType.CHANGE_ORDER:
        if(action.changeType === '+') {
          return {
            ...state,
            totalOrder: state.totalOrder + 1
          }
        }
        if(action.changeType === '-') {
          let totalOrder = 0;
          if(state.totalOrder > 0) totalOrder = state.totalOrder -1;
          return {
            ...state,
            totalOrder: totalOrder
          }
        }
      break;
      default:
        return state;
    }
  }

export default rootReducer;