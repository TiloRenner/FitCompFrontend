import { NavLink } from "react-router-dom"

const API_URL = import.meta.env.VITE_API_URL   

export default function DashBoard () {

    const assessmentDataFromLocalStorage = JSON.parse(localStorage.getItem('assessmentData'));
    const baseURL = API_URL;

  if (assessmentDataFromLocalStorage) {
     const fetchAdjustedProduct = async ()=>
          {
            console.log("Try Fetch Product")
            try{
              const response = await fetch(API_URL + "/assessment/adjustedProduct",{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  withCredentials: true,
                credentials: 'include',
                },
                body: JSON.stringify(assessmentDataFromLocalStorage),
               });

               const data = await response.json()
               console.log("ProductData: ", data)
               localStorage.removeItem('assessmentData')
            }
            catch(err)
            {
              console.error ('There has been a problem with your fetch operation: ', err.message);
            }

          };

        fetchAdjustedProduct();
    } else {
        // Wenn die Daten nicht vorhanden sind, führen Sie eine alternative Logik aus
        console.log('No data found in local storage.');
       }

    return (
    <>
    <div className="flex justify-start items-start h-[700px] mt-20 ml-80">
        
        <div className="flex flex-col space-y-8 ">
        <h1 className="text-left">Dashboard</h1>
        <h3 className="text-left text-3xl">Wiederholungen gesamt</h3>
        <div className="flex space-x-20 text-left">
            <div>
                 <p className="font-bold">Liegestütze</p>
                 <p className="">20</p>
            </div>
            <div>
                <p className="font-bold">Crunches</p>
                <p>30</p>
            </div>
            <div>
                <p className="font-bold">Klimmzüge</p>
                <p>12</p>
            </div>
            <div>
                <p className="font-bold">Kniebeuge</p>
                <p>40</p>
            </div>
        </div>
        <h3 className="text-left text-3xl">Beliebte Übungen</h3>
        <div className="flex space-x-20 text-left">
            <div>
                <p className="font-bold">Beste Übung</p>
                <p>Kniebeuge</p>
            </div>
            <div>
                <p className="font-bold">Schwächste Übung</p>
                <p>Klimmzüge</p>
            </div>
        </div>
        <h3 className="text-left text-3xl">Zeiten</h3>
        <div className="flex space-x-20 text-left">
            <div>
            <p className="font-bold">Absolvierte Trainings</p>
            <p>5</p>
            </div>
            <div>
               <p className="font-bold">Trainingzeit gesamt</p> 
               <p>150 Minuten</p>
            </div>
        </div>
    </div>
    </div>
    </>
    )
    
    }