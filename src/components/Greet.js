import react from 'react'

//normal function
// function Greet()
// {
//     //returning from the function
//    return  <h1>Hi Sukhad!</h1>
// }


const Greet = (props) =>
{
    return (
        <div>
 <h1>Hi {props.firstName} {props.lastName}</h1>
 {props.children}
 </div>
    )
}

export default Greet;//exporting the function