import React from "react";

export default function DeleteConfirmation({show, deleteId, handleHideDialogBox, doDelete}){

    console.log(show+"--"+deleteId)

    return(

        <div>
        {show && <div className="deletebox">
            <div className="bg-white p-4 rounded-lg flex flex-col justify-center align-center shadow-lg">
                <h1>Are you sure you want to delete Mobile Plan with ID : {deleteId} !</h1>
                <div className="flex justify-center">
                    <button onClick={()=>doDelete(deleteId)} className="m-3 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 border border-red-700 rounded">Confirm</button>
                    <button onClick={()=>handleHideDialogBox()} className="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 border border-blue-700 rounded">Cancel</button>
                </div>
            </div>
        </div>}
        </div>
    );
} 