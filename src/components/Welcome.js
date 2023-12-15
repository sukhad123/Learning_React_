import React, {Component} from 'react'

class Welcome extends Component{
render()
{
    return (
        <div>
 <h1>Hi {this.props.firstName} {this.props.lastName}</h1>
 {this.props.children}
 </div>)
}
}

export default Welcome;