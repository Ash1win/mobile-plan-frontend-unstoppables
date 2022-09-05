import { Navigate, Route, Routes } from "react-router-dom";
import CreatePage from "./components/CreatePage";
import GetByIdPage from "./components/GetByIdPage";
import ShowPlansPage from "./components/ShowPlansPage";
import UpdatePage from "./components/UpdatePage";
import { NavLink } from "react-router-dom";


export default function App() {

    let activeClassName = "text-white bg-blue-700"
    let isActive = false

  return (
    <div>
            {/* heading */}
            <nav class="bg-slate-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="#" class="flex items-center">
                        <span class="self-center text-xl font-semibold whitespace-nowrap">Mobile Plan</span>
                    </a>
                </div>
            </nav>
            <div className="w-100 h-screen flex bg-violet-400" >
                {/* side navigation bar */}
                <div className="w-1/4 h-full text-sm font-medium py-10 px-4 bg-white">
                    {/* <div class="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <button aria-current="true" type="button" class="py-2 px-4 w-full font-medium text-left rounded-t-lg border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                            <NavLink to="">show</NavLink>
                        </button>
                        <button aria-current="true" type="button" class="py-2 px-4 w-full font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                            <NavLink to="create">create</NavLink>
                        </button>
                        <button type="button" class="py-2 px-4 w-full font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                            <NavLink to="update">update</NavLink>
                        </button>
                        <button type="button" class="py-2 px-4 w-full font-medium text-left rounded-b-lg border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                            <NavLink to="getbyid">find</NavLink>
                        </button>
                    </div> */}
                    
                    <div className="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <NavLink to="" aria-current="true" className={({ isActive }) => isActive ? "block py-2 px-4 w-full text-white bg-blue-700 rounded-t-lg border-b border-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-600" : "block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"}>
                            show
                        </NavLink>
                        <NavLink to="create" className={({ isActive }) => isActive ? "block py-2 px-4 w-full text-white bg-blue-700  border-b border-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-600" : "block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"}>
                            create
                        </NavLink>
                        <NavLink to="update" className={({ isActive }) => isActive ? "block py-2 px-4 w-full text-white bg-blue-700 border-b border-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-600" : "block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"}>
                            update
                        </NavLink>
                        <NavLink to="getbyid" className={({ isActive }) => isActive ? "block py-2 px-4 w-full text-white bg-blue-700 rounded-b-lg border-b border-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-600" : "block py-2 px-4 w-full border-b border-gray-200 cursor-pointer rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"}>
                            find
                        </NavLink>
                    </div>


                </div>
                {/* main area */}
                <div className="w-3/4 h-full pt-10 flex flex-col flex-wrap content-center bg-slate-400">
                    <Routes>
                        <Route path="create" element={<CreatePage />} />
                        <Route path="update" element={<UpdatePage />} />
                        <Route path="update/:id" element={<UpdatePage />} />
                        <Route index element={<ShowPlansPage />} />
                        <Route path="getbyid" element={<GetByIdPage />} />
                    </Routes>
                </div>
            </div>
      </div>
  )
}