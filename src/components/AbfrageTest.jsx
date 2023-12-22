import { redirect,useLoaderData, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const API_URL = import.meta.env.VITE_API_URL



export default function AbfrageTest({abfrage}){

    const navigate = useNavigate()
    const [currentCategory,setCurrentCategory] = useState()
    const {category: categoryParam} = useParams();
    const {step: stepParam} = useParams();

    

    

    const nextStep = Number(stepParam)+1

    


    console.log("PageDataA - state:", currentCategory, " Category: ", categoryParam," Step: ", stepParam)

//Todo Move State to App
   useEffect(()=>{
        console.log("UseEffect PageDataX - state:", currentCategory, " Category: ", categoryParam," Step: ", stepParam)
        if(categoryParam != currentCategory)
        {
            if (stepParam == 1)
            {
                setCurrentCategory(categoryParam)
            }
            else
            {
                console.log("FixPageReroute!!!:::" , categoryParam, " State: " ,)
                navigate("/");
    
            }
    
        }

    },[]
    )
    


    console.log("PageDataB - state:", currentCategory, " Category: ", categoryParam," Step: ", stepParam)

    const questions = useLoaderData()
    let displayCont = buildPage([1,1,1,2])
    console.log("Content:", questions)

        
    function gotoNextPage()
    {
        navigate("/assessment/" + categoryParam + "/" + (nextStep))
    }

    return <>
        <h2>{questions.questions[0].questionTextGerman}</h2>
        <div>{buildQuestionLayout(questions.questions[0],gotoNextPage)}</div>
    <br></br>
    <h2>{questions.questions[1].questionTextGerman}</h2>
        <div>{buildQuestionLayout(questions.questions[1],gotoNextPage)}</div>
    </>




}

function isPageValid()
{
    if(true)
    {
        return true;
    }
    else
    {
        return false;
    }


}

function finishCurrentPage(value)
{
    //const navigate = useNavigate()
    console.log("ButtonValue:", value)
    

}


function buildQuestionLayout(question,gotoNext){
    console.log("Question to build from" , question)

    if(question.answerType == "fixed")
    {
        const displayAnswers = question.answers.map((element,index) => 
        {
            return <button value = {element.value} onClick={(e)=> {finishCurrentPage(e.target.value); gotoNext()}} key={index}>{element.aTextGerman}</button>
        }
        )
        return displayAnswers;
    }
    else if(question.answerType == "slider")
    {
        return <div className="slidecontainer">
        <input type="range" min="1" max="100" defaultValue="50" className="slider" id="myRange"></input><p>{question.answers[0].aTextGerman}</p>
        <button>Weiter</button>
      </div>

    }

}



function buildPage(array)
{
    console.log("Array", array)
    const result = array.map((element) => {
        if(element == 1)
        {
            return <p> Paragraph1</p>
        }
        else
        {
            return <button>Button</button>
        }
    }

    )

    return result;
}

export const abfrageLoader = async()=>
{
    try{
        console.log("Try Fetch for Assessment")
        const res = await fetch(API_URL+ '/questions')
        console.log("Response: ", res)
        return res.json()
    }
    catch(err)
    {
        console.log("error", err.message)
        return redirect("error")
    }

}

