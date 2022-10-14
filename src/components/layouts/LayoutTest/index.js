import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const LayoutTest = () => {
    return (
        <div>
            <Link to={'contact'}>Contact</Link>
            <h2>test layout</h2>
            <Outlet />
        </div>
    )
}

export default LayoutTest
