import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import style from './text-field.module.css';

const TextField = ({label, handleChange, ...props}) => {
    const id = useMemo(()=> nanoid(), [])

    return (
        <div className={style.formBox}>
            <lable htmlFor={id}>{label}</lable>
            <input className={style.field} id={id} onChange={handleChange} {...props} />
        </div>
    )
}

export default TextField;