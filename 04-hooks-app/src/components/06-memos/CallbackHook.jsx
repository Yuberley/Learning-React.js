import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effects.css';


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback( () => {
        setCounter( c => c + 1 );
    }
    , [ setCounter ]);


	return (
        <>
            <h1> CallbackHook: { counter } </h1>
            <hr />

            <ShowIncrement increment={ increment } />
            
        </>
    )
};
