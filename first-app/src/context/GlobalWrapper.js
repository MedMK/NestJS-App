import { createContext, useState } from "react";
import axios from "axios";
export const GlobalContext = createContext();

export default function Wrapper({children}){
    const [users, setUsers] = useState([])
    const FetchUsers = ()=>  {
        axios.get('http://localhost:5000/user')
        .then(res => {
            setUsers(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }
    const Search = (querry) => {
        axios.get(`http://localhost:5000/user/search/${querry}`)
        .then(res => {
            setUsers(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }
    

    return(
        <GlobalContext.Provider value={{FetchUsers,Search ,users}}>
            {children}
        </GlobalContext.Provider>
    )
}