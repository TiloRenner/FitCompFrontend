import { redirect,useLoaderData, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
//import Slider from "./abfrageSlider"
import Slider from "../components/Fragen/abfrageSlider"
import { ProgressBar } from "../components/ProgressBar";

const API_URL = import.meta.env.VITE_API_URL



export default function Assessment({}){

    const navigate = useNavigate()
    const [currentCategory,setCurrentCategory] = useState()
    const [answeredQuestions,setAnsweredQuestions] = useState([])
    const {category: categoryParam} = useParams();
    const {step: stepParam} = useParams();
    //const [needValueReset,setNeedValueReset] = useState(false)
    const [ progress, setProgress ] = useState(0);
    const nextStep = Number(stepParam)+1
    const questions = useLoaderData()
    
    //console.log("Answered Questions State:", answeredQuestions)
    //console.log("PageDataA - state:", currentCategory, " Category: ", categoryParam," Step: ", stepParam)

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

    console.log ("Progress State:", progress)
    
    //console.log("PageDataB - state:", currentCategory, " Category: ", categoryParam," Step: ", stepParam)

    //let displayCont = buildPage([1,1,1,2])
    //console.log("Content:", questions)
        
    function gotoNextPage(value)
    {

        const currentQuestionId = questions.questions[stepParam-1].questionId;
        const currentQuestion = questions.questions[stepParam-1];
        console.log("ID:", currentQuestionId, "CurrentQuestion GotoNExt: ", currentQuestion)
        const newAnsweredQuestions = setCurrentAnswer(value,currentQuestionId,answeredQuestions)
        setAnsweredQuestions(newAnsweredQuestions)
        //setNeedValueReset(true)

        //check if next step is already done, if so skip
        
        setProgress((prevProgress) => prevProgress + (100 / (questions.questions.length)));
        navigate("/assessment/" + categoryParam + "/" + (nextStep))
    }

    function gotoPage(pagenum)
    {
        setProgress((100 / questions.questions.length * (pagenum-1)));
        navigate("/assessment/" + categoryParam + "/" + (pagenum))
    }

    function sendAssessmentAnswers()
    {   

        const assesmentDataToSend = 
        {
            category:currentCategory,
            answers: answeredQuestions
        };
        console.log(assesmentDataToSend);
        localStorage.setItem('assessmentData', JSON.stringify(assesmentDataToSend));
        navigate('/register');
        // console.log("send answers")

     

        // const fetchAdjustedProduct = async ()=>
        //   {
        //     console.log("Try Fetch Product")
        //     try{
        //       const response = await fetch(API_URL + "/assessment/adjustedProduct",{
        //         method: 'POST',
        //         headers: {
        //           'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(assesmentDataToSend),
        //        });

        //        const data = await response.json()
        //        console.log("ProductData: ", data)
        //     }
        //     catch(err)
        //     {
        //       console.error ('There has been a problem with your fetch operation: ', err.message);
        //     }

        //   };

        // fetchAdjustedProduct();
    }

    if(stepParam > questions.steps)
    {
        return <>
            <AssessmentOverview questions = {questions.questions} answers = {answeredQuestions} gotoPage= {gotoPage} sendAssessmentAnswers={sendAssessmentAnswers}/>
        </>
    }
    else
    {
        //Check if already anwered, if not set Default Value for Question
        console.log("AnsweredQuestions: ", answeredQuestions)
        console.log("QuestionID: ", questions.questions[stepParam-1].questionId)
        //var resetValue = questions.questions[stepParam-1].answers[0];
        //console.log(questions.questions[stepParam-1])
        const matchingAnswered = answeredQuestions.find((aq) => 
            {
                return aq.questionId == questions.questions[stepParam-1].questionId
            })

        console.log("MatchingAnswered:", matchingAnswered)
        return <>
            <div className="flex flex-col items-center h-dvh">
                <div className="mt-20 w-[90%] ">
                  <ProgressBar progress={progress}   />
                  </div>
        <h2 className="text-3xl py-10 mt-10 lg:mt-60">{questions.questions[stepParam-1].questionTextGerman}</h2>
        <button className="text-lg ">{buildQuestionLayout(questions.questions[stepParam-1],gotoNextPage,matchingAnswered)}</button>
        </div>
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

function buildQuestionLayout(question,gotoNextPage,matchingAnswered){
    //console.log("Question to build from" , question)

    if(question.answerType == "fixed")
    {
        const displayAnswers = question.answers.map((element,index) => 
        {
            return <button className="" value = {element.value} onClick={(e)=> { gotoNextPage(e.target.value)}} key={index}>{element.aTextGerman}</button>
        }
        )
        return displayAnswers;
    }
    else if(question.answerType == "slider")
    {
        //if(!resetValue)
        //{
            //resetValue = question.answers[0].valueDefault
        //}
        var resetValue = question.answers[0].valueDefault
        console.log(question)
        console.log("FirstResetValue:", resetValue)
        if(matchingAnswered)
        {
            resetValue = matchingAnswered.valueEntered
        }
        console.log("SecondResetValue:", resetValue)

        console.log("KEY:",question.questionId )
        return (
        
        <Slider key={question.questionId} question={question} gotoNextPage = {gotoNextPage} resetValue={resetValue}/>
      
        )
    }
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
            return <div className="" key={index}>
                <div className="flex flex-col justify-center items-center space-y-6">
                <h3 className="text-xl">{question.questionTextGerman}</h3>
                <p className="text-3xl text-gray-400">{matchingAnswer.valueEntered}</p>
                <button className="border-2 text-blue-500 border-blue-500 active:bg-blue-500 hover:bg-blue-500 hover:text-white text-lg px-4 py-2 mt-20" onClick={(e)=> { gotoPage(index+1)}}>Change</button>
                </div>
            </div>
        }
        else
        {

            return <div>
            <h1 className="text-xl">{question.questionTextGerman}</h1>
            <p>No value</p>
            <br></br>
        </div>
        }

    })
    console.log(questionsDisplay)

    return <div className="flex flex-col justify-center items-center h-dvh space-y-8">
        <h2 className="text-5xl">Overview</h2>
        {questionsDisplay}
        <button className="callbtn" onClick={(e)=> { sendAssessmentAnswers()}}>Send</button>

    </div>

}

export const assessmentLoader = async({params})=>
{

    console.log("LoaderParams: " ,params)

    const {category} = params;
    console.log("LoaderCategory: " , category)

    try{
        console.log("Try Fetch for Assessment")
        const res = await fetch(API_URL+ '/assessment/questions?' + new URLSearchParams({category:category}))
        console.log("Response: ", res)
        return res.json()
    }
    catch(err)
    {
        console.log("error", err.message)
        return redirect("error")
    }

}