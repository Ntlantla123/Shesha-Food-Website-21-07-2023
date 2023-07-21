import '../components/Login.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate = useNavigate();

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            //implentation
            // console.log('proceed');
            fetch("https://zero1-june-2023-test-shesha-backend.onrender.com/user/" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('Please Enter valid username');
                } else {
                    if (resp.password === password) {
                        toast.success('Success');
                        sessionStorage.setItem('username', username);
                        usenavigate('/home')
                    } else {
                        toast.error('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }
    const validate = () => {
        let results = true;
        if (username === '' || username === null) {
            results = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            results = false;
            toast.warning('Please Enter Password');
        }
        return results;
    }
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-success" style={{width:"125%",}}>
            <div className="form_container p-5 rounded bg-light">
                <form onSubmit={ProceedLogin}>
                    <h3 className="text-center">Sign In</h3>
                    <div className="mb-2">
                        <label htmlFor="email">Username</label>
                        <input type="text" placeholder="Enter Username" className="form-control" value={username} onChange={e => usernameupdate(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" className="form-control" value={password} onChange={e => passwordupdate(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <input type="checkbox" className="custom-control custom-checkbox" id="check" />
                        <label htmlFor="check" className="custom-input-label ms-2">
                            Remember Me
                        </label>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-success" style={{backgroundColor:"green",}}>Sign In</button>
                    </div>
                    <p className="text-start mt-2">
                        Forgot Password ?<Link to="/Register" className="ms-2" style={{textDecoration:"none",}}>Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;