import { useEffect, useRef, useState } from "react";

export const useFetch = ( url ) => {

	// useRef is a hook that allows us to store a reference to a value
	// that we can access later
	// If change the value of the variable, the component will not re-render
	const isMounted = useRef(true);	

	const [state, setState] = useState({
		data: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		return () => {
			isMounted.current = false;
		}
	}, []);

	useEffect(() => {

		setState({
			data: null,
			loading: true,
			error: null,
		});

		const fetchData = async () => {
			try {
				const response = await fetch( url );
				const data = await response.json();

				if ( isMounted.current ) {
					setState({
						data,
						loading: false,
						error: null,
					});
				}

				
			} catch (error) {
				setState({
					data: null,
					loading: false,
					error: error.message,
				});
			}
		};
		fetchData();
	}, [ url ]);

	return state;
};
