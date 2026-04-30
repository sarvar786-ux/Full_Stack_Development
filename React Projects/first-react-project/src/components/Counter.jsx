import React from 'react'
import './Counter.css'
import { useState } from 'react'
const Counter = () => {
    //let counter=0
    //whatever prefix "use.." is known as hooks in react
    let [counter, setCounter] = useState(0)    //initial counter
    function increment() {
        if (counter <=9)
            setCounter(++counter)
        else
            alert('Limit Reached')
    }
    // let [conter ,setCounter]=useState(counter)
    function incrementBy2() {
        if (counter>0)
           setCounter(counter += 2)
        else
            alert('Limit Reached')
    }
    function decrementBy2() {
        if (counter>0)
           setCounter(counter -= 2)
        else 
            alert('Limit Reached')
            
    }
    return (
        
        <div className="buttons">
            <div className='container'>
                <h2>Counter App</h2>
            
            <button onClick={increment}>My Increment</button>
            <button onClick={() => {
                if (counter > 0)
                    setCounter(--counter)
                else
                    alert('Limit Reached')
            }}>My Decrement</button>
            <button onClick={incrementBy2}>My Increment by 2</button>
            <button onClick={decrementBy2}>My Decrement by 2</button><br/>
            <span className='counter'>{counter} </span>
            </div>
        </div>
    )
}

export default Counter