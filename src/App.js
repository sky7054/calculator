import {useState} from "react";
import './App.css';



function App() {

  const [total, setTotal] = useState('');

  const clickButton = (e) =>{
    setTotal(total.concat(e.target.name));
  };

  // clear input-box

  const clearInput = () =>{
    setTotal("");
  }

  //  delete key one by one

  const deleteText = () =>{
    setTotal(total.slice(0,-1));
  }

  // calculate result
  const calculate = () =>{
   try{
    setTotal(eval(total).toString());
   }
   catch{
    setTotal("Error");
   }
  }


  return (
    <div className="App">
      <h1>React Calculator</h1>
      
      <div className = "container">
     <form>
      <input className="input-box" type="text" value={total}/>
     </form>

     <div className="keypad">
      <button className="highlight" onClick={clearInput} >AC</button>
      <button className="highlight" onClick={deleteText}>DEL</button>
      <button name="%" className="highlight"  onClick ={clickButton}>%</button>
      <button name="/" className="highlight"  onClick ={clickButton}>&divide;</button>
      <button name="7" onClick ={clickButton}>7</button>
      <button name="8" onClick ={clickButton}>8</button>
      <button name="9" onClick ={clickButton}>9</button>
      <button name="*" className="highlight"  onClick ={clickButton}>&times;</button>
      <button name="4" onClick ={clickButton}>4</button>
      <button name="5" onClick ={clickButton}>5</button>
      <button name="6" onClick ={clickButton}>6</button>
      <button name="-" className="highlight"  onClick ={clickButton}> -</button>
      <button name="1" onClick ={clickButton}>1</button>
      <button name="2" onClick ={clickButton}>2</button>
      <button name="3" onClick ={clickButton}>3</button>
      <button name="+" className="highlight"  onClick ={clickButton}>+</button>
      <button name="0" onClick ={clickButton}>0</button>
      <button name="." onClick ={clickButton}>.</button>
      <button id ="equal" className="highlight"  onClick ={calculate}>=</button>
     </div>

     </div>

    </div>
  );
}

export default App;
