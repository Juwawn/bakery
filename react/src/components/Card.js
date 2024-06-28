import { Link } from "react-router-dom"

const Card = (props)=> {

    return (
        <div className="col">
            <div className="card h-100">
                <Link to={`${props.path}/${props.id}`}> 
                    <img src={`/images/${props.imgUrl}`} alt={`image of ${props.name}`} className="img-fluid image card-img-top card-image"/>
                </Link>
                <div className="card-body">
                    <h3 className="card-title fs-5 text-center">
                        <Link to={`${props.path}/${props.id}`} className="text-decoration-none title"> {props.name}</Link>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Card