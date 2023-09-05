import React , {useState} from 'react'

export default function FunState() {
    let [count,setCount] = useState(10);
    let x = 10;
    function inc()
    {
        // x++;
        setCount(count - x);
    }
  return (
    <>
        {/* <h1>{x}</h1> */}
        <h1>{count}</h1>
        <button onClick = {() =>inc()}  color="danger">
            decrement
        </button>
    </>
  )
}
    
