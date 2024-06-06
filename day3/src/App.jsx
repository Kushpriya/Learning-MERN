import React from "react";
import Card from "./components/Card";
import Image1 from "../src/assets/image/img1.jpg";
import Image2 from "../src/assets/image/img2.jpg";
import Image3 from "../src/assets/image/img3.jpg";
import Image4 from "../src/assets/image/img4.jpg";
import Image5 from "../src/assets/image/img5.jpg";

class App extends React.Component{
  render(){
    return (<div>
    
      <Card  image ={Image1} name="Byron Martinez" position="Senior Software Enginer"/>
      <Card  image ={Image2} name="Lena Knight" position="Associate Software Enginer"/>
      <Card  image ={Image3} name="Sandra Smith" position="Project Manager"/>
      <Card  image ={Image4} name="Dwight Harper" position="Business Analyst"/>
      <Card  image ={Image5} name="Dylan Jensen" position="Junior Software Enginer"/>
      
    </div>
    )
  }
}
export default App;