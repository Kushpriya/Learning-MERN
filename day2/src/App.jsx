import React from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Image1 from "../src/assets/image/img1.png";
import Image2 from "../src/assets/image/img2.png";
import Image3 from "../src/assets/image/img3.png";


class App extends React.Component{
  render(){
    return ( <div>
    {/* <Nav/> */}

    <Card image={Image1} name="Vijay" para="Hello from Hajariya"/>
    <Card image={Image2} name="Munni" para="Hello from Barahathawa"/>
    <Card image={Image3} name="Priya" para="Hello from Sudama"/>
    </div>
  )
  }
  
}
export default App