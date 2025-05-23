import { renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"
import { act } from "react"

describe('Pruebas en el useCounter', () => {
    test('debe de retornar los valores por defecto', () => {
        const { result } = renderHook(() => useCounter())
        const { counter, decrement, incremet, reset } = result.current

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function))
        expect(incremet).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))
    })


    test('debe de generar el counter con el valor de 100', () => {
        const { result } = renderHook(() => useCounter(100))
        const { counter } = result.current
        expect(counter).toBe(100)
    })

    test('debe de incrementar el contador', () => { 
        const { result } = renderHook(() => useCounter(100))
        const { counter, incremet} = result.current

        act(() =>{
            incremet()
            incremet(2)
        })
        
        expect(result.current.counter).toBe(103)
     })
    
    
    test('debe de decrementar el contador', () => { 
        const { result } = renderHook(() => useCounter(100))
        const { counter, decrement} = result.current

        act(() =>{
            decrement()
            decrement(2)
        })
        
        expect(result.current.counter).toBe(97)
     })

     test('debe de realizar el reset el contador', () => { 
        const { result } = renderHook(() => useCounter(100))
        const { counter, reset} = result.current

        act(() =>{
            reset()
            
        })
        
        expect(result.current.counter).toBe(100)
     })
})