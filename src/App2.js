import { Route, Routes } from "react-router-dom";
import UpdatePage from "./components/UpdatePage";
import CreatePage from "./components/CreatePage";
import ShowPlansPage from "./components/ShowPlansPage";
import GetByIdPage from "./components/GetByIdPage";
import App from "./App";
import App3 from "./App3";
import LoginPage from "./components/loginPage";
import SignUpPage from "./components/signUpPage";

export default function App2() {
    return (
        <div>
            <Routes>
                <Route path="" element={<App3 />}/>
                <Route path="/signin" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/app" element={<App />}>
                <Route path="create" element={<CreatePage />} />
                        <Route path="update" element={<UpdatePage />} />
                        <Route path="update/:id" element={<UpdatePage />} />
                        <Route index element={<ShowPlansPage />} />
                        <Route path="getbyid" element={<GetByIdPage />} />
                </Route>
            </Routes>
        </div>
    )
}