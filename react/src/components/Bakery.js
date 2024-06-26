// https://getbootstrap.com/docs/5.3/components/dropdowns/#menu-items

import { Link } from "react-router-dom"
import Login from "./Login"

const Bakery = ()=> {

    return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <h2 className="offcanvas-title" id="offcanvasNavbarLabel">bakery</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Bakery</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item"><Link to='/' className="nav-link active" aria-current="page" >home</Link></li>
                                <li className="nav-item"><Link to='/cookie' className="nav-link active" aria-current="page" id="cookie">cookies</Link></li>
                                <li className="nav-item"><Link to='/brownie' className="nav-link active" aria-current="page" >brownies</Link></li>
                                <li className="nav-item"><Link to='/cake' className="nav-link active" aria-current="page" >cakes</Link></li>
                                <li className="nav-item"><Link to='/cupcake' className="nav-link active" aria-current="page" >cupcakes</Link></li>
                                <li className="nav-item"><Link to='/specialty' className="nav-link active" aria-current="page" >specialty</Link></li>
                                <li className="nav-item"><Link to='/snackbox' className="nav-link active" aria-current="page" >snackbox</Link></li>
                                <li className="nav-item">
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                        Member ?
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><button class="dropdown-item" type="button"><li className="nav-item"><Link to='/sign-up' className="nav-link active text-danger" aria-current="page" >sign up</Link></li></button></li>
                                        <li><button class="dropdown-item" type="button"><Login /></button></li>
                                        
                                    </ul>
                                </div>
                                </li>
                                <li className="nav-item"><Link to='/user' className="nav-link active" aria-current="page" >user</Link></li>
                                
                                <li className="nav-item"><Link to='/users' className="nav-link active" aria-current="page" >users</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

    )
}

export default Bakery