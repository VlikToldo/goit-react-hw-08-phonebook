import style from "./button.module.css"

const Button = ({children, type = 'submit'}) => {
    return <button type={type} className={style.btn}>{children}</button>
}

export default Button;