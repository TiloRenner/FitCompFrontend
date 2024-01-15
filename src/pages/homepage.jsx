import { NavLink } from "react-router-dom";
import headerbild from "../images/people.jpg"
import step1 from "../images/abfrage.png";
import step2 from "../images/ergebnisse.png";
import step3 from "../images/training.png"
import { useContext, useEffect } from "react";

import { UserContext } from "../components/userContext";
import { AuthContext } from "../components/authContext";

const API_URL = import.meta.env.VITE_API_URL  

export default function Homepage () {

    console.log("Run Homepage")

    const baseURL = API_URL;
    const { authToken, setAuthToken} = useContext(AuthContext)

    /*const checkLogin = async() => {
        const res = await fetch(API_URL+ '/authentication/status',{
            withCredentials: true,
            credentials: 'include'})
        console.log("Res:", res)
        const data = await res.json();
        console.log("LoginData:" , data)
        if(data.role)
        {
            console.log("logged in, set token")
            setAuthToken(data.role)
        }
    }*/
    //checkLogin()

    useEffect(() => {
        console.log("StartUseEffect")
        async function checkLogin(){
            const res = await fetch(API_URL+ '/authentication/status',{
                
                credentials: 'include'})
            console.log("Res:", res)
            const data = await res.json();
            console.log("LoginData:" , data)
            if(data.role)
            {
                console.log("logged in, set token: ", data.role)
                setAuthToken(data.role)
                console.log("AuthToken2:" , authToken)
            }
        }
        checkLogin()
    }

    ,[])
    console.log("AuthToken:" , authToken)


   /* console.log("Check Login Status:")
    const res = fetch(API_URL+ '/assessment/categories')
    .then(response => {
      console.log("LoginResponse:",response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }).then(data => {
        console.log("Data: " )
    })*/


return (
<>
<div 
    className="h-[800px] bg-[url('src/images/paar.jpg')] lg:bg-left bg-center bg-no-repeat bg-cover flex justify-center lg:justify-start items-end lg:items-center">
    <div className="w-[80%] md:w-[30%] flex flex-col gap-4 pb-10 lg:ml-10 items-center text-lg">
        <p className=" text-white lg:text-3xl">
            Change your life for the better with your personal fitness plan
            </p>
            <NavLink to="/abfrage" > <button className="text-white text-lg callbtn py-4 rounded-3xl w-60">
            Create your plan now
            </button> </NavLink> 
    </div>
</div>


<section className="py-12 h-full">
    <h1 className="text-3xl">Erstelle deinen Fitnessplan - so geht's</h1>
    <div className="h-full flex flex-col md:flex-row items-center space-y-10 md:space-x-20 pb-10">
        <div className="w-[80%] h-full flex flex-col items-center" >
            <h3>Schritt 1</h3>
            <img className="my-8" src={step1} alt="" />
            <p>Beantworte alle Fragen so genau, wie du kannst.</p>
        </div>
        <div className="w-[80%] flex flex-col items-center">
        <h3>Schritt 2</h3>
            <img className="my-8" src={step2} alt="" />
            <p>Im zweiten Schritt erhältst du von uns eine Einstufung deines Trainingslevels und einen auf dich zugeschittenen Trainingsplan.</p>
        </div>
        <div className="w-[80%] flex flex-col items-center">
        <h3>Schritt 3</h3>
        <img className="my-8" src={step3} alt="" />   
        <p>Jetzt liegt es an dir deinen Trainingsplan zu starten und dein Leben zum Positiven zu verändern! </p> 
        </div> </div>
    <NavLink to="/start" ><button className="callbtn">Create your plan now</button></NavLink>
    </section>
</>
)

}