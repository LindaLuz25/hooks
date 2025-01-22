import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
    const { counter, incremet, decremet, reset } = useCounter()


    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />

            <button onClick={() => incremet(1)} className='btn btn-primary'  >+1</button>
            <button onClick={reset} className='btn btn-primary' >Reset</button>
            <button onClick={() =>decremet(1)} className='btn btn-primary' >-1</button>
        </>
    )
}
