import react,  {Component} from 'react'

const Functionclick = ()=>{
    function clickHandler()
    {
       console.log("HI");

    }
    return(
        <div>
            <button onClick = {clickHandler}>Click me I am from the function component!</button>
        </div>

    )
}

export default Functionclick