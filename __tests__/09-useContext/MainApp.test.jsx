import { render, screen } from "@testing-library/react"
import { MainApp } from '../../src/09-useContext/MainApp'
import React from 'react'
import { MemoryRouter } from "react-router-dom"
describe('Pruebas en <MainApp/>', () => {

    test('Debe de mostrar el HomePage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>

        )
        // expect(screen.getByText('HomePage')).toBeTruthy()
        expect(screen.getByText('LoginPage')).toBeTruthy()
        //screen.debug()
    })

})
