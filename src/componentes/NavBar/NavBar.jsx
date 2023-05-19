import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <h1>Tienda de ropa Online</h1>

            <nav>
                <ul>
                    <li>Hombres</li>
                    <li>Mujeres</li>
                    <li>Niños</li>
                </ul>
            </nav>

            <CardWidget />
        </header>

    )
}

export default NavBar