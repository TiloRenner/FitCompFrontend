import { NavLink, redirect, useLoaderData } from "react-router-dom"

const API_URL = import.meta.env.VITE_API_URL

export default function AssessStart()
{
    const categories = useLoaderData()
    console.log("Home", categories)
    return <h1>HalloHome <br></br> {categories.map((element,index)=> {


        return (
                   <NavLink to = {"../assessment/" + element.id +"/1"} key={index}><button>{element.nameGerman}</button></NavLink> 

        )

    })}</h1>


}


export const assessStartLoader = async ()=> {

    try{
        console.log("Try Fetch for Home")
        const res = await fetch(API_URL+ '/assessment/categories')
        console.log("Response: ", res)
        return res.json()
    }
    catch(err)
    {
        console.log("error", err.message)
        return redirect("error")
    }
}