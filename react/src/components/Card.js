import { Link } from "react-router-dom"

const Card = (props)=> {

    return (
        <div className="col">
            <div className="card h-100">
                <img src={`/images/${props.imgUrl}`} alt={`image of ${props.name}`} className="img-fluid image card-img-top card-image"/>
                <div className="card-body">
                    <h3 className="card-title">
                        <Link to={`${props.path}/${props.id}`}> {props.name}</Link>
                        <p className="card-text">
                            {props.description}
                        </p>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Card