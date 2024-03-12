import { useState, createContext } from 'react';
const counterContext = createContext();

export const CounterProvider = ({children})=>{

    const[ab,setAb]=useState(0);

   const handle0 = ()=>{
    setAb(0);
    console.log(ab);
  }
  const handle1 = ()=>{
    setAb(1);
    console.log(ab);
  }
  const handle2 = ()=>{
    setAb(2);
    console.log(ab);
  }
  const handle3 = ()=>{
    setAb(3);
    console.log(ab);
  }


    return (
        <counterContext.Provider value={{ab, handle0,handle1 ,handle2 ,handle3}}>
            {children}
        </counterContext.Provider>
    )
}

export default counterContext;