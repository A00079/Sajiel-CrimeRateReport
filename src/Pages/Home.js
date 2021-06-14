import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

export default function Home(props) {
    const [profileData, setProfileData] = useState({});

    useEffect(() => {
        getUserProfileData();
    }, []);

    const getUserProfileData = () => {
        fetch("http://localhost:5000/api/v1/crimereport/userprofile/read", {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify({ email: sessionStorage.getItem('useremail') }),

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
                    // alert(json.message);
                    console.log(json.data);
                    setProfileData(json.data);
                } else {
                    alert(json.message);
                }
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <>
            <div class="w-full relative h-full shadow-2xl rounded my-0 overflow-hidden">
                <div class="top h-40 w-full bg-blue-600 overflow-hidden relative" >
                    <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" class="bg w-full h-full object-cover object-center absolute z-0" />
                    <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
                        <h1 class="text-4xl font-semibold">{!!profileData.name ? profileData.name : "Not Avaliable"}</h1>
                        <h4 class="text-sm font-semibold">{!!profileData.email ? profileData.email : "Not Avaliable"}</h4>
                    </div>
                </div>
                <div class="grid grid-cols-12 bg-white h-screen">
                    <div class="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">
                        <a href="#" class="text-sm p-2 bg-indigo-900 text-white text-center rounded font-bold">My Profile</a>
                        <Link to='/register-complain' class="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">
                            Register Complain
                        </Link>
                        <Link to='/view-crime-report' class="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">
                            View Crime Report
                        </Link>
                        <Link to='/jail-base-report' class="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">
                            Jail Base Data
                        </Link>
                        <Link to='/india-crime-score' class="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">
                            India Crime Score
                        </Link>
                    </div>
                    <div class="col-span-12 h-full md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
                        <div class="px-4 pt-4">
                            <form action="#" class="flex flex-col space-y-8">

                                <div>
                                    <h3 class="text-2xl font-semibold">My Profile</h3>
                                    <hr />
                                </div>
                                <div class="form-item">
                                    <label class="text-xl ">Full Name</label>
                                    <input type="text" value={!!profileData.name ? profileData.name : "Not Avaliable"} class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200" disabled />
                                </div>
                                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                                    <div class="form-item w-full">
                                        <label class="text-xl ">Email</label>
                                        <input type="text" value={!!profileData.email ? profileData.email : "Not Avaliable"} class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
