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

    // console.log(cupcake)

    const cupcakeCard = cupcake.map(cupcake => {

        return (
                <Card
                    key={cupcake.cupcake_id}
                    id={cupcake.cupcake_id}
                    name={cupcake.name}
                    description={cupcake.description}
                    imgUrl={cupcake.flavorImg}
                    path={'cupcake'}
                />
        )
    })

    return(
        <main className="main mt-5" id="cupcakeMain">
            <div className="container">
                <h2 className="text-center text-uppercase mb-5">cupcakes</h2>
                <div className='row row-cols-1 row-cols-md-4 g-5'>
                    { cupcakeCard }
                </div>
            </div>
        </main>
    )
}

export default Cupcake
