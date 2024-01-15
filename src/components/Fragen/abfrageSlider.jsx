import { useState, useEffect } from "react"

function Slider({question,gotoNextPage, resetValue})
{
    const [sliderValue,setSliderValue] = useState(resetValue)
    //var sliderValue = question.answers[0].valueDefault
    useEffect(()=> {
        console.log("UseEffect in Slider")
        //console.log("SliderValue;" , sliderValue)
        //setSliderValue(question.answers[0].valueDefault)

    },[])

    //setSilderValue(question.answers[0].valueDefault)
    //console.log("Question:" , question)
    //console.log("Default Value ",question.answers[0].valueDefault)

    function sendValue(e)
    {
        console.log("setValue:", sliderValue)
        gotoNextPage(sliderValue)
        
    }


    return <div className="slidecontainer space-y-4">
    <input type="range" min={question.answers[0].valueMin} max={question.answers[0].valueMax} value={sliderValue}  className="slider" id="myRange" onChange={(e) => setSliderValue(e.target.value)}></input><p className="text-xl">{sliderValue} {question.answers[0].aTextGerman}</p>
   
    <button className="text-lg text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2" onClick={sendValue}>Weiter</button>
  </div>

}

export default Slider