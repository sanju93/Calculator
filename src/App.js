import Display from './components/Display';
import Buttons from './components/Buttons';
import './App.css';
import { useState } from 'react';

function App() {

  const [exp,setExp] = useState("");

  function handleClick(x){

    if(typeof(exp) === 'number'){
      setExp("");
    }else{


      if (x === 'C'){
        setExp("");
      }else if(x === "7"){

        if (exp === "0"){
          setExp(x);
        }else{

          setExp(exp + x);

        }
     
        
          
      
         
        
  
        
  
      }else if (x === "8"){

        if (exp === "0")
        {
          setExp(x);
        }else{
          setExp(exp + x);

        }
  
       
  
      } else if(x === "9"){
        if (exp === "0"){
          setExp(x);
        }else{
          setExp(exp + x);

        }
  
      
  
      } else if(x === "4"){
        if (exp === "0"){
          setExp(x);
        }else{

          setExp(exp + x);

        }
  
      
  
      } else if(x === "5"){

        if (exp === "0"){
          setExp(x);
        }else{

          setExp(exp + x);

        }
  
       
  
      } else if (x === "6") {
  
        if (exp === "0"){
          setExp(x);
        }else{
          setExp(exp + x);
        }
  
      } else if (x === "1") {

        if (exp === "0"){
          setExp(x);

        }else{
          setExp(exp + x);
        }
  
  
      } else if (x === "2"){
        if (exp === "0"){
          setExp(x);
        }else{
          setExp(exp + x);

        }
  
       
  
      } else if (x === "3"){
        if (exp === "0"){
          setExp(x);
        }else{

          setExp(exp + x);

        }
  
      
  
      } else if (x === "0"){

        if (exp === "0"){
          setExp(x);
        }else{

          setExp(exp + x);

        }
  
       
  
      }else if (x === "."){
        let index = exp.length - 1;
        if (exp[index] === "+" || exp[index] === "-" || exp[index] === "*" || exp[index] === "/" || exp[index] === "%"){
  
          setExp(NaN);
  
        }else{
  
          setExp(exp + x);
  
        }
      
        
      }
      else if (x === "+"){
        let index = exp.length - 1;
        if (exp[index] === "+" || exp[index] === "-" || exp[index] === "*" || exp[index] === "/" || exp[index] === "%"){
  
          setExp(NaN);
  
        }else{
  
          setExp(exp + " " + x);
  
        }
       
      }
      else if (x === "-"){
        let index = exp.length - 1;
        if (exp[index] === "+" || exp[index] === "-" || exp[index] === "*" || exp[index] === "/" || exp[index] === "%"){
  
          setExp(NaN);
  
        }else{
        
        setExp(exp + " " + x);
        }
      }
      else if (x === "*"){
  
        let index = exp.length - 1;
        if (exp[index] === "+" || exp[index] === "-" || exp[index] === "*" || exp[index] === "/" || exp[index] === "%"){
  
          setExp(NaN);
  
        }else{
  
          setExp(exp + " " + x);
  
        }
  
  
        
      }
      else if (x === "/"){
        let index = exp.length - 1;
        if (exp[index] === "+" || exp[index] === "-" || exp[index] === "*" || exp[index] === "/" || exp[index] === "%"){
  
          setExp(NaN);
  
        }else{
  
          setExp(exp + " " + x);
  
        }
        
        
      }
      else if (x === "%"){
        let index = exp.length - 1;
        if (exp[index] === "+" || exp[index] === "-" || exp[index] === "*" || exp[index] === "/" || exp[index] === "%"){
  
          setExp(NaN);
  
        }else{
  
          setExp(exp + " " + x);
  
        }
        
      
      }
      else if (x === "="){
        let index = exp.length - 1;
        if (exp[index] === "+" || exp[index] === "-" || exp[index] === "*" || exp[index] === "/" || exp[index] === "%"){
  
          setExp(NaN);
  
        }else{
          var result = eval(exp);
          result = result.toString();
          setExp(result);
  
        }


    
      

    }

  }

   

   

  

  }


  return (
    <>
  <Display Exp = {exp}/>
  <Buttons handleButton = {handleClick}/>
    </>
    

    
  );
}

export default App;
