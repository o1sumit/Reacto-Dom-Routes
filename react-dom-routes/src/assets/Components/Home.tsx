import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home: FC = () => {
    const navigate = useNavigate()

    const navigateTo = (param: string) => {
        navigate(`/${param}`)
    }

    return (
        <>
            <h1> This is Home page </h1>
            <p>Welcome to our website. We are glad to have you here.</p>
            <p>Feel free to navigate through the pages using the navigation bar.</p>
            <Link to='/about'>Read Doc</Link>
            <button onClick={() => navigateTo('filter')}></button>
        </>
        /// Browser router

    )
}

export default Home