import logo2 from "../images/logo2.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import newLogo from "../images/logoNew2.png"

export default function NavigationBar() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [showAuditApp, setShowAuditApp] = useState(false)

  const location = useLocation()

  useEffect(() => {
    let user = localStorage.getItem("user");

    if (location.pathname === "/app") {
      setShowAuditApp(true)
  } else {
      setShowAuditApp(false)
  }

    if (user) {
      console.log("user is present");
      setEmail(user);
      console.log(user);
    } else {
      console.log("user is not present");
      navigate("/signin");
    }
  }, []);

  function logout() {
    localStorage.removeItem("user");
    navigate("/signin");
  }

  // window.onunload = function() {
  //   localStorage.removeItem("user");
  //   return '';
  // };

  return (
    <nav class="gradient-header border-gray-200 px-2 sm:px-4 dark:bg-gray-900">
      <div class="container flex flex-wrap justify-between items-center mx-auto pt-2">
        <div>
          <img src={newLogo} class="h-16 w-48 mb-2" alt="Mobile Plan" />
        </div>

        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex p-2 m-2">
            {/* <li>
                                <NavLink to="" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="app" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    View</NavLink>
                            </li>

                            <li>
                                <NavLink to="app/getbyid" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Find</NavLink>
                            </li> */}

            {/* <li className="text-blue-700 p-2 rounded">
              <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                <svg
                  class="absolute -left-1 w-12 h-12 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </li> */}
            <li>
              <div className="p-2 flex content-center mr-2" 
              style={{
                borderRadius: 50,
                backgroundColor: "rgba(255, 255, 255, 0.395)"
              }} 
              >
              <svg className=" w-8 h-8 text-white-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                <h2 className="ml-2 mt-1 text-black">{email}</h2>
              </div>
            </li>

            {showAuditApp && <li>
              <button
                className="text-white bg-[#336f7b] p-3 hover:ring hover:ring-blue-500 hover:ring-offset-0 border-white border-2"
                style={{
                  borderRadius: 12
                }}
                onClick={() => {
                  window.open("http://localhost:3001/app", "_self")
                }}
              >
                auditlog
              </button>
            </li>}
            <li>
              <button
                className="ml-3 text-white bg-[#336f7b] p-3 hover:ring hover:ring-blue-500 hover:ring-offset-0 border-white border-2"
                style={{
                  borderRadius: 12
                }}
                onClick={logout}
              >
                logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
