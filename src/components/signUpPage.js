import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { register } from "../services/authService";

import logo from "../images/logoNew2.png"

export default function SignUpPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConf, setPassConf] = useState("");

  const [emailErr, setEmailErr] = useState(false)
  const [passErr, setPassErr] = useState(false)
  const [passConfErr, setPassConfErr] = useState(false)


  function handleSubmit(e) {
    e.preventDefault();

    if(pass === '' || passConf === '' || email === '') {
      toast.error("all fields are required")
      return;
    }

    if(pass === passConf) {
      register(email, pass).then((res) => {
        if(res.status === 403) {
          toast.error("email already exists")
        }
        res.json().then((user) => {
          console.log(user)
          toast.success("registration successfull!")
        })
      })
    }else {
      toast.error("password should be same in both fields")
    }
  }

  function ValidateEmail(mail) {
    let reg = /^([a-zA-Z0-9\._])+@([a-zA-Z0-9])+\.([a-z]+)\.?([a-z]+)?$/
    return mail.match(reg)

  }

  function validatePassword(password) {
    let reg = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).{8,}/

    return password.match(reg)
  }

  function handlePassword(e) {
    setPass(e.target.value)
    // console.log(e.target.value)
    if(!validatePassword(e.target.value) && e.target.value != '') {
      setTimeout(() => setPassErr(true), 1000)
    }else {
      setTimeout(() => setPassErr(false), 1000)
    }
  }

  function handleEmail(e) {
    setEmail(e.target.value)
    if(!ValidateEmail(e.target.value) && e.target.value != '') {
      setTimeout(() => setEmailErr(true), 1000) 
    }else {
      setTimeout(() => setEmailErr(false), 1000)
    }
  }

  function handlePassConf(e) {
    setPassConf(e.target.value)
    // console.log(passConf+" :: "+pass)
    if(e.target.value != '') {
      if(pass === e.target.value) {
        setTimeout(() => setPassConfErr(false), 1000)
        
      }else {
        setTimeout(() => setPassConfErr(true), 1000)
        
      }
    }else {
      setTimeout(() => setPassConfErr(false), 1000)
    }
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

            <div className="mb-6 text-4xl text-center text-[#336f7b] font-bold"
                style={{textShadow: "1px 1px 6px #cfe7e9"}}
              >
                  <h1>Sign Up</h1>
              </div>

              {/* <hr class="border-2 border-[#c3d7da] cursor-pointer mt-4 mb-6" /> */}

              {/* <!-- Email input --> */}
              <div class="mb-6">
                <input
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="user@example.com"
                  onChange={handleEmail}
                />
              </div>
              { emailErr && <div className="mb-4 pl-2 text-red-500">
                <p className="font-bold">invalid email</p>
              </div>}

              {/* <!-- Password input --> */}
              <div class="mb-2">
                <input
                  type="password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  onChange={handlePassword}
                />
              </div>
              { passErr && <div className="mb-4 pl-2 text-red-500">
                <p className="font-bold">password must contain :</p>
                  <ul className="list-disc list-inside pl-4">
                    <li>atleast one lower case letter</li>
                    <li>atleast one upper case letter</li>
                    <li>atleast one number</li>
                    <li>minimum 8 characters</li>
                    <li>one special character</li>
                  </ul>
              </div>}
              <div class="mb-6">
                <input
                  type="password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="confirm Password"
                  onChange={handlePassConf}
                />
              </div>
              { passConfErr && <div className="mb-4 pl-2 text-red-500">
                <p className="font-bold">password must be same</p>
                </div>
              }

              {/* <!-- Submit button --> */}
              <button
                type="submit"
                class="inline-block px-7 py-3 bg-[#336f7b] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-[#c3d7da] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Register
              </button>
              <hr class="border-2 border-[#c3d7da] cursor-pointer mt-6" />
              <button
                type="submit"
                class="inline-block mt-6 px-7 py-3 bg-[#336f7b] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-[#c3d7da] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                onClick={() => navigate("/signin")}
              >
                go to login
              </button>

              <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
