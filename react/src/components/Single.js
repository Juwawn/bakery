import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "./Card";

const Single = ()=> {

    const [ single, setSingle ] = useState({})
    const params = useParams()

    const url = `http://localhost:3005/api/${params.path}/${params.id}`

    useEffect(()=> {
        axios.get(url)
            .then(res => { 
                setSingle(res.data)
            })

    }, [])

    console.log(single)

    // const singleCard = single.map(single => {

    //     return (
    //                 <Card
    //                     key={single.single_id}
    //                     id={single.single_id}
    //                     name={single.name}
    //                     description={single.description}
    //                     imgUrl={single.flavorImg}
    //                     // path={'/:path/:id'}
    //                 />
    //     )
    // })



    return (
        <main className="main" id="singleMain">
            <div className="container">
                <div className='row'>
                    <div className="col-6">
                        <h2>{single.name}</h2>
                        <img src={`/images/${single.flavorImg}`} alt={`image of ${single.name}`} className="img-fluid d-block mx-auto single-image" />
                    </div>
                    <div className="col-6">
                        <div className="card h-100">
                            <div className="card-body">
                                <h3 className="size">
                                {/* <div class="btn-group">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        size
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">4 pk</a></li>
                                        <li><a class="dropdown-item" href="#">8 pk</a></li>
                                        <li><a class="dropdown-item" href="#">12 pk</a></li>
                                    </ul>
                                </div>  */}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Single 