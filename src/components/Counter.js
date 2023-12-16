import react, {Component} from 'react'

class Counter extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            counter:0
        }
    }
    decreament()
    {
        this.setState({
        counter :this.state.counter-1//decrease by 1
    })
    }
    increament()
{
    // this.setState({
    //     counter:this.state.counter+1
    // })

    this.setState((prev)=>({counter:prev.counter+1}))

}

increamentFive()
{
    this.increament()
    this.increament()
    this.increament()
    this.increament()
    this.increament()
}

        
    
    render()
    {
        return(
        <div>
        <div>{this.state.counter}</div>
        <button onClick ={()=>{this.decreament()}} >-</button>
        <button onClick ={()=>{this.increamentFive()}}>  +
        </button>
        </div>
        )
    }
    
}

export default Counter;
