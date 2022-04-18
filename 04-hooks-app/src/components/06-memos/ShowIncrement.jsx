import React, { memo } from 'react';

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('ShowIncrement rendered');

	return (
		<button className="btn btn-info" onClick={increment}>
			Increment
		</button>
	);
}
)
