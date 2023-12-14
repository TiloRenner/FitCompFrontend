


function AbfrageTest({abfrage}){

    let displayCont = buildPage([1,1,1,2])
    console.log("Cont:", displayCont)

    return <h2>{displayCont}</h2>

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

export default AbfrageTest;

