import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DefaultLayout = () => {
    return (
        <div>
            <h2>default layout</h2>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/test/contact'}>contact</Link></li>
                <li><Link to={'/about'}>about</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default DefaultLayout
