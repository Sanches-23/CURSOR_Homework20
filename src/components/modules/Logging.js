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

import React, {useState} from "react";
import {Link} from "react-router-dom";
import { useForm } from 'react-hook-form';

function Logging() {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    //
    // const [rememberMe, setRememberMe] = useState(false); // New state for "Remember me"
    //
    // const handleSignIn = () => {
    //     const userData = JSON.parse(localStorage.getItem("userData"));
    //     if (userData && userData.username === username && userData.password === password) {
    //         console.log("User logged in successfully!");
    //     } else {
    //         console.log("Invalid username or password");
    //     }
    // };

    const [rememberMe, setRememberMe] = useState(false); // New state for "Remember me"
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem("userData"));
        if (userData && userData.username === data.username && userData.password === data.password) {
            console.log("User logged in successfully!");
        } else {
            console.log("Invalid username or password");
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
                {/* className={loggingStyle.formAuth}*/}
                <form onSubmit={handleSubmit(onSubmit)} className={loggingStyle.wrapper}>
                    <input className={loggingStyle.inputAuth}
                           type="text"
                           placeholder="Username"
                           {...register('username')}
                    />
                    <input  className={loggingStyle.inputAuth}
                            type="password"
                            placeholder="Password"
                            {...register('password')}
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
                            // onClick={handleSignIn}
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