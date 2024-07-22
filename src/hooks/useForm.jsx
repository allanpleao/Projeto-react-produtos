import { useState } from "react";

const validations = {
  email: {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Digite uma email válido",
  },
  senha: {
    regex: /^.{6,}$/,
    message: "Digite uma senha válida",
  },
};

export const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const validate = (value) => {
    if (value.length === 0) {
      setError("Preencha o campo");
      return false;
    }
    if (type) {
      const rule = validations[type];
      if (rule && !rule.regex.test(value)) {
        setError(rule.message);
        return false;
      }
    } 
      setError(null);
      return true;
    
  };

  const onChange = ({ target }) => {
    setValue(target.value);
    if (error) validate(target.value);
  };
  const onBlur = ({ target }) => {
    setValue(target.value);
    validate(target.value);
  };

  return {
    onChange,
    onBlur,
    value,
    validate,
    error,
  };
};
