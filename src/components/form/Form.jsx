import { useForm } from "../../hooks/useForm"
import Input from "../input/Input"
import styles from './Form.module.css'

const Form = () => {
  const email = useForm('email');
  const senha = useForm('senha');
  return (
    <form className={`${styles.formWrapper} container`}>
        <Input label="Email" {...email} />
        <Input label="Senha"  {...senha}/>
        
    </form>
  )
}

export default Form