 import react, { Component } from 'react'
 
  class EventBlind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hi There'
      };
      
    }

    changeMessage()
    {
        console.log(this)
        this.setState({
            message:'GoodBye'
        })
    }

    
   render() {
     return (
       <div>
         <div>{this.state.message}</div>
         <button onClick = {this.changeMessage}>Click EventBlind</button> 
         
       </div>
     )
   }
 }
 
 export default EventBlind
 