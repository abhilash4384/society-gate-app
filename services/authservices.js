import axios from "axios";

export const signIn = () => {
    return axios.get("").then(res => {
        return res.data;
    }).catch(err => {
        return {userToken: "This is just a test token"};
    })
}

export const signUp = () => {
    return axios.get("").then(res => {
        return res.data;
    }).catch(err => {
        return {userToken: "This is just a test token"};
    })
}