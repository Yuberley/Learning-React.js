import React, { useEffect, useState } from 'react';

export const Message = () => {

    const [ coords, setCoords] = useState({x: 0, y: 0});
    const { x, y } = coords;


    // Mount and unmount effects
	useEffect(() => {

		const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y };
            setCoords(coords);
        }

        window.addEventListener('mousemove', mouseMove)

		return () => {
			window.removeEventListener( 'mousemove', mouseMove );
		};
	}, []);

	const person = { name: 'Juan',
					 email: 'perez@gmail.com',
					 phone: '123456789',
					 address: 'Calle 123', }

	return (
		<>
			<h3>Positivo!</h3>
            <p>
                x: { x } y { y }
            </p>
		</>
	);
};
