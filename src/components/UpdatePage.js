import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import App from "../App"
import { getPlanById, updatePlan } from "../services/fetchService"
import { getAllPlans } from "../services/fetchService"


export default function UpdatePage() {

    
    const[id, setID] = useState('')
    const[name, setName] = useState('')
    const[description, setDescription] = useState('')
    const[validity, setValidity] = useState('')

    let params = useParams()
    useEffect(()=>{
        console.log(params.id)
        if(params.id){
            getPlanById(params.id).then((res)=>{
                setID(res.id)
                setName(res.name)
                setDescription(res.description)
                setValidity(res.validity)
            })
        }
    },[])

    function doUpdate(){
        if(id!='' && name!='' && description!='' && validity!=''){
            updatePlan({
                "id": id,
                "name": name,
                "description": description,
                "validity": validity
            }).then((res)=>console.log(res))
        }else{
            console.log('+++++not validated++++++++')
        }
    }

    function handleId(e){
        setID(e.target.value)
    }

    function handleName(e){
        setName(e.target.value)
    }

    function handleDescription(e){
        setDescription(e.target.value)
    }

    function handleValidity(e){
        setValidity(e.target.value)
    }

    function doReset(){
        setID('')
        setDescription('')
        setName('')
        setValidity('')
    }

    // eslint-disable-next-line no-lone-blocks
        return (
            <div className="w-3/4 h-full pt-10 flex flex-col flex-wrap content-center bg-slate-400">
                    <form>
                    <center>
                        <h3><b>Update</b></h3>
                        <hr class="my-5 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        <br>
                        </br>

                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label for="ID" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">ID</label>
                                <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={id} onChange={handleId}>
                                </input>
                            </div>
                            <div>
                                <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={name} onChange={handleName}>
                                </input>
                            </div>
                        </div>

                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label for="Description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={description} onChange={handleDescription}>
                                </input>
                            </div>
                            <div>
                                <label for="Validity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Validity</label>
                                <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={validity} onChange={handleValidity}>
                                </input>
                            </div>
                        </div>

                        <div>
                        
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            onClick={()=>{
                                doUpdate()}
                            }>Update</button>
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            onClick={doReset}>Reset</button>
                
                        </div>
                        </center>
                    </form>
                    </div>
                )
}