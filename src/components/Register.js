import './Register.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {


    const [id, idchange] = useState("");
    //const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");

    const navigate = useNavigate();

    const isValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in :';

        //if (id === null || name === '') {
            // isproceed = false;
            // errormessage += ' Name ;';
        // }
        if (id === null || password === '') {
            isproceed = false;
            errormessage += ' Password ;';
        }

        if (id === null || email === '') {
            isproceed = false;
            errormessage += ' Email ';
        }

        // Validation //
        if (!isproceed) {
            toast.warning(errormessage)
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

            } else {
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }

    const handlesubmit = (e) => {

        e.preventDefault();
        let regob = { id, password, email, };
        if (isValidate()) {
            console.log(regob);

            fetch("https://zero1-june-2023-test-shesha-backend.onrender.com/user", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regob)
            }).then((res) => {
                toast.success('Registered successfully.')
                navigate('/login');
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
        }

    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-success" style={{width:"125%",}}>
            <div className="form_container p-5 rounded bg-light">
                <form onSubmit={handlesubmit}>
                    <h3 className="text-center">Sign Up</h3>
                    <div className="mb-2">
                        <label htmlFor="email">Username</label>
                        <input type="text" placeholder="Enter Username" className="form-control" value={id} onChange={e => idchange(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="lname">Email</label>
                        <input type="email" placeholder="Enter Email" className="form-control" value={email} onChange={e => emailchange(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" className="form-control" value={password} onChange={e => passwordchange(e.target.value)} />
                    </div>

                    
                    {/*<div className="mb-2">
                        <input type="checkbox" className="custom-control custom-checkbox" id="check" />
                        <label htmlFor="check" className="custom-input-label ms-2">
                            Remember Me
    </label>
    </div>*/}
                    <div className="d-grid">
                        <button className="btn btn-success" style={{backgroundColor:"green",}}>Sign Up</button>
                    </div>
                    <p className="text-start mt-2">
                       Already Registered?<Link to="/Login" className="ms-2" style={{textDecoration:"none",}}>Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;