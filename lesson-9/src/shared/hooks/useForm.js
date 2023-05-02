import { useState } from "react";

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    //дані з інпута
    //    console.log(target)
    setState((prevState) => {
      const { name, value, checked, type } = target;
      const newValue = type === "checkbox" ? checked : value;

      return { ...prevState, [name]: newValue };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ ...state });
    setState({ ...initialState }); // очищуєм форму
  };

  return { handleChange, handleSubmit, state, setState };
};

export default useForm;
