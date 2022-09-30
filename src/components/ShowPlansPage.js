import { useEffect, useMemo, useState } from "react"
import { deletePlan, getAllPlans } from "../services/fetchService"
import { NavLink } from "react-router-dom";
import doUpdate from "./UpdatePage";
import Trash from "../icons/icons";
import { toast } from "react-toastify";
import DeleteConfirmation from "./DeleteConfirmation";


export default function ShowPlansPage() {

    const [AllMobilePlans, setAllMobilePlans] = useState([])
    const [mobilePlans, setMobilePlans] = useState([])
    const [incr, setIncr] = useState(6)
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(6)
    const [chnge, setChnge] = useState(0)
    const [searchText, setSearchText] = useState('')

    //for delete box
    const [deleteId, setDeleteId] = useState(0)
    const [showDialogBox, setShowDialogBox] = useState(false)


    function handleHideDialogBox() {
        setShowDialogBox(false)
    }


    function handleShowDialogBox() {
        setShowDialogBox(false)
    }

    function doDelete(id) {
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

        setShowDialogBox(false)
    }

    function handleDelete(id) {

        setDeleteId(id)
        setShowDialogBox(true)


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

    function handleSearch(e) {
        setSearchText(e.target.value)
        // console.log(e.target.value)
    }

    function handleSearchClick(){
        console.log(searchText)

    }

    return (
        <div className="m-0 mt-0 mb-24">


            <DeleteConfirmation doDelete={doDelete} handleHideDialogBox={handleHideDialogBox} show={showDialogBox} deleteId={deleteId} />

            {/*Heading*/}

            <h3 class="text-center text-white text-lg "><b>All Plans </b></h3>
            

            <div>
                <div class="flex">
                    <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
                    <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg aria-hidden="true" class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                    <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            <li>
                                <button type="button" class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                            </li>
                            <li>
                                <button type="button" class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                            </li>
                            <li>
                                <button type="button" class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                            </li>
                            <li>
                                <button type="button" class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                            </li>
                        </ul>
                    </div>
                    <div class="relative w-full">
                        <input type="search" value={searchText} onChange={handleSearch} id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                         placeholder="Search for Mobile Plans by Id" />
                            <button type="submit" onClick={handleSearchClick} class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span class="sr-only">Search</span>
                            </button>
                            {/* style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(897px, 5637px, 0px);" */}
                    </div>
                </div>
            </div>


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