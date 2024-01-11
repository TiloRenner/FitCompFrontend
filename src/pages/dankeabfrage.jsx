import { NavLink } from "react-router-dom"

export default function DankeAbfrage () {



    return (
    <>
    <div className="flex justify-center items-center h-[700px]">
        <div className="flex flex-col gap-8 justify-center items-center ">
    <p className="text-xl w-[50%]">Danke, dass du die Fragen beantwortet hast. Nun erstellen wir für dich einen Trainingsplan, der zu dir passt!
    </p>
    <NavLink to="/result"><button className="callbtn">Zum Ergebnis</button></NavLink>
    </div>
    </div>
    </>
    )
    
    }