import UserContext from "../context/UserContext"
import { useContext } from "react"

function Profile(){
    const {user} = useContext(UserContext)
    
    if(!user) return <h1>No User found. Please login</h1>
    return <h1>welcome: {user}</h1>
}

export default Profile