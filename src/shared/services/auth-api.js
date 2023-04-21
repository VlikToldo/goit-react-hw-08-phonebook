import axios from "axios";

const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com"
})

export const signup = (data) => {
    return instance.post("/users/signup", data);
}

export const login = (data) => {
    return instance.post("/users/login", data);
}