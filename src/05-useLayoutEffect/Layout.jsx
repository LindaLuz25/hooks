import React from 'react'
import { useCounter, useFetch } from '../hooks'
import { PokemonCard,LoadingMessage } from '../03-examples'

export const Layout = () => {
  const { counter, decremet, incremet } = useCounter(1)
  const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
  return (
    <>
      <h1>Informacion de Pokemón</h1>
      <hr />

      {
        isLoading
          ? <LoadingMessage />
          : (
            <PokemonCard
              id={counter}
              name={data.name}
              sprites={[
                data.sprites.front_default,
                data.sprites.front_shiny,
                data.sprites.back_default,
                data.sprites.back_shiny,
                
              ]}
            />
          )
      }


      <button
        className='btn btn-primary mt-2'
        onClick={() => counter > 1 ? decremet() : null}
      >
        Anterior
      </button>
      <button
        className='btn btn-primary mt-2'
        onClick={() => incremet()}
      >
        Siguiente
      </button>
    </>
  )
}
