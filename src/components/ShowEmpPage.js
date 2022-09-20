import { useEffect, useMemo, useState } from "react"
//import { getAllPlans } from "../services/fetchService";


export default function ShowEmpPage() {

    const [AllMobilePlans, setAllMobilePlans] = useState([])
    const [mobilePlans, setMobilePlans] = useState([])
    const [incr, setIncr] = useState(3)
    const [startIndex, setStartIndex] = useState(0)
    const[endIndex, setEndIndex] = useState(3)


    
    useMemo(()=>{

        setMobilePlans(AllMobilePlans.slice(startIndex,endIndex))

    },[startIndex, endIndex])


    function increment(){
        if(startIndex+incr<AllMobilePlans.length){
            setStartIndex(startIndex + incr)
            setEndIndex(endIndex + incr)
        }
    }

    function decrement(){
        if(endIndex-incr>0){
            setStartIndex(startIndex-incr)
            setEndIndex(endIndex-incr)
        }
    }

    return (
        <div>

            <div className="w-120 mb-20">

                <h3 class="text-center text-white text-lg pt-1">Show Employee Data Here<b></b></h3>
                <center><hr class="w-54 my-2 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr></center>
                <div class="w-120 flexflex-shrink-0">
                <div className="w-120 flex justify-center">
                <button class="text-white p-1 bg-blue" onClick={decrement}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>


                <button class="text-white p-1 bg-blue" onClick={increment}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>



                    <table class="mt-5 table-fixed text-sm text-left text-gray-800 dark:text-gray-400 ">
                        <thead class="text-xs text-white bg-slate-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr class="w-120">
                                <th scope="col" class="w-12 py-3 px-6">
                                    ID
                                </th>
                                <th scope="col" class="w-12 py-3 px-6">
                                    Name
                                </th>
                                <th scope="col" class="w-12 py-3 px-6">
                                    Domain
                                </th>
                                <th scope="col" class="w-54 py-3 px-6">
                                    MobilePlan
                                </th>
                                <th scope="col" class="w-28 py-3 px-6">
                                    Description
                                </th>
                                <th scope="col" class="w-54 py-3 px-6">
                                    Valid till
                                </th>
                            </tr>
                        </thead>
                        <tbody>


                            <tr class="w-100 bg-white dark:bg-gray-800">
                                <th scope="row" class="w-10 py-3 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {"11007"}
                                </th>
                                <td class="w-28 py-3 px-6">
                                    {"Anurag"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"Developer"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"Hotstar Subcription"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"1 gb per day"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"2 days to go"}
                                    
                                </td>

                            </tr>

                            <tr class="w-100 bg-white dark:bg-gray-800">
                                <th scope="row" class="w-10 py-3 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {"11007"}
                                </th>
                                <td class="w-28 py-3 px-6">
                                    {"Anurag"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"Developer"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"Hotstar Subcription"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"1 gb per day"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"2 days to go"}
                                    
                                </td>

                            </tr>
                            <tr class="w-100 bg-white dark:bg-gray-800">
                                <th scope="row" class="w-10 py-3 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {"11007"}
                                </th>
                                <td class="w-28 py-3 px-6">
                                    {"Anurag"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"Developer"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"Hotstar Subcription"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"1 gb per day"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"2 days to go"}
                                    
                                </td>

                            </tr>
                            <tr class="w-100 bg-white dark:bg-gray-800">
                                <th scope="row" class="w-10 py-3 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {"11007"}
                                </th>
                                <td class="w-28 py-3 px-6">
                                    {"Anurag"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"Developer"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"Hotstar Subcription"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"1 gb per day"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"2 days to go"}
                                    
                                </td>

                            </tr>
                            <tr class="w-100 bg-white dark:bg-gray-800">
                                <th scope="row" class="w-10 py-3 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {"11007"}
                                </th>
                                <td class="w-28 py-3 px-6">
                                    {"Anurag"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"Developer"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"Hotstar Subcription"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"1 gb per day"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"2 days to go"}
                                    
                                </td>

                            </tr>
                            <tr class="w-100 bg-white dark:bg-gray-800">
                                <th scope="row" class="w-10 py-3 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {"11007"}
                                </th>
                                <td class="w-28 py-3 px-6">
                                    {"Anurag"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"Developer"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"Hotstar Subcription"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"1 gb per day"}
                                </td>
                                <td class="w-28 py-3 px-6">
                                    {"2 days to go"}
                                    
                                </td>

                            </tr>
                           


                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    )
}