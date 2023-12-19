import react,{Component} from 'react'

class Classclick extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    change(){
     console.log("HIi");
    }


    render(){
        return(
            <div>
                <button onClick = {this.change}>This is from the classclick</button>
            </div>
        )
    }

}
export default Classclick