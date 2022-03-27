import React, { useState } from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({value}) => { 

    const [ counter, setCounter ] = useState( value );

    return (
        <>
            <h1>Counter App</h1>
            <h2> { counter } </h2>
            <button onClick={ () => setCounter( value )}>Reset</button>
            <button onClick={ () => setCounter( counter + 1 )}>+1</button>
            <button onClick={ () => setCounter( counter - 1 )}>-1</button>
        </>
    );

}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

const RelojApp = () => {
    const [hora,setHora]=useState(reloj);
    setTimeout(() => {
      setHora(reloj)
    }, 1000);
    return (
      <>
        <span>{hora}</span>
      </>
    )
  }
  const reloj = () => {
    let date = new Date();
    let horaActual = {
      hora: date.getHours(),
      minuto: date.getMinutes(),
      segundo: date.getSeconds()
    }
    const { hora, minuto, segundo } = horaActual;
    const now = `${hora}:${minuto < 10 ? '0' + minuto : minuto}:${segundo<10? '0' + segundo : segundo}`;
    return now;
  }
   
export {
    CounterApp as default,
    RelojApp,
}