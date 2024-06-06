import React from "react";
import"../assets/css/Card.css";
class Card extends React.Component{
    render(){
        return(
            <div className="main">
                <img src={this.props.image} className="img"/>
               <div>
                    <h1 className="name">{this.props.name}</h1>
                    <p className="para">{this.props.position}</p>
                </div> 
                <button className="btn">Invite</button>
            </div>
        )
    }
}
export default Card;