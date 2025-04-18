import { useState } from "react";
import { useMemo } from "react"
// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    let expensiveValue = 0;

    expensiveValue = useMemo(()=>{
        console.log("hi from expensive")
        let ans = 1
        for(let i = input; i>0; i--){
            ans = ans*i
        }
        return ans;
    },[input])
    // Your solution ends here

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}