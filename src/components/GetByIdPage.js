import { useState } from "react"
import { getPlanById } from "../services/fetchService"
import { toast } from "react-toastify"


export default function GetByIdPage() {

    const [id, setID] = useState('')
    const [plan, setPlan] = useState({})

    // Function to handle ID

    function handleId(e) {
        setID(e.target.value)
    }

    // Function to get data 

    function doGet() {
        console.log("called++++++++++++++++++++++++++")
        getPlanById(id).then((res) => {
            console.log(res)
            console.log(id)
            setPlan(res)
        }).catch((ex) => {
            console.log(ex)
            toast.error("id does not exist")
        })
    }

    // Function to reset data

    function doReset() {
        setID('')
        setPlan({})
    }

    return (
        <div>

            {/*Heading*/}

            <h3 class="text-center text-white text-lg pt-10"><b>Search Elements by ID</b></h3>
            <hr class="my-5 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <br>
            </br>

            {/*Input Filed*/}

            <div class="w-full max-w-sm">
                <div class="flex items-center border-b border-teal-500 py-2" >
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={handleId} value={id} />
                </div>

                <div class="grid gap-6 mb-6 md:grid-cols-2 pt-5">
                    <button onClick={doGet} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search</button>
                    <button onClick={doReset} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Reset</button>
                </div>
            </div>

            {/*Table To show mobile plan details of id given*/}

            <div class=" mt-20 overflow-x-auto relative shadow-md">

                <table class="w-full text-sm text-left text-gray-800 dark:text-gray-400 ">
                    <thead class="text-xs text-white bg-slate-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Sr.No
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            plan && <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {plan.id}
                                </th>
                                <td class="py-4 px-6">
                                    {plan.name}
                                </td>
                                <td class="py-4 px-6">
                                    {plan.description}
                                </td>
                                <td class="py-4 px-6">
                                    {plan.validity}
                                </td>

                            </tr>
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}