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


    return <div className="slidecontainer">
    <input type="range" min={question.answers[0].valueMin} max={question.answers[0].valueMax} value={sliderValue}  className="slider" id="myRange" onChange={(e) => setSliderValue(e.target.value)}></input><p>{sliderValue} {question.answers[0].aTextGerman}</p>
   
    <button onClick={sendValue}>Weiter</button>
  </div>

}

export default Slider