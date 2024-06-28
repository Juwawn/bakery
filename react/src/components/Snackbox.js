import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Snackbox = ()=> {

    const [ snackbox, setSnackbox ] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/snackbox')
            .then(res => {
                setSnackbox(res.data)
            })
    }, [])

    console.log(snackbox)

    const snackboxCard = snackbox.map(snackbox => {

        return (
                <Card
                    key={snackbox.snackbox_id}
                    id={snackbox.snackbox_id}
                    name={snackbox.name}
                    description={snackbox.description}
                    imgUrl={snackbox.flavorImg}
                    path={'/snackbox'}
                />
        )
    })



    return (
        <main className="main mt-5" id="snackMain">
            <div className="container">
                <h2 className="text-center text-uppercase mb-5">Snackboxes</h2>
                <div className='row row-cols-1 row-cols-md-4 g-4'>
                    { snackboxCard }
                </div>
            </div>
        </main>
    )
}

export default Snackbox