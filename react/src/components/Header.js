import { Link } from 'react-router-dom'

const Header =()=> {

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="display-1 text-capitalize text-md-center ">
                            <Link to='/' className='text-decoration-none'>
                                I DESSERT IT SWEETS & TREATS
                            </Link>
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header