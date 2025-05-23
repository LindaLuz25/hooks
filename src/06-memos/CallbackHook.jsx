import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10)

    const incremetFather = useCallback(
      (value) => {
        setCounter((c) => c+value)
      },
      [],
    )
    

    // const incremetFather = () =>{
    //     setCounter(counter+1)
    // }

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />
            <ShowIncrement incremet={incremetFather}/>
        </>
    )
}
