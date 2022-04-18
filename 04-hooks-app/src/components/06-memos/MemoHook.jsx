import React, { useMemo, useState } from 'react';
import { heavyProcess } from '../../helpers/heavyProcess';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css';

export const MemoHook = () => {

    const { counter, increment } = useCounter(2000);
	const [show, setShow] = useState(true);

    // useMemo is a performance optimization that only runs the heavyProcess function 
    // if the show state changes (true -> false) or if the counter state changes (5000 -> 0) 
    const memoProcessed = useMemo(() => { 
        heavyProcess(counter);
    }, [counter]);

	return (
		<>
			<h1> MemoHook </h1>
			<hr />

            <h3> Counter: <small> { counter } </small> </h3>

            <p> { memoProcessed } </p>

            <button className='btn btn-info' onClick={ increment }>
                Increment
            </button>

			<button className='btn btn-outline-info m-2' onClick={ () => setShow(!show) }>
				{ show ? 'Hide' : 'Show' }
			</button>

		</>
	);
};
