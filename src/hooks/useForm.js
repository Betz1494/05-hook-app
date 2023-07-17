import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

  const [formState, setformState] = useState( initialForm );


  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setformState(initialForm);
  }

  return {
    ...formState, //exponemos y desestructuramos el objeto y ahora podemon importar username, email, password directo
    formState,
    onInputChange,
    onResetForm
  };
};
