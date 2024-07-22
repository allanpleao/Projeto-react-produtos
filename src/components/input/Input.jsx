import styles from "./Input.module.css";
import Error from '../helper/Error'
const Input = ({ label, onChange, value, placeholder, error, onBlur }) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label} htmlFor="">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        className={styles.input}
        type="text"
        placeholder={placeholder}
        onBlur={onBlur}
      />
      { error ? <Error error={error} /> : null}
    </div>
  );
};

export default Input;
