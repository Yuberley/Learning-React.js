import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

import '../02-useEffect/effects.css';

export const Momorize = () => {

    const { counter, increment } = useCounter(10);

	const [show, setShow] = useState(true);

	return (
		<>
			<h1> Momorize </h1>
			<hr />

            <h3> Counter: <Small value={ counter } /> </h3>

            <button className='btn btn-info' onClick={ increment }>
                Increment
            </button>

			<button className='btn btn-info m-2' onClick={ () => setShow(!show) }>
				{ show ? 'Hide' : 'Show' }
			</button>

		</>
	);
};
