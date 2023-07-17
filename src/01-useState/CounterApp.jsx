import { useState } from "react";

//#region 
/*
1-En este ejemplo definimos el state con un objeto con varias propiedades
    {
        counter1: 10,
        counter2: 20,
        counter3: 30
    }
2.- Generamos una variable para destruturas las variables a Utilizar
    const {counter1, counter2, counter3} = state;

3.- Podemos definir que propiedad es la unica que cambiara de estado,
esto con el operador spred ... , para copiar los estados de las otras 
propiedades y cambiando unicamente la necesaria.

const onCounterApp = () => {setCounter( { ...state, counter1: counter1 + 1 }); }

*/
//#endregion

export const CounterApp = () => {

  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  });

  const {counter1, counter2, counter3} = state;

  const onCounterApp = () => {
    setCounter( {
        ...state,
        counter1: counter1 + 1
    });
  }

  return (
    <>
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <h1>Counter3: {counter3}</h1>

      <hr/>

      <button className="btn btn-primary" onClick={onCounterApp}>+1</button>
    </>
  );
};
