import React, { useContext, useState } from 'react';
import { StepContext } from '../stepContext';




    export function Question1({ onChange, fragen, Question001}) {
        return (
        <>
        
        <h2 className="text-3xl pb-5">{Question001}</h2>

        <input className="border-grey-100 border-solid border-2 rounded-lg" name="name" type="text" value={fragen} onChange={onChange} />
        </>
        )
    }


   export function Question2({ onChange, fragen }) {
    return (
    <>
    
    <h2 className="text-3xl pb-5">Was ist dein Ziel?</h2>
    <label htmlFor="abnehmen" className="block text-sm font-medium text-gray-700">Abnehmen</label>
    <input className="border-grey-100 border-solid border-2 rounded-lg" id="abnehmen" name="Ziel abnehmen" type="checkbox" checked={fragen} onChange={onChange} />
    <label htmlFor="muskelaufbau" className="block text-sm font-medium text-gray-700">Muskelaufbau</label>
    <input className="border-grey-100 border-solid border-2 rounded-lg" id="muskelaufbau" name="Ziel muskelaufbau" type="checkbox" checked={fragen} onChange={onChange} />
    </>
    )
   }

   export function Question3({ onChange, fragen }) {
    return (
    <>
    
    <h2 className="text-3xl pb-5">Wie oft machst du Sport in der Woche?</h2>
    <label htmlFor="1mal" className="block text-sm font-medium text-gray-700">1 mal</label>
    <input className="border-grey-100 border-solid border-2 rounded-lg" id="1 mal" name="1 mal" type="checkbox" checked={fragen} onChange={onChange} />
    <label htmlFor="2mal" className="block text-sm font-medium text-gray-700">2 mal</label>
    <input className="border-grey-100 border-solid border-2 rounded-lg" id="1 mal" name="2 mal" type="checkbox" checked={fragen} onChange={onChange} />
    <label htmlFor="3mal" className="block text-sm font-medium text-gray-700">3 mal</label>
    <input className="border-grey-100 border-solid border-2 rounded-lg" id="1 mal" name="3 mal" type="checkbox" checked={fragen} onChange={onChange} />
    <label htmlFor="4mal" className="block text-sm font-medium text-gray-700">4 mal</label>
    <input className="border-grey-100 border-solid border-2 rounded-lg" id="1 mal" name="4 mal" type="checkbox" checked={fragen} onChange={onChange} />
    </>
    )
   }

   export function Question4({ onChange, fragen }) {
    const { step } = useContext(StepContext);
    const [localValue, setLocalValue] = useState(fragen && fragen[step - 1] ? fragen[step - 1] : '18');
   
    const handleLocalChange = (event) => {
     const newValue = event.target.value;
     setLocalValue(newValue);
     onChange(event);
    };
   
    return (
     <>
       <h2 className="text-3xl pb-5">Wie alt bist du?</h2>
       <p>Dein Alter: {localValue}</p>
       <input className="border-grey-100 border-solid border-2 rounded-lg" name="alter" type="range" min="1" max="100" value={localValue} onChange={handleLocalChange} />
     </>
    );
   }

   export function Question5({ onChange, fragen }) {
    return (
    <>
    
    <h2 className="text-3xlpb-5 ">Wie groß bist du?</h2>

    <input className="border-grey-100 border-solid border-2 rounded-lg" name="Größe" type="number" value={fragen} onChange={onChange}  />
    </>
    )
   }

   export function Question6({ onChange, fragen }) {
    return (
    <>
    
    <h2 className="text-3xl pb-5">Männlich oder weiblich?</h2>
    <label htmlFor="männlich" className="block text-sm font-medium text-gray-700">männlich</label>
    <input className="border-grey-100 border-solid border-2 rounded-lg" id="männlich" name="Geschlecht" type="radio" value="männlich" checked={fragen} onChange={onChange}  />
    <label htmlFor="weiblich" className="block text-sm font-medium text-gray-700">weiblich</label>
    <input className="border-grey-100 border-solid border-2 rounded-lg" id="weiblich" name="Geschlecht" type="radio" value="weiblich" checked={fragen} onChange={onChange}  />
    </>
    )
   }

   export function Question7({ onChange, fragen }) {
    return (
    <>
    
    <h2 className="text-3xl pb-5">Wieviel wiegst du?</h2>

    <input className="border-grey-100 border-solid border-2 rounded-lg" min="0" name="Gewicht" type="number" value={fragen} onChange={onChange}  />
    </>
    )
   }

   export function Question8({ onChange, fragen }) {
    return (
    <>
    
    <h2 className="text-3xl pb-5">Wieviel Liegestütze schaffst du?</h2>

    <input className="border-grey-100 border-solid border-2 rounded-lg" name="Anzahl Liegestütze" type="number" value={fragen} onChange={onChange}  />
    </>
    )
   }

   export function Question9({ onChange, fragen }) {
    return (
    <>
    
    <h2 className="text-3xl pb-5">Wieviel Kniebeuge schaffst du?</h2>

    <input className="border-grey-100 border-solid border-2 rounded-lg" name="Anzahl Kniebeuge" type="number" value={fragen} onChange={onChange}  />
    </>
    )
   }

   export function Question10({ onChange, fragen }) {
    return (
    <>
    
    <h2 className="text-3xl pb-5">Wieviel Crunches schaffst du an einem Stück?</h2>

    <input className="border-grey-100 border-solid border-2 rounded-lg" name="Anzahl Crunches" type="number" value={fragen} onChange={onChange}  />
    </>
    )
   }

   export function Question11({ onChange, fragen }) {
    return (
    <>
    
    <h2 className="text-3xl pb-5">Wieviel Klimmzüge schaffst du an einem Stück?</h2>

    <input className="border-grey-100 border-solid border-2 rounded-lg" name="Anzahl Klimmzüge" type="number" value={fragen} onChange={onChange}  />
    </>
    )
   }

//    Optionale Fragen (Herausfinden, ob Equipment vorhanden ist)