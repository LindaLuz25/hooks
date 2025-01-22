import { useState } from "react"


export const useCounter = (initialValue) => {
    const [counter, setCounter] = useState(initialValue)

    const incremet = (value = 1) =>{
        setCounter(counter + value)
    }
    const decremet = (value = 1 ) =>{
        if(counter === 0) return
        setCounter (counter-value)
    }

    const reset = () =>{
        setCounter(initialValue)
    }

    return {
        counter,
        incremet,
        decremet,
        reset

    }
}
