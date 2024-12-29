import { useState } from "react"
import Input from "./form/input";
import { useOutletContext } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

    const { setJwt } = useOutletContext();
    const { setAlertClassName } = useOutletContext();
    const { setAlertMessage } = useOutletContext();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("email/password ", email,password);
    }

    if (email === "admin@example.com") {
        setJwt("admin");
    }

    return(
        <div className="col-md-6 offset-md-3">
            <div className="text-center">
                <h2> Choose a movie to watch </h2>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <Input
                    title="email address"
                    type="email"
                    className="form-control"
                    name="email"
                    autoComplete="email-new"
                    onChange={(event) => setEmail(event.target.value)}
                    />

                <Input
                    title="password"
                    type="password"
                    className="form-control"
                    name="password"
                    autoComplete="password-new"
                    onChange={(event) => setPassword(event.target.value)}
                    />
                <input 
                    type="submit" 
                    className="btn btn-primary"
                    value="Login"
                />
                </form>
            </div>
        </div>
    )
}

export default Login