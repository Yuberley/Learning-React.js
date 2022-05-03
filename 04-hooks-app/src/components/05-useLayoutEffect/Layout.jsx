import React, { useLayoutEffect, useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const Layout = ({ user }) => {

    const { counter, increment, decrement } = useCounter(1);

	const { data, loading, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
	
    // If data is true, then we will return the data
    const { quote } = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect(() => {
      
        console.log( pTag.current.getBoundingClientRect() );
    
    }, [])


	return (
		<>
			<h1> useLayoutEffect! </h1>
			<hr />


            <blockquote className="blockquote text-end">
                <p ref={pTag}> { quote } </p>
            </blockquote>


            <div className='container-fluid'>
            
            {
                counter >= 2 && 
                (
                    <button className='btn btn-secondary' onClick={ decrement }>
                    Back quote
                    </button>
                )
                
            }

            <button className='btn btn-info float-end' onClick={ increment }>
                Next quote
            </button>
            </div>

		</>
	);
};
