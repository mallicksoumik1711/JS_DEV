import { useParams } from "react-router-dom"

function DynamicRouting() {
    const {userId} = useParams()
    return(
        <h1>Dynamic Routes: {userId} </h1>
    )
}

export default DynamicRouting