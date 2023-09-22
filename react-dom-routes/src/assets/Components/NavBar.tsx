import { FC } from 'react'
import { Link } from 'react-router-dom'


const NavBar: FC = () => {
    return (
        <>
            <ul style={{ listStyle: "none" }}>
                <li><Link to='/'>Home</Link></li>
                <li> <Link to='/Contact'>Contact</Link></li>
                <li> <Link to='/about'>About</Link></li>
                <li><Link to='/user/amit'>Amit</Link></li>
                <li><Link to='/user/peter'>Peter</Link></li>
            </ul>
        </>
    )
}

export default NavBar