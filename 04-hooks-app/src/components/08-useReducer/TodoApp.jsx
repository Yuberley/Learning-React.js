import React, { useReducer } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';

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

	return (
		<>
			<h1>Todo App ({ todos.length }) </h1>
			<hr />


            <div className="row">
                <div className="col-md-4">
                    Status
                </div>
                <div className="col-md-4">
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map( (todo, i) => (

                                <li key={ i } className={ `list-group-item ${ todo.done ? 'done' : '' }` }>
                                    <span className='badge badge-pill badge-primary bg-black mx-2'>{ todo.done ? 'Done' : 'Not done' }</span>
                                    { i + 1 }. { todo.description }

                                    <button className='btn btn-danger btn-sm float-right mx-2' >
                                        Delete
                                    </button>

                                    <button className='btn btn-primary btn-sm float-right'>
                                        Toggle
                                    </button>

                                </li>
                            ))
                        }    
                    </ul>
                </div>
                <div className="col-md-4">
                    Options
                </div>
            </div>

            


		</>
	);
};
