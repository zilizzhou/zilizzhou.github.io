const defaultState = [["white", "white", "white", "white"], 0]


export default function boardReducer(state = defaultState,action) {

    switch (action.type) {
        case 'boardClick':
        const value = state[action.x][action.y];
          if (value === 'white') {
          state[action.x][action.y] = 'black';
        state[1] += 1;
        } else {
            state[action.x][action.y ] = 'white';
             state[1] -= 1;}
         return [...state];
         default:
             return state;
    }
    }


 

