


export default function GetByIdPage() {
    return (
        <div>
            <p>Search elements by ID: </p>
                <form class="w-full max-w-sm">
                <div class="flex items-center border-b border-teal-500 py-2" >
                  <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name"/>
                 <button class="border-indigo-100 border-4 p-8 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button" onclick="func()">
                   Search
                 </button>
                  <button class="border-indigo-100 border-4 p-8 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
                Cancel
              </button>
              </div>
              </form>
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
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                1
            </th>
            <td class="py-4 px-6">
                Monthly Plan
            </td>
            <td class="py-4 px-6">
                1 GB/per day
            </td>
            <td class="py-4 px-6">
                28
            </td>
           
        </tr>

    </tbody>
</table>
</div>

        </div>
    )
}