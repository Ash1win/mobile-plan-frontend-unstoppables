import { useEffect, useState } from "react"
import { createPlan, deletePlan, getAllPlans, getPlanById, updatePlan } from "../services/fetchService"
import { Navigate, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom"
import doUpdate from "./UpdatePage";
import Trash from "../icons/icons";
import { toast } from "react-toastify";


export default function ShowPlansPage() {

    const [mobilePlans, setMobilePlans] = useState([])

    // console.log(useLocation().pathname)

    
    function handleDelete(id){
        deletePlan(id).then((res) => {
            if(res == true) {
                toast.info("mobile plan deleted")
            }else {
                toast.error("connection error!")
            }
            getAllPlans().then((res) => {
                setMobilePlans(res);
            })
        })
        
    }

    function handleUpdate(plan){
        // console.log(JSON.stringify(plan));
        doUpdate(plan)
    }


    useEffect(() => {
        getAllPlans().then((res) => {
            setMobilePlans(res);
        })
        //createPlan(data).then((res) => console.log(res))
        //getPlanById(2).then((res) => console.log(res))
        // toast.success("toastify integrated successfully!")
        
    }, [])

    return (
        <div className="overflow-y-scroll m-10 mt-0 mb-32 scrollbar-width-5">
            <div class=" relative shadow-md sm:rounded-lg">

<table class="w-full text-sm text-left text-gray-800 dark:text-gray-400 ">
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
        { mobilePlans && mobilePlans.map((plan)=>{
            return (
                <tr class="bg-white dark:bg-gray-800">
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

            <td class="py-4 px-6">
            <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-1 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" 
                onClick={()=>handleUpdate(plan)
                }> <NavLink to={`/app/update/${plan.id}`}>Update</NavLink></button>
            </td>

            <td class="py-4 px-6">
                <button type="button" class="text-white bg-red-500 hover:bg-[#E02424]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-1 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" 
                    onClick={()=>{
                        handleDelete(plan.id)}
                    }>
                    <Trash class = "mr-2 -ml-1 w-4 h-4"  />
                    
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