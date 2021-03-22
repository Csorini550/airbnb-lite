import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import PhoneInput from 'react-phone-number-input'
import * as sessionActions from "../../store/session";
// import './SignupForm.css';

function SignupFormPage({ authenticated, setAuthenticated }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [phone_number, setPhone_number] = useState("");
    const [description, setDescription] = useState("");
    const [profile_image, setProfile_image] = useState("");
    const [buisness_owner, setBuisness_owner] = useState("");
    const [errors, setErrors] = useState([]);

    // if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            setAuthenticated(true);
            return dispatch(sessionActions.signup({ email, password, first_name, last_name }))
                .catch(res => {
                    if (res.data && res.data.errors) setErrors(res.data.errors);
                });

        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    if (authenticated) {
        return <Redirect to="/" />;
    }
    return (
        <div className="login-container">
            <div>
                <h1>Sign Up</h1>
            </div>
            <form id="login-form" onSubmit={handleSubmit}>
                <div id="errors">
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                </div>
                <div id="email">
                    <label>

                        <input
                            placeholder="First Name"
                            type="text"
                            value={first_name}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div id="email">
                    <label>

                        <input
                            type="text"
                            value={last_name}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            placeholder="Last Name"
                        />
                    </label>
                </div>
                <div id="email">
                    <label>

                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Email"
                        />
                    </label>
                </div>
                {/* <div id="email">
                    <label>

                        <input
                            type="number"
                            value={phone_number}
                            onChange={(e) => setPhone_number(e.target.value)}
                            required
                            placeholder="Phone Number"
                        />
                    </label>
                </div> */}
                {/* <div id="email">
                    <label>

                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            placeholder="Description of venue"
                        />
                    </label>
                </div> */}
                {/* <div id="email">
                    <label>

                        <input
                            // TODO!!!! Set up to take an image uploaded by the user
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Profile image"
                        />
                    </label>
                </div> */}
                {/* <div id="email">
                    <label>

                        <input
                            type="text"
                            value={buisness_owner}
                            onChange={(e) => setBuisness_owner(e.target.value)}
                            required
                            placeholder="Are you a venue owener"
                        />
                    </label>
                </div> */}
                <div id="email">
                    <label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Password"
                        />
                    </label>
                </div>
                <div id="email">
                    <label>

                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            placeholder="Confirm Password"
                        />
                    </label>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignupFormPage;