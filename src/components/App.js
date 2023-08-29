import './styles/Reset.css';
import AppStyle from './styles/App.module.css';
import {Route, Routes} from "react-router-dom";
import Navbar from "./utils/Navbar";
import Logging from "./modules/Logging";
import Registration from "./modules/Registration";
import HomePage from "./modules/HomePage";
import { FormProvider } from 'react-hook-form';

function App() {
  return (
      <>
    <FormProvider>
      <Navbar/>
          <div className={AppStyle.App}>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/auth">
                      <Route path="Logging" element={<Logging/>} />
                      <Route path="Registration" element={<Registration/>} />
                  </Route>
              </Routes>
          </div>
    </FormProvider>
      </>
  );
}

export default App;


// export default function App() {
//     const routes = useRoutes([
//         {
//             path: "/",
//             element: <HomePage />
//         },
//         {
//             path: "/login",
//             element: <LoginPage />
//         }
//     ]);
//     return routes;
// }


