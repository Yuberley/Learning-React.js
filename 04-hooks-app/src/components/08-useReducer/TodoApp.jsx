import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Learning react',
        done: false,
    },
    {
        id: new Date().getTime(),
        description: 'Learning react native',
        done: true,
    },
    {
        id: new Date().getTime(),
        description: 'Learning redux',
        done: false,
    }
];


export const TodoApp = () => {
    
    const [ todos ] = useReducer( todoReducer, initialState )

    console.log( todos );

    const handleAddTodo = (e) => {
        e.preventDefault(); // para que no se recargue la pagina
    }


	return (
		<>
			<h1>Todo App ({ todos.length }) </h1>
			<hr />


            <div className="row">
                <div className="col-7">
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map( (todo, i) => (

                                <li key={ i } className={ `list-group-item ` }>
                                    <span className={ `badge badge-pill badge-primary  mx-2 ${ todo.done ? 'bg-success' : 'bg-secondary' } ` }>{ todo.done ? 'Done' : 'Not done' }</span>
                                    <p className={`text-center ${ todo.done ? 'completed' : '' }`}> { i + 1 }. { todo.description } </p>

                                    <button className='btn btn-danger btn-sm float-right mx-2' >
                                        Delete
                                    </button>

                                </li>
                            ))
                        }    
                    </ul>
                </div>

                <div className="col-5">
                    
                    <h4> Add TODO </h4>
                    <hr />

                    <form onSubmit={ handleAddTodo }>
                        <div className="form-group">
                            <input type="text" name="description" className="form-control" placeholder="Todo description" />
                        </div>
                        <div className='d-grid'>
                            <button type='submit' className="btn btn-outline-primary mt-1 btn-block">Add</button>
                        </div>
                    </form>

                </div>

            </div>

            


		</>
	);
};
