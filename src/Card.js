import React from 'react' 
import './index.css'
class Card extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='card'>
                <img src="" alt="cant find image"/>
                <h1>{this.props.brand.name}</h1>
                <p>{this.props.brand.description}</p>
                <label>{this.props.brand.status}</label>
            </div>
        )
    }
}

export default Card