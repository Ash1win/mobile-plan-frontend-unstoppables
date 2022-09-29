import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import CreatePage from "./components/CreatePage";
import GetByIdPage from "./components/GetByIdPage";
import ShowPlansPage from "./components/ShowPlansPage";
import UpdatePage from "./components/UpdatePage";
import { NavLink } from "react-router-dom";
import hansenlogo from "./images/hansen-primary-logo-normal.png"
import logo2 from "./images/logo2.png"
import Create from "./icons/create";
import Search from "./icons/find";
import Home from "./icons/home";
import Show from "./icons/show";
import Update from "./icons/update";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function App() {

    let activeClassName = "text-white bg-blue-700"
    let isActive = false
    const location = useLocation()

    const [isShowActive, setIsShowActive] = useState(false)

    useEffect(() => {
        if (location.pathname == "/app") {
            setIsShowActive(true)
        } else {
            setIsShowActive(false)
        }
    }, [location])


    return (
        <div>
            {/* heading */}
            <nav class="bg-white  border-b border-slate-300 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <div href="#" class="flex items-center p-2 mt-0 ml-0">
                        <div>
                            {/* logo */}
                            <img src={logo2} class="h-14 w-56" alt="Mobile Plan" />
                        </div>
                    </div>
                </div>
            </nav>



            <div className="border-b border-slate-300 w-100 h-screen flex bg-violet-400" >

                {/* side navigation bar */}
                <div className="w-1/4 h-full text-sm font-medium py-10 px-4 bg-white">


                    <div className="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <a href="http://localhost:3000/" aria-current="true" className="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white inline-flex ">

                            <span class="pr-6">
                                <Home class="mr-2 -ml-1 w-4 h-4" />
                            </span>
                            Home
                        </a>
                        <NavLink to="" className={isShowActive ? "block py-2 px-4 w-full text-white bg-blue-700  border-b border-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-600 inline-flex" : "block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white inline-flex"} >
                            <span class="pr-6">
                                <Show class="mr-2 -ml-1 w-4 h-4" />
                            </span>
                            View
                        </NavLink>
                        
                        <NavLink to="create" className={({ isActive }) => isActive ? "block py-2 px-4 w-full text-white bg-blue-700  border-b border-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-600 inline-flex" : "block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white inline-flex"}>

                            <span class="pr-6">
                                <Create class="mr-2 -ml-1 w-4 h-4" />
                            </span>
                            Create
                        </NavLink>

                        {/* <NavLink to="update" className={({ isActive }) => isActive ? "block py-2 px-4 w-full text-white bg-blue-700 border-b border-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-600 inline-flex" : "block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white inline-flex"}>

                            <span class="pr-6">
                                <Update class="mr-2 -ml-1 w-4 h-4" />
                            </span>
                            Update
                        </NavLink> */}

                        <NavLink to="getbyid" className={({ isActive }) => isActive ? "block py-2 px-4 w-full text-white bg-blue-700 rounded-b-lg border-b border-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-600 inline-flex " : "block py-2 px-4 w-full border-b border-gray-200 cursor-pointer rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white inline-flex"}>

                            <span class="pr-6">
                                <Search class="mr-2 -ml-1 w-4 h-4" />
                            </span>
                            Find
                        </NavLink>
                    </div>
                </div>
                
                {/* main area */}
                <div className="bg-[url('./images/bg4.png')]  bg-cover w-3/4 h-full pt-5 flex flex-col flex-wrap content-center bg-slate-400">
                    <Routes>
                        <Route path="create" element={<CreatePage />} />
                        <Route path="update" element={<UpdatePage />} />
                        <Route path="update/:id" element={<UpdatePage />} />
                        <Route index element={<ShowPlansPage />} />
                        <Route path="getbyid" element={<GetByIdPage />} />
                    </Routes>
                </div>
                <ToastContainer />
            </div>

            {/* footer */}
            <footer class="px-4 text-white bg-white">

                <div class="pt-1 mt-5 text-center text-gray-500">
                    © 2022 Hansen Technologies. All rights reserved.
                </div>

                <div class="pt-2 pb-4 pt-4 mt-2 text-center text-gray-600">
                    Created By Team  <span className="font-bold">UNSTOPPABLES</span>
                </div>
            </footer>
        </div>
    )
}