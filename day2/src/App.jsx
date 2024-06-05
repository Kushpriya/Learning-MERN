import React from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Image1 from "../src/assets/image/img1.png";


class App extends React.Component{
  render(){
    return ( <div>
    {/* <Nav/> */}

      {/* <h1>hello</h1> */}
    <Card image={Image1} title="hello" para="hello from jungle"/>
    <Card image={Image1} title="hello" para="hello from jungle"/>
    <Card image={Image1} title="hello" para="hello from jungle"/>
    {/* <Card title="fvbsoi"/> */}
    </div>
  )
  }
  
}
export default App