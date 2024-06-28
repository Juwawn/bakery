// https://getbootstrap.com/docs/5.3/components/dropdowns/#menu-items

import { useState } from "react"
import { Link } from "react-router-dom"

const Bakery = ( { users })=> {

    const [ loginData, setLoginData ] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event)=> {

        const { name, value } = event.target

        setLoginData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const [ access, setAccess ] = useState(false)

    const [ user, setUser ] = useState('')

    const handleSubmit = (event)=> {
        event.preventDefault()
        for (let i = 0; i < users.length; i++) {
            if ((users[i].username === loginData.username) && (users[i].password === loginData.password)) {

                setAccess(prevState => !prevState)
                setUser(users[i].username)
                setLoginData({
                    username: '',
                    password: ''
                })
            }
        }
        console.log(access)
        return access
    }



    return (
            <nav className="navbar navbar-dark background">
                <div className="container-fluid">
                    <h2 className="offcanvas-title navbar-brand text-capitalize" id="offcanvasNavbarLabel">
                        <Link to='/' className="navbar-link text-decoration-none" aria-current="page" >home</Link>
                    </h2>
                    <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-capitalize" id="offcanvasNavbarLabel">
                                <Link to='/' className="nav-link" aria-current="page" >bakery</Link>
                            </h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-capitalize">
                                <li className="nav-item">
                                    <Link to='/cookie' className="nav-link p-2" aria-current="page" id="cookie">cookies</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/brownie' className="nav-link p-2" aria-current="page" >brownies</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/cake' className="nav-link p-2" aria-current="page" >cakes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/cupcake' className="nav-link p-2" aria-current="page" >cupcakes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/specialty' className="nav-link p-2" aria-current="page" >specialty</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/snackbox' className="nav-link p-2" aria-current="page" >snackbox</Link>
                                </li>
                                <li className="nav-item">
                                    <div className="dropdown">
                                        <button className="btn login-btn p-2" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                            Member ?
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-dark">
                                            <li>
                                                <Link to='/sign-up' className="nav-link ps-3" aria-current="page"> sign up</Link>
                                            </li>
                                            <li>
                                                <div className="dropdown">
                                                    <button type="button" className="btn dropdown-toggle ps-3 login-btn" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                                        Login
                                                    </button>
                                                    <form onSubmit={handleSubmit} className="dropdown-menu dropdown-menu-dark p-4 login-form">
                                                        <div className="mb-3">
                                                            <label 
                                                                htmlFor="loginUserename" 
                                                                className="form-label form-text"
                                                            >Username</label>
                                                            <input 
                                                                type="text" 
                                                                id="loginUsername"
                                                                name="username"
                                                                value={loginData.username}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label 
                                                                htmlFor="loginPassword" 
                                                                className="form-label form-text"
                                                            >Password</label>
                                                            <input 
                                                                type="password" 
                                                                id="loginPassword"
                                                                name="password"
                                                                value={loginData.password}
                                                                onChange={handleChange}
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <button type="submit" className="btn login-btn2">Login</button>
                                                        {access && <p className="access-text">Greetings { user }
                                                        { loginData.username }</p>}
                                                    </form>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/* <li className="nav-item"><Link to='/user' className="nav-link active" aria-current="page" >user</Link></li>
                                <li className="nav-item"><Link to='/users' className="nav-link active" aria-current="page" >users</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

    )
}

export default Bakery