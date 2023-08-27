import registrationStyle from "../styles/registration.module.css";
import padlockIcon from "../utils/padlock.png"
import React, {useState} from "react";
import {Link} from "react-router-dom";

function Registration() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [rememberMe, setRememberMe] = useState(false); // New state for "Remember me"

    const handleSignUp = () => {
        const userData = {username, password};
        localStorage.setItem("userData", JSON.stringify(userData));
        alert("User registered successfully!");
    };

    return (
        <div className={registrationStyle.container}>
            <div className={registrationStyle.wrapper}>
                <div className={registrationStyle.imageContainer}>
                    <div className={registrationStyle.imageCircle}>
                        <img
                            className={registrationStyle.image}
                            src={padlockIcon}
                            alt={"img"}
                        />
                    </div>
                </div>
                <h2>Sign Up</h2>
                <div className={registrationStyle.fullNameInputs}>
                    <input className={registrationStyle.inputAuth}
                        type="text"
                        placeholder="First name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input className={registrationStyle.inputAuth}
                        type="text"
                        placeholder="Last name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <input className={registrationStyle.inputAuth}
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input className={registrationStyle.inputAuth}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label className={registrationStyle.labelCheckbox}>
                    <input className={registrationStyle.checkbox}
                           type="checkbox"
                           checked={rememberMe}
                           onChange={() => setRememberMe(!rememberMe)}
                    />
                    <p>
                        I want to receive inspiration, marketing promotions and updates via email.
                    </p>
                </label>

                <button className={registrationStyle.btn}
                    onClick={handleSignUp}>
                    Sign Up
                </button>

                <div className={registrationStyle.links}>
                    <p>
                        <Link to="/signup">Already have an account? Sign Ip</Link>
                    </p>
                </div>

                <div className={registrationStyle.footer}>
                    <p>
                        shooo shoooooooo? 2023.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Registration;