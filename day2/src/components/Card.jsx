import React from "react";
// import Image1 from "../assets/image/img1.png";
// import Image2 from "../assets/image/img2.png";
import "../assets/css/Card.css";

class Card extends React.Component{
    render(){
        return(
            <div className="main">
                <img src={this.props.image}/>
                <h1>{this.props.name}</h1>
                <p>{this.props.para}</p>
                
            </div>
            
        )
    }
}
export default Card;