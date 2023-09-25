import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'


const NavBar: FC = () => {
    return (
        <>
            <ul style={{ listStyle: "none", display: "-webkit-inline-flex" }}>
                <li><Link to='/'>Home  </Link></li>
                {/* this is how we will make active link */}
                <li> <NavLink style={({ isActive }) => { return { color: isActive ? "white" : "" } }} to='/Contact'>Contact</NavLink></li>
                <li> <Link to='/about'>About</Link></li>
                <li><Link to='/user/Amit'>Amit</Link></li>
                <li><Link to='/user/Peter'>Peter</Link></li>
                <li><Link to='/filter'>Filter Page</Link></li>
            </ul >
        </>
    )
}

export default NavBar