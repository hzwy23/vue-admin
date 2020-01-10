import axios from "axios"

export function getMenu(){
    return axios.get('/menu')
}