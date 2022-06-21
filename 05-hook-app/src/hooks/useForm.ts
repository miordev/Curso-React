import { useState } from 'react';

export const useForm = (initialValue: any = {}) => {
  const [formState, setFormState] = useState(initialValue);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialValue)
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}
