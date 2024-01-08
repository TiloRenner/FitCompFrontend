import { NavLink } from "react-router-dom";
import headerbild from "../images/people.jpg"
import step1 from "../images/abfrage.png";
import step2 from "../images/ergebnisse.png";
import step3 from "../images/training.png"

export default function Homepage () {



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
    <NavLink to="/abfrage" ><button className="callbtn text-lg text-white py-4 rounded-3xl w-60">Create your plan now</button></NavLink>
    </section>
</>
)

}