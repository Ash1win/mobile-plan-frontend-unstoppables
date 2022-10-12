import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { toast, ToastContainer } from "react-toastify";

import logo from "../images/logoNew2.png"

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault()

    if(email === '' && password === ''){
      toast.error("Enter email and password!")
      return
    }else{
      if(email === ''){
        toast.error("Email can not be empty!")
        return
      }

      if(password === ''){
        toast.error("Password can not be empty!")
        return
      }
    }

    login(email, password).then((res) => {
      if(res.status === 200) {
        toast.success("login success")
        console.log("login success")
        res.json().then((data) => {
          console.log(data[0].email)
          localStorage.setItem('user', data[0].email)
          navigate("/")
        })
      }else {
        console.log("wrong username or password")
        toast.error("wrong username or password")
      }
    }).catch((err) => {
      console.log(err)
      console.log("login failure")
    })

    // localStorage.setItem('user', email)
    // navigate("/")
  }

  return (
    <section class="h-screen">
      <ToastContainer />
      <div class="container px-6 py-6 h-full">
        <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div class="md:w-8/12 lg:w-6/12 p-14 mb-12 md:mb-0">
            <img
              src="https://img.freepik.com/premium-vector/mobile-phone-notifications-vector-phone-icon-flat-style-with-notifications_471402-20.jpg?w=2000"
              class="w-full"
              alt="Phone image"
            />
          </div>
          <div class="md:w-8/12 lg:w-5/12 lg:ml-20">

          <div className="flex justify-center m-5">
              <img src={logo} className="h-20 w-48" />
            </div>

            <hr class="border-2 border-[#c3d7da] cursor-pointer mt-4 mb-6" />

            <form onSubmit={handleSubmit}>
              {/* <!-- Email input --> */}

              <div className="mb-6 text-4xl text-center text-[#336f7b] font-bold"
                style={{textShadow: "1px 1px 6px #cfe7e9"}}
              >
                  <h1>Sign In</h1>
              </div>

              {/* <hr class="border-2 border-[#c3d7da] cursor-pointer mt-4 mb-6" /> */}


              <div class="mb-6">
                <input
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="email@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* <!-- Password input --> */}
              <div class="mb-6">
                <input
                  type="password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* <!-- Submit button --> */}
              <button
                type="submit"
                class="inline-block px-7 py-3 bg-[#336f7b] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-[#c3d7da] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Sign in
              </button>
              <hr class="border-2 border-[#c3d7da] cursor-pointer mt-6 mb-6" />
              <button
                type="submit"
                class="inline-block px-7 py-3 bg-[#336f7b] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-[#c3d7da] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                onClick={() => navigate('/signup')}
              >
                create new account
              </button>

              <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
