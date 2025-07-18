import { forwardRef } from 'react';
import styles from './styles.module.css';

type DefaultInputProps = {
  inputTitle: string;
  id: string;
} & React.ComponentPropsWithoutRef<'input'>;

export const DefaultInput = forwardRef<HTMLInputElement, DefaultInputProps>(
  ({ inputTitle, id, type, ...props }, ref) => {
    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
      console.log(e.target.value);
    }

    return (
      <>
        <label htmlFor={id}>{inputTitle}</label>
        <input
          onChange={handleInput}
          type={type}
          id={id}
          ref={ref}
          className={styles.input}
          {...props}
        />
      </>
    );
  },
);
