import axios from "axios"
import qs from 'qs'

export function login(username, password){
    return axios.post('/login', qs.stringify({
        username: username,
        password: password
    }))
}