// import registrationStyle from "../styles/registration.module.css";
// import padlockIcon from "../utils/padlock.png"
// import React, {useState} from "react";
// import {Link} from "react-router-dom";
//
// function Registration() {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//
//     const [mailing, setMailing] = useState(false); // New state for "Remember me"
//
//     const handleSignUp = () => {
//         const userData = {firstName, lastName, username, password};
//         localStorage.setItem("userData", JSON.stringify(userData));
//         console.log("User registered successfully!");
//     };
//
//     return (
//         <div className={registrationStyle.container}>
//             <div className={registrationStyle.wrapper}>
//                 <div className={registrationStyle.imageContainer}>
//                     <div className={registrationStyle.imageCircle}>
//                         <img
//                             className={registrationStyle.image}
//                             src={padlockIcon}
//                             alt={"img"}
//                         />
//                     </div>
//                 </div>
//                 <h2>Sign Up</h2>
//                 <div className={registrationStyle.fullNameInputs}>
//                     <input className={registrationStyle.inputAuth}
//                         type="text"
//                         placeholder="First name"
//                         value={firstName}
//                         onChange={(e) => setFirstName(e.target.value)}
//                     /////////////////////////////////////////////////////////////////
//                     />
//                     <input className={registrationStyle.inputAuth}
//                         type="text"
//                         placeholder="Last name"
//                         value={lastName}
//                         onChange={(e) => setLastName(e.target.value)}
//                         /////////////////////////////////////////////////////////////////
//                     />
//                 </div>
//
//                 <input className={registrationStyle.inputAuth}
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <input className={registrationStyle.inputAuth}
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//
//                 <label className={registrationStyle.labelCheckbox}>
//                     <input className={registrationStyle.checkbox}
//                            type="checkbox"
//                            checked={mailing}
//                            onChange={() => setMailing(!mailing)}
//                     />
//                     <p>
//                         I want to receive inspiration, marketing promotions and updates via email.
//                     </p>
//                 </label>
//
//                 <button className={registrationStyle.btn}
//                     onClick={handleSignUp}>
//                     Sign Up
//                 </button>
//
//                 <div className={registrationStyle.links}>
//                     <p>
//                         <Link to="/signup">Already have an account? Sign Ip</Link>
//                     </p>
//                 </div>
//
//                 <div className={registrationStyle.footer}>
//                     <p>
//                         shooo shoooooooo? 2023.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default Registration;

import registrationStyle from "../styles/registration.module.css";
import padlockIcon from "../utils/padlock.png"
import React, {useState} from "react";
import {Link} from "react-router-dom";
import { useForm } from 'react-hook-form';

function Registration() {

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    //
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    //
    const [mailing, setMailing] = useState(false); // New state for "Remember me"
    // const handleSignUp = () => {
    //     const userData = {firstName, lastName, username, password};
    //     localStorage.setItem("userData", JSON.stringify(userData));
    //     console.log("User registered successfully!");
    // };

    const { register, handleSubmit, formState: { errors }  } = useForm();
    const onSubmit = (data) => {
        localStorage.setItem("userData", JSON.stringify(data));
        console.log(data); // Do your registration logic here
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
                <form onSubmit={handleSubmit(onSubmit)} className={registrationStyle.wrapper}>
                            {errors.firstName && (
                                <p className="error">{errors.firstName.message}</p>
                            )}
                            {errors.lastName && (
                                <p className="error">{errors.lastName.message}</p>
                            )}
                    <div className={registrationStyle.fullNameInputs}>
                        <input className={registrationStyle.inputAuth}
                               type="text"
                               placeholder="First name"
                               {...register('firstName', {
                                   required: 'FirstName is required',
                                   minLength: {
                                       value: 3,
                                       message: 'FirstName must be at least 3 characters long',
                                   },
                                   maxLength: {
                                       value: 23,
                                       message: 'FirstName must not exceed 23 characters',
                                   },
                               })}
                        />
                        <input className={registrationStyle.inputAuth}
                               type="text"
                               placeholder="Last name"
                               {...register('lastName', {
                                   required: 'LastName is required',
                                   minLength: {
                                       value: 3,
                                       message: 'LastName must be at least 3 characters long',
                                   },
                                   maxLength: {
                                       value: 23,
                                       message: 'LastName must not exceed 23 characters',
                                   },
                               })}
                        />
                    </div>
                            {errors.username && (
                                <p className="error">{errors.username.message}</p>
                            )}
                    <input className={registrationStyle.inputAuth}
                           type="text"
                           placeholder="Username"
                           {...register('username', {
                               required: 'Username is required',
                               minLength: {
                                   value: 3,
                                   message: 'Username must be at least 3 characters long',
                               },
                               maxLength: {
                                   value: 20,
                                   message: 'Username must not exceed 20 characters',
                               },
                               pattern: {
                                   value: /^[a-zA-Z0-9_.-]+$/,
                                   message: 'Username can only contain letters, numbers and _ . -',
                               },
                           })}
                    />
                            {errors.password && (
                                <p className="error">{errors.password.message}</p>
                            )}
                    <input className={registrationStyle.inputAuth}
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
                    />
                    <label className={registrationStyle.labelCheckbox}>
                        <input className={registrationStyle.checkbox}
                               type="checkbox"
                               checked={mailing}
                               onChange={() => setMailing(!mailing)}
                        />
                        <p>
                            I want to receive inspiration, marketing promotions and updates via email.
                        </p>
                    </label>
                    <button className={registrationStyle.btn}
                            type="submit"
                            // onClick={handleSignUp}
                        >
                        Sign Up
                    </button>
                </form>
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