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
                    path={'/brownie'}
                />
        )
    })


    return (
            <main className="main" id="brownieMain">
                <div className="container">
                    <h2>brownies</h2>
                    <div className='row row-cols-1 row-cols-md-5 g-4'>
                        { brownieCard }
                    </div>
                </div>
            </main>
    )
}

export default Brownie