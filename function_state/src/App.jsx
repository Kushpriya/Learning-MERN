  // FUNCTION
// import React from "react";
// import './App.css';

// function App(){
//   function apple(){
//     alert("function called");
//   }
//   return(
//         <div className="App">
//           <h1>Hello</h1>
//           <p>{data}</p>
//           {/* <button onClick={()=>alert("hello")}>  click me!!</button> */}
//           {/* <button onClick={()=>apple()}>click me!!</button> */}
//         </div>
//   );
// }
// export default App;


// // STATE
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


//Toggle
import React from "react";


 function App(){
   const [status,setStatus] = React.useState(false);
   return(
    <div className="App">{
     status? <h1>Priya Kushawaha</h1>:null

    }
      {/* <button onClick={() =>setStatus(false)}>Hide</button>
      <button onClick={() =>setStatus(true)}>Show</button> */}
      <button onClick={() =>setStatus(!status)}>Toggle</button>
    </div>
   );
 }

 export default App;