import { useState } from "react";

const Login = ( { users } )=> {

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

        <div class="dropdown">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                Dropdown form
            </button>
            <form onSubmit={handleSubmit} class="dropdown-menu p-4 login-form">
                <div class="mb-3">
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
                <div class="mb-3">
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
                <button type="submit" className="btn btn-success login-btn">login</button>
                {access && <p className="access-text">Greetings { user }
                { loginData.username }</p>}
            </form>
        </div>

    )
}

export default Login