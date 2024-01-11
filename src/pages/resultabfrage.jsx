import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


export default function ResultAbfrage () {

    const [userData, setUserData] = useState([]);

    console.log(userData)
   
    // useEffect(() => {
    //   fetch('')
    //     .then(response => response.json())
    //     .then(data => setUserData(data))
    //     .catch(error => console.error('Error:', error));
    // }, []);

    return (
        <>
       
    <h1>Dein Ergebnis</h1>
    <p>
        Danke Username, dass du die Fragen beantwortest hast. Im Folgenden findest du dein persönlichen Ergebnis!
    </p>
    
    <div className="flex justify-center gap-8 py-20 flex-wrap">
        <div className="text-left cssborder border-8 rounded-3xl p-8">
        <h3>Übersicht</h3>
        
        <p>
            Kalorienbedarf: 2800 Kalorien
        </p>
        <p>
            BMI: 30
        </p>
        <ul className="">
            <li>Liegestütze: Einsteiger</li>
            <li>Kniebeuge: Einsteiger</li>
            <li>Crunches: Einsteiger</li>
            <li>Klimmzüge: Einsteiger</li>
            <li>Ausdauer: Einsteiger</li>
            <li>Trainingsintensität: Einsteiger</li>
            
        </ul>
        
        </div>
        <div className="flex flex-col place-content-center ">
        <h3>Ergebnis</h3>
        <p>Dein Trainingslevel wurde ingesamt eingestuft als:</p>
        <p className="text-3xl font-bold">Einsteiger</p>
        </div>
        <div>
        </div>
        
    </div>
    <div style={{backgroundColor: "#C1D72D"}}className="flex justify-center gap-8 py-10 flex-wrap">
        <div className="text-white text-lg text-wrap">
            Starte jetzt deine individuellen Trainingsplan und verändere Dein Leben zum Besseren.
        </div>
        <div className="text-white space-y-4">
        <p>Jetzt loslegen und Registrieren</p>
        <NavLink to="/register"><button className="callbtn">Training starten</button></NavLink>
        </div>
        </div>
    </>
    )
}