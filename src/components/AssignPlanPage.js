
export default function AssignPlanPage() {

    return (
        <div>
            <h3 class="text-center text-white text-lg m-0 "><b>Assign Plan </b></h3>
            <hr class="my-5 h-px bg-gray-200 m-0 mt-2 border-0 dark:bg-gray-700"></hr>

            <div class="flex flex-row">
                <div >
                    <img class="w-24 h-24 ml-48 rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc4gAuboBQ2Y-6kl84wtIoK8e18cFsmxvIag&usqp=CAU" alt="User Avatar" />

                </div>

                <div >
                    <h3 class=" text-white text-m  mt-1 ml-10"><b>Shrineeta Kurud </b></h3>
                    <h3 class=" text-white text-m ml-10 "><b>Employee ID : E-12345</b> </h3>
                    <h3 class=" text-white text-m ml-10  "><b>Domain : Software Developer </b></h3>

                </div>
            </div>

            <div className="m-0 mt-3 ">
                <div class=" relative sm:rounded-lg">
                    <div className="flex w-120 justify-center">
                        <button class="text-white bg-blue" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>


                        <button class="text-white  bg-blue" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <table class="w-120 text-sm text-left text-gray-800 mt-3 dark:text-gray-400 ">
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
                            <td class="py-3 px-6">
                            </td>
                        </tr>
                    </thead>

                    <tbody>

                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                1001
                            </th>
                            <td class="py-1 px-6">
                                Yearly Pack
                            </td>
                            <td class="py-1 px-6">
                                2 GB/day with hotstar subscription
                            </td>
                            <td class="py-1 px-6">
                                365 days
                            </td>
                            <td class="py-1 px-6">
                                <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-1 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> Select </button>
                            </td>
                        </tr>


                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                1002
                            </th>
                            <td class="py-1 px-6">
                                Monthly Pack
                            </td>
                            <td class="py-1 px-6">
                                1 GB/day
                            </td>
                            <td class="py-1 px-6">
                                28 days
                            </td>
                            <td class="py-1 px-6">
                                <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-1 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> Select </button>
                            </td>
                        </tr>

                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                1003
                            </th>
                            <td class="py-1 px-6">
                                Yearly Pack
                            </td>
                            <td class="py-1 px-6">
                                200 GB
                            </td>
                            <td class="py-1 px-6">
                                365 days
                            </td>
                            <td class="py-1 px-6">
                                <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-1 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> Select </button>
                            </td>
                        </tr>

                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                1004
                            </th>
                            <td class="py-1 px-6">
                                Monthly Pack
                            </td>
                            <td class="py-1 px-6">
                                Netflix & Hotstar subscription
                            </td>
                            <td class="py-1 px-6">
                                28 days
                            </td>
                            <td class="py-1 px-6">
                                <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-1 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> Select </button>
                            </td>
                        </tr>

                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                1005
                            </th>
                            <td class="py-1 px-6">
                                Yearly Pack
                            </td>
                            <td class="py-1 px-6">
                                200 GB with Netflix subscription
                            </td>
                            <td class="py-1 px-6">
                                365 days
                            </td>
                            <td class="py-1 px-6">
                                <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-1 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> Select </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>



    )
}