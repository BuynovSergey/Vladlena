import React from 'react'
import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu'

export default function PechatiRoute() {
    return (
        <>
            <Menu />
            <div className='ss'><Outlet /></div>
        </>
    )
}
