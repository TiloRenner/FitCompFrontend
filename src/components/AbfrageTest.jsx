import { redirect,useLoaderData, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const API_URL = import.meta.env.VITE_API_URL



export default function AbfrageTest({abfrage}){

    const navigate = useNavigate()
    const [currentCategory,setCurrentCategory] = useState()
    const [answeredQuestions,setAnsweredQuestions] = useState([])
    const {category: categoryParam} = useParams();
    const {step: stepParam} = useParams();

    

    

    const nextStep = Number(stepParam)+1


    

    const questions = useLoaderData()

    console.log("QState:", answeredQuestions)
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


    //let displayCont = buildPage([1,1,1,2])
    console.log("Content:", questions)

        
    function gotoNextPage(value)
    {
        const currentQuestionId = questions.questions[stepParam-1].questionId;
        console.log("ID:", currentQuestionId)
        const newAnsweredQuestions = setCurrentAnswer(value,currentQuestionId,answeredQuestions)
        setAnsweredQuestions(newAnsweredQuestions)

        //check if next step is already done, if so skip
        

        navigate("/assessment/" + categoryParam + "/" + (nextStep))
    }

    function gotoPage(pagenum)
    {
        navigate("/assessment/" + categoryParam + "/" + (pagenum))
    }

    function sendAssessmentAnswers()
    {
        console.log("send answers")
    }

    if(stepParam > questions.steps)
    {
        return <>
            <AssessmentOverview questions = {questions.questions} answers = {answeredQuestions} gotoPage= {gotoPage} sendAssessmentAnswers={sendAssessmentAnswers}/>
        </>
    }
    else
    {
        return <>
        <h2>{questions.questions[stepParam-1].questionTextGerman}</h2>
        <div>{buildQuestionLayout(questions.questions[stepParam-1],gotoNextPage)}</div>
    <br></br>
    </>
    }






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

function setCurrentAnswer(value,pageQuestionId,oldAnsweredQuestions)
{
    //const navigate = useNavigate()
    console.log("ButtonValue:", value)
    //todo check answeredQuestions if answer exists for Q-ID

    

    if (oldAnsweredQuestions)
    {
        console.log("AddValue to State ID", pageQuestionId, "oldQuestions:", oldAnsweredQuestions)
        //const pageQuestionId = 100;
        const newAnsweredQuestions = oldAnsweredQuestions.filter((element) => {
            if(element.questionId == pageQuestionId)
            { return false; }

            return true;
        }).concat([{questionId: pageQuestionId, valueEntered:value}]);

        //setAnsweredQuestions(newAnsweredQuestions);
        return newAnsweredQuestions;

    }

    return null

    

    

}


function buildQuestionLayout(question,gotoNextPage){
    console.log("Question to build from" , question)

    if(question.answerType == "fixed")
    {
        const displayAnswers = question.answers.map((element,index) => 
        {
            return <button value = {element.value} onClick={(e)=> { gotoNextPage(e.target.value)}} key={index}>{element.aTextGerman}</button>
        }
        )
        return displayAnswers;
    }
    else if(question.answerType == "slider")
    {
        return <Slider question={question} gotoNextPage = {gotoNextPage}/>

    }

}

function Slider({question,gotoNextPage})
{
    const [sliderValue,setSilderValue] = useState(50)

    function sendValue(e)
    {
        console.log("setValue:", sliderValue)
        gotoNextPage(sliderValue)
    }


    return <div className="slidecontainer">
    <input type="range" min={question.answers[0].valueMin} max={question.answers[0].valueMax} value={sliderValue} defaultValue="50" className="slider" id="myRange" onChange={(e) => setSilderValue(e.target.value)}></input><p>{sliderValue} {question.answers[0].aTextGerman}</p>
    <button onClick={sendValue}>Weiter</button>
  </div>

}


function AssessmentOverview({questions,answers,gotoPage,sendAssessmentAnswers})
{



    console.log("AssQuestions:", questions, " AssAnswers: ",answers)
    const questionsDisplay = questions.map((question,index) =>
    {
        console.log("CurrentQuestion", question.questionId)
        const matchingAnswer= answers.find((answer) => answer.questionId == question.questionId)
        console.log("MatchingAnswer: " , matchingAnswer)

        if(matchingAnswer)
        {

            console.log(question.questionTextGerman)
            return <div key={index}>
                <h3>{question.questionTextGerman}</h3>
                <p>{matchingAnswer.valueEntered}</p>
                <button onClick={(e)=> { gotoPage(index+1)}}>Change</button>
                <br></br>
            </div>
        }
        else
        {

            return <div>
            <h1>{question.questionTextGerman}</h1>
            <p>No value</p>
            <br></br>
        </div>
        }

        

    })
    console.log(questionsDisplay)

    return <div>
        <h2>Overview</h2>
        {questionsDisplay}
        <button onClick={(e)=> { sendAssessmentAnswers()}}>Send</button>



    </div>

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

