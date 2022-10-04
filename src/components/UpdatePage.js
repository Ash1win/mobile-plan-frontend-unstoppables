import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams, useSearchParams } from "react-router-dom"
import { toast } from "react-toastify"
import { updatePlan } from "../services/fetchService"


export default function UpdatePage() {


    const [id, setID] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [validity, setValidity] = useState('')

    const [id2, setID2] = useState('')
    const [name2, setName2] = useState('')
    const [description2, setDescription2] = useState('')
    const [validity2, setValidity2] = useState('')

    const navigate = useNavigate()

    let params = useParams()
    const [searchParams] = useSearchParams()
    console.log(searchParams.get('name'))
    console.log(searchParams.get('description'))
    console.log(searchParams.get('validity'))

    useEffect(() => {
        setID(params.id)
        setName(searchParams.get('name'))
        setDescription(searchParams.get('description'))
        setValidity(searchParams.get('validity'))
        console.log(name)

        setID2(params.id)
        setName2(searchParams.get('name'))
        setDescription2(searchParams.get('description'))
        setValidity2(searchParams.get('validity'))

    }, [])

    function doUpdate() {
        if(name===name2 && description===description2 && validity===validity2){
            toast.warn("Can not update! No changes in any field.")
            return;
        }

        if ((id != '' && name != '' && description != '' && validity != '')
            && (id != null && name != null && description != null && validity != null)) {
            updatePlan({
                "id": id,
                "name": name,
                "description": description,
                "validity": validity
            }).then((res) => {
                if (res) {
                    toast.success("Plan updated with id : "+id)
                    navigate("/app")
                } else {
                    toast.error("ID does not exist!")
                }
            })
        } else {
            console.log('+++++not validated++++++++')
            toast.error("All fileds are required!")
        }
    }

    // Function to handle ID

    function handleId(e) {
        setID(e.target.value)
    }

    // Function to handle Name

    function handleName(e) {
        setName(e.target.value)
    }

    //Function to handle Description

    function handleDescription(e) {
        setDescription(e.target.value)
    }

    //Function to handle validity

    function handleValidity(e) {
        setValidity(e.target.value)
    }

    //Function To reset the input fields

    function doReset() {
        //setID('')
        setDescription('')
        setName('')
        setValidity('')
    }


    return (

        <div className="w-full h-full pt-10 flex flex-col flex-wrap content-center">
            <form>
                <center>

                    {/*Heading*/}

                    <h3 class="text-white text-lg"><b>Update</b></h3>
                    <hr class="my-5 h-px bg-gray-200   border-0 dark:bg-gray-700"></hr>
                    <br>
                    </br>


                    {/*Update Form*/}

                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label for="ID" class="block mb-2 text-sm font-medium text-white  dark:text-gray-300">ID*</label>
                            <input type="number" disabled id="first_name" class="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={id} onChange={handleId}>
                            </input>
                        </div>
                        <div>
                            <label for="Name" class="block mb-2 text-sm font-medium text-white  dark:text-gray-300">Name*</label>
                            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={name} onChange={handleName}>
                            </input>
                        </div>
                    </div>

                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label for="Description" class="block mb-2 text-sm font-medium text-white  dark:text-gray-300">Description*</label>
                            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={description} onChange={handleDescription}>
                            </input>
                        </div>
                        <div>
                            <label for="Validity" class="block mb-2 text-sm font-medium text-white  dark:text-gray-300">Validity (in days)*</label>
                            <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={validity} onChange={handleValidity}>
                            </input>
                        </div>
                    </div>

                    <div class="block text-sm font-small text-white  dark:text-gray-300">
                        ( * indicates a required field )
                    </div>


                    <div class="mt-10">

                        <button type="button" class="text-white bg-blue-700 w-40 hover:bg-blue-800 mr-2 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            onClick={() => {
                                doUpdate()
                            }
                            }>Update</button>
                        <button type="button" class="text-white bg-blue-700 w-40 hover:bg-blue-800 ml-5 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            onClick={doReset}>Reset</button>

                    </div>
                </center>
            </form>
        </div>
    )
}