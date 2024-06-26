import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Specialty = ()=> {

    const [ specialty, setSpecialty ] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/specialty')
            .then(res => {
                setSpecialty(res.data)
            })
    }, [])

    console.log(specialty)

    const specialtyCard = specialty.map(specialty => {

        return (
                <Card
                    key={specialty.specialty_id}
                    id={specialty.specialty_id}
                    name={specialty.name}
                    description={specialty.description}
                    imgUrl={specialty.flavorImg}
                    path={'/specialty'}
                />

        )
    })



    return (
        <main className="main" id="specialMain">
            <div className="container">
                <h2>Specials</h2>
                <div className='row row-cols-1 row-cols-md-5 g-4'>
                    { specialtyCard }
                </div>
            </div>
        </main>
    )
}

export default Specialty