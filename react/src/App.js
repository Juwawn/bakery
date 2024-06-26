import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ErrorPage from './components/ErrorPage'
import Cookie from './components/Cookie'
import Brownie from './components/Brownie'
import Cake from './components/Cake'
import Cupcake from './components/Cupcake'
import Specialty from './components/Specialty'
import Snackbox from './components/Snackbox'
import Bakery from './components/Bakery'
import Single from './components/Single'
import Login from './components/Login'
import Form from './components/Form'
import Users from './components/Users'



const App = ()=> {
    
    const [ formData, setFormData ] = useState({
        fName: '',
        lName: '',
        email: '',
        username: '',
        password: ''
    })

    const [ users, setUsers ] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/user')
            .then(res => {
                setUsers(res.data)
            })
    }, [])

    console.log(users)

    const handleChange = (event)=> {

        const {name, value} = event.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = ()=> {

        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

        if (regex.test(formData.password) === false) {
            alert('Password not valid.\nMust contain:\n&middot; one uppercase letter\nmiddot; one lowercase letter \n&middot; one number\n&middot; one special character &\nmiddot; at least 8 characters')
        } else {
            axios({
                method: 'post',
                url: 'http://localhost:3005/api/user/create',
                data: formData
            })
        }
    }



    return (
        <>
            <Header />
            <Bakery />
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='*' element={ <ErrorPage /> } />
                <Route path='/cookie' element={ <Cookie /> } />
                <Route path='/brownie' element={ <Brownie /> } />
                <Route path='/cake' element={ <Cake /> } />
                <Route path='/cupcake' element={ <Cupcake /> } />
                <Route path='/specialty' element={ <Specialty /> } />
                <Route path='/snackbox' element={ <Snackbox /> } />
                <Route path='/:path/:id' element={ <Single /> } />
                <Route path='/user' element={ <Login users={users}/> } />
                <Route path='/sign-up' element={
                    <Form 
                        formData={formData} 
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    /> } />
                <Route path='/users' element={ <Users users={users}/> } />
            </Routes>
            <Footer />
        </>
    )

}

export default App