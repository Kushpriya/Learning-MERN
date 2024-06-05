import React from "react";
import "../assets/css/Card.css";

class Card extends React.Component{
    render(){
        return(
            <div onClick = {()=>{
                window.alert(this.props.para)
            }} className="main">
                <img src={this.props.image} />
                <h1>{this.props.name}</h1>
                <p>{this.props.para}</p>
                
            </div>
            
        )
    }
}
export default Card;