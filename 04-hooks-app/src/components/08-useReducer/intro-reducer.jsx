
const initialState = [{
    id: 1,
    todo: 'React',
    done: false,
}]

const newTodo = {
    id: 2,
    todo: 'React Native',
    done: false,
}

const todoReducer = (state = initialState, action) => {
    switch (action?.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            }
            )
        default:
            return state
    }
}

const action = {
    type: 'ADD_TODO',
    payload: newTodo,
}

let todos = todoReducer();

console.log(todos);

todos = todoReducer(todos, action);

console.log(todos);


