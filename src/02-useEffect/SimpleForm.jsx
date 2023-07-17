import { useState, useEffect } from "react";
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'baburto',
        email: 'betzaith@google.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setformState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect(() => {
      //console.log("use Effect called");
    }, []); //En useEffect el arreglo vacio, significa que se llama una unica vez.

    useEffect(() => {
      //console.log("formState changed");
    }, [formState]);

    useEffect(() => {
     // console.log("email changed");
    }, [email]); 
    

    return (
      <>
        <h1>Formulario</h1>
        <hr />

        <input
          type="text"
          className="form-control"
          placeholder="Username"
          name="username"
          value={username}
          onChange={ onInputChange }
        />

        <input
          type="email"
          className="form-control mt-2"
          placeholder="betzaith@google.com"
          name="email"
          value={email}
          onChange={ onInputChange }
        />

        {
            (username === 'baburto2') && <Message/>
        }
      </>
    );
}
