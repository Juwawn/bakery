const Form = ( { formData, handleChange, handleSubmit })=> {
    
    return(
        <main className="main" id="formMain">
            <div className="container form-con mt-4">
                <h2 className="text-center form-h2">Join & Become A Memeber</h2>
                <form id="form" className="form" onSubmit={handleSubmit}>
                    <div className="mb-3 row">
                        <div className="col-auto">
                            <label htmlFor="fName" className="form-label text-capitalize form-text">first name</label>
                            <input
                                type="text"
                                id="fName"
                                name="fName"
                                value={formData.fName}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="col-auto">
                            <label htmlFor="lName" className="form-label text-capitalize form-text">last name</label>
                            <input
                                type="text"
                                id="lName"
                                name="lName"
                                value={formData.lName}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="col-auto">
                            <label htmlFor="email" className="form-label text-capitalize form-text">email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="col-auto">
                            <label htmlFor="username" className="form-label text-capitalize form-text">username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="col-auto">
                            <label htmlFor="password" className="form-label text-capitalize form-text">password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn form-btn text-capitalize">
                            create login
                        </button>
                    </div>
                </form>
            </div>
        </main>
        
    )
}

export default Form