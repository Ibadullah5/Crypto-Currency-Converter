import UI from "./UI";
import coinarray from './coinarray'
import React from "react";

function App() {

  const[data, setData] = React.useState('')

  let url = 'https://api.coingecko.com/api/v3/simple/price?ids='
  let keys = Object.values(coinarray)

  for(let i = 0 ; i<keys.length ; i++){
    if(i !== keys.length-1){
      url += keys[i]+"," 
    }
    else{
      url += keys[i]+"&vs_currencies=USD" 
    }
    } 
   
    React.useEffect(() =>{
      fetch(url).then(res => res.json()).then(data => setData(data))
    },[])


  return (
    <UI data={data} />
  );
}

export default App;
