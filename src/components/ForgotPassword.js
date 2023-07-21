import React, { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.vlaue)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // this handle the form submission

        
    };

    return(
        <div>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} />
            </label>

            <button type="submit">Reset Password</button>
            </form>
        </div>
    );
};

export default ForgotPassword;