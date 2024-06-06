import React from "react";
import"../assets/css/Card.css";
class Card extends React.Component{
    render(){
        return(
            <div className="main">
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}
export default Card;