

export const todoReducer = (state = [], action) => {

    switch (action?.type) {
        case 'ADD_TODO':
            return [...state, {
                id: action.id,
                description: action.description,
                done: false
            }];
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        done: !todo.done
                    };
                } else {
                    return todo;
                }
            });
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
    
}
