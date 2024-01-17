import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL   


export default function TrainingsPlan () {

    const [trainingsData, setTrainingsData] = useState([]);
    const [exData, setExData ] = ([]);
    const baseURL = API_URL;
    const navigate = useNavigate();

    console.log(exData)

 

// Fetching TrainingsData

    useEffect(() => {
        const fetchData = async () => {
        // setIsLoading(true);
      
        const baseURL = API_URL + '/user/trainingplan' ;
      
            
      try {
      
        const response = await fetch(`${baseURL}`, { credentials: 'include',})
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
      
        const data = await response.json();
        console.log("data von fetch:", data);
        // console.log("array", Array.isArray(data.results));
        setTrainingsData(data);
        
      
      } catch (error) { 
        console.error ('There has been a problem with your fetch operation: ', error);
      } finally {
        //  setIsLoading(false);
        }
      };
      fetchData();
      }, []);

      // Fetching POST Wiederholungen

      const handleSubmit = async (event) => {
        event.preventDefault();

        const fetchReps = async ()=>
             {
               console.log("Try Fetch Product")
               try{
                 const response = await fetch(API_URL + "/user/completetraining ",{
                   method: 'POST',
                   withCredentials: true,
                   credentials: 'include',
                   headers: {
                     'Content-Type': 'application/json',
                   },
                   body: JSON.stringify({ exData }),
                  });
   
                  if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                  }
             
                  const data = await response.json();
                  console.log("ProductData: ", exData);
                  navigate('/dashboard');
                } catch (err) {
                  console.error('There has been a problem with your fetch operation: ', err.message);
                }
              };
             
              fetchReps();
             };
    

      // const train = trainingsData.plan.map((exercise) => 
      // exercise.averageLevel)
      // const infoArrays = trainingsData.map(exercise => exercise.info);
      

      // const kneePressExercise = trainingsData.find(exercise => 
      //   exercise.info.some(info => info.name === 'Kniebeugen')
      //  );

      //  console.log('exercise',train)

      const exercises = trainingsData?.plan?.exercises
      const ListOfExercises = exercises?.map((item, id)=>{
       return (
        <div key={id} className="flex flex-col space-y-2 items-start">
       <h2 className="text-2xl font-bold">Übung: {item.info[0].name}</h2> 
       <p>Beschreibung: {item.info[0].desc}</p>
       {/* <p>Reps:{item[0].reps}</p> */}
       <p className="font-bold">Mach {item.sets} Sätze à {item.reps} Wiederholungen</p>
       <p>Wie viele Wiederholungen hast du geschafft?
       </p>
       <input className="border-gray-300 border-2 w-10" min="0" max="100" type="number" name="Reps" value={exData} onchange={(e) => setExData(e.target.value)} />
       {/* {exercises?.map((item)=>{
       return (
        <>
        <p>Wiederholungen: {item.reps}</p>
        <p>Sätze: {item.sets}</p>
        </>
       )})} */}
        
       </div>
       )
      })

      console.log("ex", exercises)
    return (
      <div className="flex justify-center">
      <div className="flex flex-col space-y-8 py-10">
        <div className="flex flex-col items-start">
          <div className="text-left">
        <h1 className="text-4xl py-10">Trainingsplan von {trainingsData.username}</h1>
        <p>Hier ist dein persönlicher Trainingsplan</p>
        <br />
        <p>Trainingswoche: 1</p>
        <p>Trainingseinheit: 3</p>
        
        
        </div>
        </div>

        <div className="text-left">

        <h2 className="font-bold">Starte deine Trainingssession!</h2>
        <p>Trainingszeit: 30 Minuten </p>
        
        
        </div>
       
        
        {/* {exercises?.[0].reps} */}
        {ListOfExercises}
        <button className="callbtn" onClick={handleSubmit}>
          Training abschließen
        </button>
        </div>
        </div>
    )
}