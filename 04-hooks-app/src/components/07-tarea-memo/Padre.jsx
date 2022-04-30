import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

import '../02-useEffect/effects.css';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // useCallback() is a function that allows us to create a function that is executed only if the
    // Components are updated or rendered for the first time. For example, if we have a function
    // which is executed every time a component is rendered, and we want it to be executed only if the
    // The component is updated, we can use useCallback() to optimize the code. In this case,
    // the function is executed only if the value of value changes.
    const incrementar = useCallback( (num) => {
        setValor( valor + num );
    }
    , [setValor] );


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
