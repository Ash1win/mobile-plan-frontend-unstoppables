import { useState } from "react"
import { createPlan } from "../services/fetchService"
import { toast } from "react-toastify"


export default function CreatePage() {

    const [activeLink, setActiveLink] = useState("/")
    const [id, setID] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [validity, setValidity] = useState('')

    // Function to handle Id

    function handleId(e) {
        setID(e.target.value)
    }

    //Function to handle Name

    function handleName(e) {
        setName(e.target.value)
    }

    // Function to handle Description

    function handleDescription(e) {
        setDescription(e.target.value)
    }

    //Function to handle Validity

    function handleValidity(e) {
        setValidity(e.target.value)
    }

    //Function to reset data

    function doReset() {
        setID('')
        setDescription('')
        setName('')
        setValidity('')
    }

    //Function to Create Mobile Plan

    function doCreate() {
        if (name != '' && description != '' && validity != '') {
            createPlan({
                "id": id,
                "name": name,
                "description": description,
                "validity": validity
            }).then((res) => {
                console.log(res)
                if (res) {
                    toast.success("mobile plan created with Id : " + res.id)
                    doReset()
                }
            })
        } else {
            console.log("+++++Not Created+++++++")
            toast.error("all fields are required")
        }
    }


    return (
        <div>

            <div className="w-full h-full pt-2 flex flex-col flex-wrap content-center">

                {/*Heading*/}

                <h3 class="text-center text-white text-lg "><b>Create </b></h3>
                <hr class="my-5 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>

                {/*Input Form*/}

                <div class="grid gap-6 mb-6 md:grid-cols-1  pt-15">

                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-white  dark:text-gray-300 pt-5">Name*</label>
                        <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Enter the name" required=""
                            value={name} onChange={handleName}>
                        </input>
                    </div>

                    <div>
                        <label for="description" class="block mb-2 text-sm font-medium text-white dark:text-gray-300">Description*</label>
                        <input type="text" id="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter description" required=""
                            value={description} onChange={handleDescription}>
                        </input>
                    </div>

                    <div>
                        <label for="validity" class="block mb-2 text-sm font-medium text-white  dark:text-gray-300">Validity (in days)*</label>
                        <input type="number" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter validity" required=""
                            value={validity} onChange={handleValidity}>
                        </input>
                    </div>

                    <div class="block text-sm font-small text-white  dark:text-gray-300">
                        ( * indicates a required field )
                    </div>

                    <div class="grid gap-6 mb-6 md:grid-cols-2 pt-3">

                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => {
                                doCreate()
                            }}>Submit</button>
                        <button type="cancle" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={doReset}>
                            Reset

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}