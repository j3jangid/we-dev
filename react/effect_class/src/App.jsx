import React from 'react'
import CommonContext from './CommonContext'
import Home from './Home'
import UseReducre from './UseReducre';


const App = () => {
  return (
    <div>
      <CommonContext>
        <Home/>
        <UseReducre />
      </CommonContext>
    </div>
  )
}

export default App


// import { useEffect, useState } from "react";
// // import Panel1 from "./Panel1";
// // import Panel2 from "./Panel2";
// // import Panel3 from "./Panel3";
// import CommonContext from "./CommonContext";
// import Home from "./Home";
// import AboutUs from "./AboutUs"


// function App() {
//   // const [time, settime] = useState(0);
//   // const [data, setData] = useState("apple");


//   // function start() {
//   //   settime(prompt("Enter Seconds"));
//   //   console.log("Before "+time);
//   //   setTimeout(() => {
//   //     setInterval(() => {
//   //       settime(time - 1);
//   //     }, 1000);
//   //   }, time);
//   // }

//   // console.log("After "+time); 

//   // function send(){

//   // }

//   return (
//     // <div>
//     //   <h1>Transfer Game</h1>
//     //   <hr />
//     //   <button onClick={send(data)}>Send {data}</button>
//     //   <hr />
//     //   <Panel1 />
//     //   <hr />
//     //   <Panel2 />
//     //   <hr />
//     //   <Panel3 />
//     // </div>
//     <>
//     <CommonContext>
//       <Home />
//       <AboutUs />
      
//     </CommonContext>
//     </>

//   );
// }

// export default App;
