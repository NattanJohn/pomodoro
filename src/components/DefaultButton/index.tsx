import styles from './styles.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentPropsWithoutRef<'button'>;

export function DefaultButton({ ...props }: DefaultButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[props.color || 'green']}`}
      {...props}
    >
      {props.icon}
    </button>
  );
}
