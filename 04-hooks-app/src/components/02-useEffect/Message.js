import React, { useEffect } from 'react';

export const Message = () => {

    useEffect(() => {
    
        console.info('Mounted component');
    
      return () => {

        console.info('Unmounted component');

      }
    }, [])
    

	return (
		<>
			<h3>Great!</h3>
		</>
	);
};
