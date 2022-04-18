import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import '../02-useEffect/effects.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

	return (
		<>
			<h1>RealExampleRef</h1>
            <hr />

            <button 
                className='btn btn-outline-primary mb-5'
                onClick={ () => setShow(!show) }
            >
                { show ? 'Hide' : 'Show' }
            </button>

            { show && <MultipleCustomHooks />}


		</>
	);
};
