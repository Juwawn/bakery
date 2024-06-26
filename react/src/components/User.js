const User = (props)=> {


    return (
        <div className="col-md-3">
            <h3 className="name-heading">
                {props.lName}, {props.fName}
            </h3>
            <p className="user-text">
                {props.username}
            </p>
            <p className="user-email">
                {props.email}
            </p>
            <p className="user-data-created text-capitalize">
                member since: {props.username}
            </p>
        </div>

    )
}

export default User