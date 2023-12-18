import { redirect,useLoaderData } from "react-router-dom"

const API_URL = import.meta.env.VITE_API_URL



export default function AbfrageTest({abfrage}){

    const questions = useLoaderData()
    let displayCont = buildPage([1,1,1,2])
    console.log("Cont:", questions)

    return <>
        <h2>{questions.questions[0].questionTextGerman}</h2>
        <div>{buildQuestionLayout(questions.questions[0])}</div>
    <br></br>
    <h2>{questions.questions[1].questionTextGerman}</h2>
        <div>{buildQuestionLayout(questions.questions[1])}</div>
    </>
    

}

function buildQuestionLayout(question){
    console.log("Question to build from" , question)

    if(question.answerType == "fixed")
    {
        const displayAnswers = question.answers.map((element) => 
        {
            return <button>{element.aTextGerman}</button>
        }

        )
        return displayAnswers;
    }
    else if(question.answerType == "slider")
    {
        return <div class="slidecontainer">
        <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input><p>{question.answers[0].aTextGerman}</p>
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

