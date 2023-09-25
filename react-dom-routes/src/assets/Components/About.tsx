import { FC } from 'react'
import { Link, Outlet } from 'react-router-dom'

const About: FC = () => {
    return (
        <>
            <h1>This is About Page</h1>
            <br />

            <Link to='achievement'>Achievement-</Link>
            <Link to='history'>History</Link>
            <Outlet />

        </>
    )
}

export default About