import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Cake = ()=> {

    const [ cake, setCake ] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3005/api/cake')
            .then(res => {
                setCake(res.data)
            })
    }, [])

    console.log(cake)

    const cakeCard = cake.map(cake => {

        return (
                <Card 
                    key={cake.cake_id}
                    id={cake.cake_id}
                    name={cake.name}
                    description={cake.description}
                    imgUrl={cake.flavorImg}
                    path={'/cake'}
                />
        )
    })

    return (
            <main className="main" id="cakeMain">
                <div className="container">
                    <h2>cakes</h2>
                    <div className='row row-cols-1 row-cols-md-5 g-4'>
                        { cakeCard }
                    </div>
                </div>
            </main>
    )
}

export default Cake