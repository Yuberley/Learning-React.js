import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = ({ user }) => {

    const { counter, increment, decrement } = useCounter(1);

	const { data, loading, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
	
    // If data is true, then we will return the data
    const { author, quote } = !!data && data[0];


	return (
		<>
			<h1> BreakingBad! </h1>
			<hr />

			{
                loading 
                ? 
                    (
                        <div className="spinner-border m-3" role="status">
                            <span className="sr-only"></span>
                        </div>
                    ) 
                :   (
                        <blockquote className="blockquote text-end">
                            <p className=""> { quote } </p>
                            <footer className="blockquote-footer">{ author }</footer>
                        </blockquote>
			        )
            }

            <div className='container-fluid'>
            
            {
                (counter >= 2) && 
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
