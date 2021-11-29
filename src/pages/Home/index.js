import React from 'react';
import { Link } from 'react-router-dom'

const Page = () => {
    return (
        <>
            <div>Initial page</div>
            <Link to="/about">Sobre</Link>
        </>
    )
}

export default Page