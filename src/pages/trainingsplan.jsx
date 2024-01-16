import { useState, useEffect } from "react"

const API_URL = import.meta.env.VITE_API_URL   


export default function TrainingsPlan () {

    const [trainingsData, setTrainingsData] = useState([])
    const baseURL = API_URL;

    console.log(trainingsData)


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

      // const train = trainingsData.plan.map((exercise) => 
      // exercise.averageLevel)
      // const infoArrays = trainingsData.map(exercise => exercise.info);
      

      // const kneePressExercise = trainingsData.find(exercise => 
      //   exercise.info.some(info => info.name === 'Kniebeugen')
      //  );

      //  console.log('exercise',train)

      const exercises = trainingsData?.plan?.exercises
      const ListOfExercises = exercises?.map((item)=>{
       return (
        <div className="flex flex-col space-y-2 items-start">
       <h2 className="text-2xl font-bold">Übung: {item.info[0].name}</h2> 
       <p>Beschreibung: {item.info[0].desc}</p>
       {/* <p>Reps:{item[0].reps}</p> */}
       <p className="font-bold">Mach {item.sets} Sätze à {item.reps} Wiederholungen</p>
       
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
      <div className="flex flex-col items-center space-y-8">
        <div className="flex flex-col items-start">
        <h1 className="text-4xl py-10">Trainingsplan von User</h1>
        <p>Trainingswoche: </p>
        <p>Trainingslevel: </p>
        {/* <p>Trainingsziel: {trainingsData?.plan.exercises[0].map(ziel => ziel[0].de)} </p> */}
        <p>Hier ist dein persönlicher Trainingsplan</p>
        </div>

        <div className="text-left">

        <h2>Starte deine Trainingssession!</h2>
        <p>Trainingszeit: </p>
        <p>Akkordion: Wichtige Informationen zu deinem Trainingsplan</p>
        </div>
       
        
        {/* {exercises?.[0].reps} */}
        {ListOfExercises}
        
        </div>
    )
}