import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Brownie = ()=> {

    const [ brownie, setBrownie ] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/brownie')
            .then (res => {
                setBrownie(res.data)
            })
    }, [])

    console.log(brownie)

    const brownieCard = brownie.map(brownie => {

        return (
                <Card
                    key={brownie.brownie_id}
                    id={brownie.brownie_id}
                    name={brownie.name}
                    description={brownie.description}
                    imgUrl={brownie.flavorImg}
                    path={'brownie'}
                />
        )
    })


    return (
            <main className="main mt-5" id="brownieMain">
                <div className="container">
                    <h2 className="text-center text-uppercase mb-5">brownies</h2>
                    <div className='row row-cols-1 row-cols-md-4 g-5'>
                        { brownieCard }
                    </div>
                </div>
            </main>
    )
}

export default Brownie