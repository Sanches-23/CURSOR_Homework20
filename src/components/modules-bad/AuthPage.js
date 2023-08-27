// import LoginPageStyle from "../styles/registration.module.css";
// import {BrowserRouter, createBrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
// import Logging from "./Logging";
// import Registration from "./Registration";
// import userEvent from "@testing-library/user-event";
// import {useEffect, useState} from "react";
//
// function AuthPage() {
//     const router = createBrowserRouter(
//         [
//             {
//                 index: true,
//                 element: <Logging/>,
//             },
//             {
//                 index: true,
//                 element: <Registration/>,
//             },
//         ]
//     )
//
//     return (
//         <>
//
//             <BrowserRouter>
//                 <MyRoutes/>
//             </BrowserRouter>
//
//
//             <div className={LoginPageStyle}>
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//             </div>
//
//
//
//         </>
//     );
// }
//
// const MyRoutes = () => {
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         console.log("tra-tata")
//         }, [])
//     const [isAuth, setAuth] = useState(false)
//
//     useEffect(() => {
//         if (isAuth) {
//             navigate("/")
//         }
//     },[isAuth, navigate])
//
//     return <>
//         {/*<Link to="/"></Link>*/}
//         <Link to="/"></Link>
//         <button onClick={() => {setAuth((prevState) => !prevState)}}>
//             Sign
//         </button>
//
//        <Routes>
//            {!isAuth ?
//                <>
//                    <Route path="" element={<></>} />
//                    <Route path="" element={<></>} />
//                </> :
//
//                <>
//
//
//                </>
//            }
//            <Route path="*" element={<></>}/>
//        </Routes>
//     </>
// }
//
//
// export default AuthPage;