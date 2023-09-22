import { FC } from 'react'
import { Link } from 'react-router-dom'

const Home: FC = () => {
    return (
        <>
            <h1> This is Home page </h1>
            <p>Welcome to our website. We are glad to have you here.</p>
            <p>Feel free to navigate through the pages using the navigation bar.</p>
            <Link to='/about'>Read Doc</Link>
        </>
        /// Browser router

    )
}

export default Home