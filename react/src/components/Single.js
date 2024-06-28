import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

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



    return (
        <main className="main mt-5" id="singleMain">
            <div className="container">
                <div className='row'>
                    <div className="col-6">
                        <h2 className="text-capitalize text-center">
                            <Link to={`/${params.path}`} className="single-link text-decoration-none" aria-current="page" >{params.path}s</Link> : {single.name}
                        </h2>
                        <img src={`/images/${single.flavorImg}`} alt={`image of ${single.name}`} className="img-fluid d-block mx-auto single-image" />
                    </div>
                    <div className="col-6 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <table className=" table table-hover table-sm caption-top text-center">
                                    <caption>Options for {single.name}</caption>
                                    <thead>
                                        <tr>
                                            <th scope="col">Size</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-group-divider">
                                        <tr>
                                            <td scope="col">{single.size}</td>
                                            <td scope="col">{single.qty}</td>
                                            <td scope="col">${single.price}.00</td>
                                        </tr>
                                        {/* <tr>
                                            <th scope="col">2</th>
                                            <td scope="col">{size[4].name}</td>
                                            <td scope="col">Thornton</td>
                                            <td scope="col">@fat</td>
                                        </tr> */}
                                    </tbody>
                                </table>
                                <p className="card-text text-capitalize">
                                    description: {single.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Single 