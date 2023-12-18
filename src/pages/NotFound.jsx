import {Link} from "react-router-dom"

export default function NotFound()
{

    return(
        <div><h2>Page not found</h2>
        <p>lalala</p>
        <p>Go to the <Link to="/">Homepage</Link>. </p>
        </div>
    )
}