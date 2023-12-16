import React, {Component} from 'react'
 
 
class Welcome extends Component{

    //this is props componenet
// render()
// {
//     return (
//         <div>
//  <h1>Hi{this.props.firstName} {this.props.lastName}</h1>
//  {this.props.children}
//  </div>)
// }

//this is state element
 constructor()
 {
    super()
this.state = {
    message:'Welcome Sukhad'
}
 }

 changeMessage()
{
    this.setState({
        message:'Thank you for clicking me!'

    })
    
}
render()
{
    return(
        <div>
        <div> {this.state.message}</div>
        <button onClick= {()=> this.changeMessage()}>Sukhad Button</button>
        </div>
    )
}
}

export default Welcome;