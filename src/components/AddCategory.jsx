import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
 
  const [inputValue, setinputValue] = useState("");



  const onInputChange = (event) => {
    setinputValue(event.target.value);
  };


  const onsubmit = (event) => {
    event.preventDefault();

    if( inputValue.trim().length < 1) return;

    //Forma 1 (enviando categories como props)
      // setCategories([inputValue, ...categories]);
    
    //Forma 2 (sin enviar categories como props)
      // setCategories((categor)=> [inputValue, ...categor]);

      onNewCategory(inputValue.trim())

      setinputValue('');
  };


  return (
    <form onSubmit={onsubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
