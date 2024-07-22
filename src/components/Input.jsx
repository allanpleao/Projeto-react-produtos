import styles from './Input.module.css'
const Input = ({ label, onChange, value, search}) => {
  return (
    <div className={styles.inputWrapper}>
        <label className={styles.label} htmlFor="">{label}</label>
        <input value={value} onChange={onChange} className={styles.input} type="text" />
    </div>
  )
}

export default Input