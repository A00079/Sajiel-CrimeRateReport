import React, { useState } from 'react'
import { withRouter } from "react-router";

const Registercomplain = (props) => {
    const [formData, setFormData] = useState({
        'name': '',
        'policestation': '',
        'crimeaddress': '',
        'crimeoccuredarea': '',
    });

    const onChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = () => {
        if (!!formData.name && !!formData.policestation && !!formData.crimeaddress && !!formData.crimeoccuredarea) {
            console.log('formData', formData);
            fetch("http://localhost:5000/api/v1/crimereport/registercomplain/post", {

                // Adding method type
                method: "POST",

                // Adding body or contents to send
                body: JSON.stringify({ data: formData }),

                // Adding headers to the request
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                // Converting to JSON
                .then(response => response.json())

                // Displaying results to console
                .then(json => {
                    if (json.success) {
                        alert(json.message);
                        props.history.push('/view-crime-report')
                        console.log(json);
                    } else {
                        alert(json.message);
                    }
                });
        } else {
            alert('Please fill all fields');
        }
    }
    return (
        <>
            <div class="flex h-screen bg-gray-200 items-center justify-center">
                <div class="grid bg-white rounded-lg shadow-xl w-full sm:w-96">
                    <div class="flex justify-center py-4">
                        <div class="flex bg-purple-200 rounded-full md:p-4 p-2 border-2 border-purple-300">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                        </div>
                    </div>

                    <div class="flex justify-center">
                        <div class="flex">
                            <h1 class="text-gray-600 font-bold md:text-2xl text-xl">Register Complain</h1>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 mt-5 mx-7">
                        <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Name</label>
                        <input name="name" onChange={(e) => onChange(e)} class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Name" />
                    </div>
                    <div class="grid grid-cols-1 mt-5 mx-7">
                        <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Police Station</label>
                        <select onChange={(e) => onChange(e)} name="policestation" class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                            <option value="Sai Nath Nagar">Sai Nath Nagar</option>
                            <option value="Chandansar">Chandansar</option>
                            <option value="Manvel Pada">Manvel Pada</option>
                            <option value="Virar West">Virar West</option>
                            <option value="Bolinj">Bolinj</option>
                        </select>
                    </div>

                    <div class="grid grid-cols-1 mx-7">
                        <div class="grid grid-cols-1 mt-5">
                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Crime Address</label>
                            <input onChange={(e) => onChange(e)} name="crimeaddress" class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Crime Address" />
                        </div>
                        <div class="grid grid-cols-1 mt-5">
                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Crime Occured Area</label>
                            <input onChange={(e) => onChange(e)} name="crimeoccuredarea" class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Crime Occured Area" />
                        </div>
                    </div>
                    <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                        <button onClick={() => handleSubmit()} class='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(Registercomplain);
