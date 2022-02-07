// //USE MEMO PART

// import {useState,useMemo} from "react";
// import './App.css';
// import Header from "./components/Header";

// function App() {

//   const [number,setNumber] = useState(0);
//   const [text,setText] = useState("");

//   //const data = calculateSomething();
  
//   const data = useMemo(()=>{
//     return calculateSomething(number);
//   },[number]);

//   //object reference changes every render
//   //so if we try to send data without using useMemo
//   //our Header component going to render again and again every button click.

//   return (
//     <div className="App">
//       <Header data={data}/>
//       <br/><br/>
//       <button onClick={()=>setNumber(number+1)}>button</button>
//       <div>{number}</div>
//       <br/><br/>
//       <input value={text} onChange={({target})=>setText(target.value)}/>
//     </div>
//   );
// }

// function calculateSomething(number){
//   console.log("calculation starting..");
//   for(let i=0;i<1000000;i++){}
//   console.log("calculation completed..");
//   return {name:"armagan",number:number}
// }

// export default App;

//CALLBACK PART

import {useState,useMemo,useCallback} from "react";
import './App.css';
import Header from "./components/Header";

function App() {

  const [number,setNumber] = useState(0);
  const [text,setText] = useState("");

  const increment = useCallback(()=>{
    setNumber((prevState)=>prevState+1);
  },[])

  return (
    <div className="App">
      <Header increment={increment}/>
      <br/><br/>
      
      <div>{number}</div>
      <br/><br/>
      <input value={text} onChange={({target})=>setText(target.value)}/>
    </div>
  );
}



export default App;