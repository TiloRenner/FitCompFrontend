import { useState, useEffect } from "react";
import { Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10, Question11 } from "../components/Fragen";
import { ProgressBar } from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import { StepContext } from "../components/stepContext";

const API_URL = import.meta.env.VITE_API_URL   

export default function Abfrage () {

  // States
  
    const [ fragen, setFragen ] = useState ([])
    const [ step, setStep ] = useState (1)
    const [ progress, setProgress ] = useState(0);
    const navigate = useNavigate();

    const baseURL = API_URL;
  // Daten loggen in der Console

    console.log (fragen)
    console.log (progress)

 
  //  Validierung der Eingabewerte

    function validateForm() {
      let isValid = true;
      console.log (fragen[step - 1])
      const currentQuestion = fragen[step - 1];
     
      if (currentQuestion === undefined || currentQuestion === '' || currentQuestion === null) {
        isValid = false;
      } else if (typeof currentQuestion === 'boolean' && !currentQuestion) {
        // Checkbox wurde nicht ausgewählt
        isValid = false;
      } else if (typeof currentQuestion === 'string' && isNaN(Number(currentQuestion))) {
        // Nummerfeld hat keinen gültigen Wert
        isValid = false;
      }
      console.log(isValid)
      return isValid;
     }
     

  //   Event Handler

    // const handleChange = (event) => {
    //     setFragen(event.target.value);
    //   };   

    // const handleChange = (index, event) => {
    //   const values = [...fragen];
    //   values[index][event.target.name] = event.target.value;
    //   setFragen(values);
    //  };

    const handleChange = (event) => {
      setFragen((prevFragen) => {
        const newFragen = [...prevFragen];
        // newFragen[step - 1] = event.target.type === 'checkbox' ? { [event.target.name]: event.target.checked } : { [event.target.name]: event.target.value };
        switch (event.target.type) {
          case 'checkbox':
            newFragen[step - 1] = { [event.target.name]: event.target.checked };
            break;
          case 'radio':
            newFragen[step - 1] = { [event.target.name]: event.target.value };
            break;
          default:
            newFragen[step - 1] = { [event.target.name]: event.target.value };
         }
        return newFragen;
      });
     };
     

  //  Paginierung mit weiter und zurück Button

    function nextStep() {
        if (!validateForm()) {
          alert('Bitte füllen Sie alle erforderlichen Felder aus');
        } else {
          setStep((prevStep) => prevStep + 1);
          setProgress((prevProgress) => prevProgress + (100 / 11));

        }
       }
       
    function prevStep() {
        setStep((prevStep) => prevStep - 1 );
        setProgress((prevProgress) => prevProgress - (100 / 11));
       }

       const navigateToThankYouPage = () => {
        // Navigiere zur Danke-Seite
        navigate('/danke');
       };
       
  //  Abfrage senden 

       const submit = (event) => {
        event.preventDefault();
        
        console.log("submit", fragen);
        // Navigiere zur Danke-Seite
        navigateToThankYouPage();
       };
       
  // FETCH POST Abfrage ans Backend

      // const submit = async (event) => {
      // event.preventDefault();
     
      //   try {
      //       const response = await fetch(Missing API :( , {
      //           method: "POST",
      //           headers: {
      //               "Content-Type": "application/json",
      //           },
      //           body: JSON.stringify(fragen),
      //       });
      //       if (!response.ok) {
      //           throw new Error(`HTTP error! status: ${response.status}`);
      //       }
      //       console.log("Daten erfolgreich gesendet");
      //       navigateToThankYouPage();
      //   } catch (e) {
      //       console.error("Fehler beim Senden der Daten: ", e);
      //   }
      //   };
      const [ question, setQuestion ] = useState ()

      useEffect(() => {
        const fetchData = async () => {
        // setIsLoading(true);
      
        const baseURL = API_URL + '/assessment/questions' ;
      
            
      try {
      
        const response = await fetch(`${baseURL}`)
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
      
        const data = await response.json();
        console.log(data);
        // console.log("array", Array.isArray(data.results));
        setQuestion(data.results);
        
      
      } catch (error) { 
        console.error ('There has been a problem with your fetch operation: ', error);
      } finally {
        //  setIsLoading(false);
        }
      };
      fetchData();
      }, []);

      let frage;
      if (question !== undefined && Array.isArray(question)) {
       frage = question.map(q => q.questionTextGerman);
      }

      // const frage = question.map(q => q.questionTextGerman)
      console.log('frage',frage)

    return (
      
        <div className="h-full">
                  <div className="mt-20 w-">
                  <ProgressBar progress={progress}   />
                  </div>
        
        <div className="h-full justify-center items-center flex ">

              <div>
                
                  {step === 1 && <Question1 Question001={frage} onChange={handleChange} value={fragen}  />}
                  {/* {step === 1 &&  question.map((q) => (
                  <Question1
                    
                    Question001={q[0].questionTextGerman}
                    onChange={handleChange}
                    value={fragen}
                    />
                   ))} */}
                  
                  {step === 2 && <Question2 onChange={handleChange} value={fragen}  />}   
                  {step === 3 && <Question3 onChange={handleChange} value={fragen}  />}  

                  <StepContext.Provider value={{ step, setStep }}>

                  {step === 4 && <Question4 onChange={handleChange} value={fragen}  />} 
                  </StepContext.Provider>
                  {step === 5 && <Question5 onChange={handleChange} value={fragen}  />}  
                  {step === 6 && <Question6 onChange={handleChange} value={fragen}  />}  
                  {step === 7 && <Question7 onChange={handleChange} value={fragen}  />}  
                  {step === 8 && <Question8 onChange={handleChange} value={fragen}  />}  
                  {step === 9 && <Question9 onChange={handleChange} value={fragen}  />}  
                  {step === 10 && <Question10 onChange={handleChange} value={fragen}  />}  
                  {step === 11 && <Question11 onChange={handleChange} value={fragen}  />}   
                  
                  <div>
                      <div className="pt-5"> 
                          <button className="pr-4" onClick={prevStep} hidden={step === 1}>zurück</button>
                          <button onClick={nextStep} hidden={step === 11}>weiter</button>
                          {step === 11 && <button onClick={submit}>Absenden</button>}
                      </div>
                  </div>
                
              </div>
        </div>
        </div>
    )
}