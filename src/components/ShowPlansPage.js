import { useEffect, useMemo, useState } from "react"
import { deletePlan, getAllPlans } from "../services/fetchService"
import { NavLink } from "react-router-dom";
import doUpdate from "./UpdatePage";
import Trash from "../icons/icons";
import { toast } from "react-toastify";


export default function ShowPlansPage() {

    const [AllMobilePlans, setAllMobilePlans] = useState([])
    const [mobilePlans, setMobilePlans] = useState([])
    const [incr, setIncr] = useState(6)
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(6)
    const [chnge, setChnge] = useState(0)

    function handleDelete(id) {
        deletePlan(id).then((res) => {
            if (res == true) {
                toast.info("mobile plan deleted")

                getAllPlans().then((res) => {
                    setAllMobilePlans(res.reverse())
                    setMobilePlans(AllMobilePlans.slice(startIndex, endIndex))
                    setChnge(chnge + 1)

                })
            } else {
                toast.error("connection error!")
            }

        })

    }

    function handleUpdate(plan) {
        doUpdate(plan)
    }


    useEffect(() => {
        getAllPlans().then((res) => {
            setAllMobilePlans(res.reverse());
            setMobilePlans(res.slice(startIndex, endIndex))
        })

    }, [])

    useMemo(() => {

        setMobilePlans(AllMobilePlans.slice(startIndex, endIndex))

    }, [startIndex, endIndex, chnge])

    // Function to increment
    
    function increment() {
        if (startIndex + incr < AllMobilePlans.length) {
            setStartIndex(startIndex + incr)
            setEndIndex(endIndex + incr)
        }
    }

    // Function to decrement 

    function decrement() {
        if (endIndex - incr > 0) {
            setStartIndex(startIndex - incr)
            setEndIndex(endIndex - incr)
        }
    }

    return (
        <div className="m-0 mt-0 mb-24">

            {/*Heading*/}

            <h3 class="text-center text-white text-lg "><b>All Plans </b></h3>
            <hr class="my-2 w-50 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div class=" relative sm:rounded-lg">

                <div className="flex w-120 justify-center mb-2">

                    {/*Increment Decrement Buttons for table*/}

                    <button class="text-white p-2 bg-blue" onClick={decrement}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>


                    <button class="text-white p-2 bg-blue" onClick={increment}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>

                {/*Table to show Mobile Plan Details*/}

                <table class="w-120 text-sm text-left text-gray-800 dark:text-gray-400 ">
                    <thead class="text-xs text-white bg-slate-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Plan No.
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Description
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Validity
                            </th>
                            <td class="py-4 px-6">

                            </td>
                            <td class="py-4 px-6">

                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {mobilePlans && mobilePlans.map((plan) => {
                            return (
                                <tr class="bg-white dark:bg-gray-800">
                                    <th scope="row" class="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {plan.id}
                                    </th>
                                    <td class="py-2 px-6">
                                        {plan.name}
                                    </td>
                                    <td class="py-2 px-6">
                                        {plan.description}
                                    </td>
                                    <td class="py-2 px-6">
                                        {plan.validity}
                                    </td>

                                    <td class="py-2 px-6">
                                        <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-1 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                                            onClick={() => handleUpdate(plan)
                                            }> <NavLink to={`/app/update/${plan.id}?name=${plan.name}&description=${plan.description}&validity=${plan.validity}`}>Update</NavLink></button>
                                    </td>

                                    <td class="py-2 px-6">
                                        <button type="button" class="text-white bg-red-500 hover:bg-[#E02424]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-1 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                            onClick={() => {
                                                handleDelete(plan.id)
                                            }
                                            }>
                                            <Trash class="mr-2 -ml-1 w-2 h-2" />

                                        </button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>


        </div>
    )
}