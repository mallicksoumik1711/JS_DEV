import { useEffect, useState } from "react"

function Github() {
    const [data, setdata] = useState("")
    useEffect(()=>{
        fetch("https://api.github.com/users/mallicksoumik1711")
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{return setdata(data)})
    }, [])
    return(
        <>
        <h1>Github followers: {data.followers}</h1>
        <h1>Github url: {data.avatar_url}</h1>
        <img src={data.avatar_url} alt="" />
        </>
    )
}

export default Github