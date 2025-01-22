import React from 'react'

export const ShowIncrement = React.memo(({ incremet }) => {
    console.log('Me volvi a generar:(')
    return (
        <button
            className='btn btn-primary'
            onClick={() => { incremet(5) }}>
            Incrementar
        </button>
    )
})
