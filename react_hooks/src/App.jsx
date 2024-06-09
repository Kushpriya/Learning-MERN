// // USESTATE
// import {useState} from "react";

// function App(){
//     const[data,setData] =useState("Priya");
//     // const [data,setData] = useState(0);

//   function Data(){
//     setData("Kushawaha");
//     // setData(data+1);

//   }

//   return(
//     <div>
//         <h1>{data}</h1>
//         <button onClick={Data}> click!!!</button>
//     </div>
        
//   );

// }
// export default App;


// import { useState } from "react";

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <div>
//       <h1>My favorite color is {color}!</h1>
//       <button onClick={() => setColor("blue")}>Blue</button>
//       <button onClick={() => setColor("red")}>Red</button>
//       <button onClick={() => setColor("pink")}>Pink</button>
//       <button onClick={() => setColor("green")}>Green</button>
//     </div>
//   );
// }

// export default FavoriteColor;



// import { useState } from "react"; 
// function Car()
// {
//   const[car,setCar] = useState({
//     brand:"Ford",
//     color:"red",
//     place:"ktm"
//   });
  
//   // const[color,setColor] = useState("red");
//   // const[place,setPlace] = useState("ktm");
//   return(
//     <div>
//       <h1>{car.brand}</h1>
//       <p>It is a {car.color} car which is in the {car.place}.</p>
//       {/* <button onClick={()=>setBrand("duster")}>click</button> */}
//     </div>
//   );
// }
// export default Car;


// useEffect

import { useState,useEffect } from "react";

function Timer(){
  const[count,setCount] = useState(0);
  const[calculate,setCalculate] = useState(0);

  useEffect(() =>{
    // setTimeout(() => {
    //   setCount((count) => count +1);
    // },1000);
  setCalculate(() => count *2);
  },[count]);

  return (
    <div>
      <h1>Count = {count}</h1>
      <button onClick={() => setCount((c) => c+1)}>+</button>
      <h1>Calculation : {calculate}</h1>

    </div>
  )
}
export default Timer;