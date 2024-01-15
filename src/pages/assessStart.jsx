import { NavLink, redirect, useLoaderData } from "react-router-dom"

const API_URL = import.meta.env.VITE_API_URL

export default function AssessStart()
{
    const categories = useLoaderData()
    console.log("Home", categories)
    return <div className="flex flex-col justify-center items-center h-dvh"><div className=""><h3>Was ist dein Ziel?</h3><br></br> {categories.map((element,index)=> {


        return (    
                   <NavLink to = {"../assessment/" + element.id +"/1"} key={index}><button className="border-2 text-blue-500 border-blue-500 active:bg-blue-500 hover:bg-blue-500 hover:text-white text-3xl p-4 ml-4 mt-10">{element.nameGerman}</button></NavLink> 
                    
        )

    })}</div></div>


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