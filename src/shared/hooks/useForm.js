import { useState, useCallback } from "react";

const useForm = ({initialState, handleAuth})=> {
    const [state, setState] = useState({...initialState})

    const handleChange = useCallback(({target}) => {
        const {name, value} = target;
        setState(prevState => {
            return {...prevState, [name]: value}
        })
    }, [setState]);

    const handleSubmit = e => {
        e.preventDefault();
        handleAuth({...state});
        setState({...initialState});
    };

    return {state, setState, handleChange, handleSubmit}
}

export default useForm;