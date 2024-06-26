import { useState, useEffect } from "react";
import axios from 'axios'
import Card from "./Card";

const Cookie = ()=> {

    const [ cookie, setCookie ] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/cookie')
            .then(res => {
                setCookie(res.data)
            })
    }, [])

    console.log(cookie)

    const cookieCard = cookie.map(cookie => {

        return (
                <Card
                    key={cookie.cookie_id}
                    id={cookie.cookie_id}
                    name={cookie.name}
                    description={cookie.description}
                    imgUrl={cookie.flavorImg}
                    path={'/cookie'}
                />
        )
    })

    return (
        <main className="main" id="cookieMain">
            <div className="container">
                <h2>cookies</h2>
                <div className='row row-cols-1 row-cols-md-5 g-4'>
                    { cookieCard }
                </div>
            </div>
        </main>
    )
}

export default Cookie