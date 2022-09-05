import { useState } from "react"
import { getPlanById } from "../services/fetchService"
import { useLocation } from "react-router-dom"



export default function GetByIdPage() {

    // console.log(useLocation().pathname)


    const[id, setID] = useState('')

    const[plan, setPlan] = useState({})

    function handleId(e){
        setID(e.target.value)
    }

    function doGet(){
        console.log("called++++++++++++++++++++++++++")
        getPlanById(id).then((res)=>{
            console.log(res)
            console.log(id)
            setPlan(res)
        }).catch((ex)=>{
            console.log(ex)
        })
    }

    function doReset(){
        setID('')
        setPlan({})
    }

    return (
        <div>
            <p>Search elements by ID: </p>
                <div class="w-full max-w-sm">
                <div class="flex items-center border-b border-teal-500 py-2" >
                  <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="number" placeholder="Jane Doe" aria-label="Full name"
                    onChange={handleId} value={id}/>

              <button onClick={doGet} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search</button>
              <button onClick={doReset} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Reset</button>
              </div>
              </div>
              <div class=" mt-20 overflow-x-auto relative shadow-md sm:rounded-lg">

<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            plan &&  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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