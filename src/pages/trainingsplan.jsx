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


      
    return (
        <h1>Hallo Trainingsplan</h1>
    )
}