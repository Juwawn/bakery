import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Cupcake = ()=> {

    const [ cupcake, setCupcake ] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/cupcake')
            .then(res => {
                setCupcake(res.data)
            })

    }, [])

    console.log(cupcake)

    const cupcakeCard = cupcake.map(cupcake => {

        return (
                <Card
                    key={cupcake.cupcake_id}
                    id={cupcake.cupcake_id}
                    name={cupcake.name}
                    description={cupcake.description}
                    imgUrl={cupcake.flavorImg}
                    path={'/cupcake'}
                />
        )
    })

    return(
        <main className="main" id="cupcakeMain">
            <div className="container">
                <h2>cupcake</h2>
                <div className='row row-cols-1 row-cols-md-5 g-4'>
                    { cupcakeCard }
                </div>
            </div>
        </main>
    )
}

export default Cupcake
