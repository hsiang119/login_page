

const Login = () => {

    return (
        <div className="wrapper relative w-[750px] h-[450px] bg-transparent border-2 border-primary">
            <div className="form-box login absolute top-0 w-[50%] h-[100%] bg-red-700">
                <h2>Login</h2>
                <form action="#">
                    <div className="input-box">
                        <input type="text" required/>
                        <label>Username</label>
                    </div>
                    <div className="input-box">
                        <input type="password" required/>
                        <label>Password</label>
                    </div>
                    <button type="submit" className="btn"></button>
                    <div className="logreg-link">
                        <p>
                            Don't have an account?
                            <a href="#" className="register-link">Sign Up</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login