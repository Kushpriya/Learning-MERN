import React from "react";
import Card from "./components/Card";
import Image1 from "../src/assets/image/img1.jpg";
import Image2 from "../src/assets/image/img2.jpg";
import Image3 from "../src/assets/image/img3.jpg";
import Image4 from "../src/assets/image/img4.jpg";
import Image5 from "../src/assets/image/img5.jpg";

class App extends React.Component{
  render(){
    const arr = [{image:Image1, name:"Byron Martinez", position:"Senior Software Enginer"},
      {image:Image2 , name:"Lena Knight", position:"Associate Software Enginer"},
      {image:Image3 , name:"Sandra Smith" ,position:"Project Manager"},
      {image:Image4 , name:"Dwight Harper",position:"Business Analyst"},
      {image:Image5 , name:"Dylan Jensen", position:"Junior Software Enginer"}
    ];
    return (
      <div>
        {
          arr.map((data,index) => (
            <Card key={index} image={data.image} name={data.name} position={data.position}/>
          )
        )
        }
    </div>
    );
  }
}
export default App;