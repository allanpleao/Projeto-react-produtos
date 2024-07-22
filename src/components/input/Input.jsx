import styles from "./Input.module.css";
const Input = ({ label, onChange, value, placeholder }) => {
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
      />
    </div>
  );
};

export default Input;
