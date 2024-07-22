import Input from "../input/Input"
import styles from './Form.module.css'

const Form = () => {
  return (
    <form className={`${styles.formWrapper} container`}>
        <Input label="Email" />
        <Input label="Senha" />
    </form>
  )
}

export default Form