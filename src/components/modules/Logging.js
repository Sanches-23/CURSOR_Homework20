// import loggingStyle from "../styles/loggining.module.css";
// import padlockIcon from "../utils/padlock.png"
//
// import React, {useState} from "react";
// import {Link} from "react-router-dom";
//
// function Logging() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//
//     const [rememberMe, setRememberMe] = useState(false); // New state for "Remember me"
//
//     const handleSignIn = () => {
//         const userData = JSON.parse(localStorage.getItem("userData"));
//         if (userData && userData.username === username && userData.password === password) {
//             console.log("User logged in successfully!");
//         } else {
//             console.log("Invalid username or password");
//         }
//     };
//
//     return (
//         <div className={loggingStyle.container}>
//             <div className={loggingStyle.wrapper}>
//                 <div className={loggingStyle.imageContainer}>
//                 <div className={loggingStyle.imageCircle}>
//                     <img
//                         className={loggingStyle.image}
//                         src={padlockIcon}
//                         alt={"home-img-cat"}
//                     />
//                 </div>
//                 </div>
//                 <h2>Sign In</h2>
//                 <input className={loggingStyle.inputAuth}
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <input  className={loggingStyle.inputAuth}
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//
//                 <label className={loggingStyle.labelCheckbox}>
//                     <input className={loggingStyle.checkbox}
//                         type="checkbox"
//                         checked={rememberMe}
//                         onChange={() => setRememberMe(!rememberMe)}
//                     />
//                     <p>
//                         Remember me
//                     </p>
//                 </label>
//
//                 <button className={loggingStyle.btn}
//                     onClick={handleSignIn}>
//                     Sign In
//                 </button>
//
//                 <div className={loggingStyle.links}>
//                     <p>
//                         <Link to="/signup">Forgot password?</Link>
//                     </p>
//                     <p>
//                         <Link to="/signup">Don't have an account? Sign Up</Link>
//                     </p>
//                 </div>
//
//                 <div className={loggingStyle.footer}>
//                     <p>
//                         shooo shoooooooo? 2023.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default Logging;

import loggingStyle from "../styles/loggining.module.css";
import padlockIcon from "../utils/padlock.png"

import React, {useEffect, useLayoutEffect, useState} from "react";
import {Link} from "react-router-dom";
import { useForm } from 'react-hook-form';

function Logging() {
    const [rememberMe, setRememberMe] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        const storedEmail = localStorage.getItem('savedEmail');
        const storedPassword = localStorage.getItem('savedPassword');

        if (rememberMe && storedEmail && storedPassword) {
            setEmail(storedEmail);
            setPassword(storedPassword);
        }
    }, [rememberMe]);

    const onSubmit = (data) => {
        if (rememberMe) {
            localStorage.setItem('savedEmail', data.email);
            localStorage.setItem('savedPassword', data.password);
        } else {
            localStorage.removeItem('savedEmail');
            localStorage.removeItem('savedPassword');
        }
        const userData = JSON.parse(localStorage.getItem("userData"));
        if (userData && userData.email === data.email && userData.password === data.password) {
            console.log("User logged in successfully!");
        } else {
            console.log("Invalid email or password");
        }
        console.log(data);
    };

    return (
        <div className={loggingStyle.container}>
            <div className={loggingStyle.wrapper}>
                <div className={loggingStyle.imageContainer}>
                    <div className={loggingStyle.imageCircle}>
                        <img
                            className={loggingStyle.image}
                            src={padlockIcon}
                            alt={"home-img-cat"}
                        />
                    </div>
                </div>
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit(onSubmit)} className={loggingStyle.wrapper}>
                            {errors.email && (
                                <p className="error">{errors.email.message}</p>
                            )}
                    <input className={loggingStyle.inputAuth}
                           type="text"
                           placeholder="Email Address"
                           {...register('email', {
                               required: 'Email Address is required',
                               minLength: {
                                   value: 3,
                                   message: 'Email Address must be at least 3 characters long',
                               },
                               maxLength: {
                                   value: 20,
                                   message: 'Email Address must not exceed 20 characters',
                               },
                               pattern: {
                                   value: /^[a-zA-Z0-9._]+@[a-zA-Z0-9-.]+\.[a-zA-Z]{2,}$/,
                                   message: 'Email Address can only contain letters, numbers and _ . -',
                               },
                           })}
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           // disabled={rememberMe}
                    />
                            {errors.password && (
                                <p className="error">{errors.password.message}</p>
                            )}
                    <input  className={loggingStyle.inputAuth}
                            type="password"
                            placeholder="Password"
                            {...register('password',{
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters long',
                                },
                                maxLength: {
                                    value: 28,
                                    message: 'Password must not exceed 28 characters',
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9_.-]+$/,
                                    message: 'The password can contain at least 1 lowercase and 1 ' +
                                        'uppercase letter without special symbols',
                                },
                            })}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            // disabled={rememberMe}
                    />
                    <label className={loggingStyle.labelCheckbox}>
                        <input className={loggingStyle.checkbox}
                               type="checkbox"
                               checked={rememberMe}
                               onChange={() => setRememberMe(!rememberMe)}
                        />
                        <p>
                            Remember me
                        </p>
                    </label>
                    <button className={loggingStyle.btn}
                            type="submit"
                    >
                        Sign In
                    </button>
                </form>

                <div className={loggingStyle.links}>
                    <p>
                        <Link to="/signup">Forgot password?</Link>
                    </p>
                    <p>
                        <Link to="/signup">Don't have an account? Sign Up</Link>
                    </p>
                </div>

                <div className={loggingStyle.footer}>
                    <p>
                        shooo shoooooooo? 2023.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Logging;