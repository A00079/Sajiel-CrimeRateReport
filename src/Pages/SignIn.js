import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const Signin = (props) => {

    const [formData, setFormData] = useState({
        'email': '',
        'password': '',
    });

    const onChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSignin = () => {
        if (!!formData.email && !!formData.password) {
            console.log('formData', formData);
            fetch("http://localhost:5000/api/v1/crimereport/user/signin", {

                // Adding method type
                method: "POST",

                // Adding body or contents to send
                body: JSON.stringify(formData),

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
                        sessionStorage.setItem("useremail", formData.email);
                        props.history.push('/home');
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
            <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div class="max-w-md w-full space-y-8">
                    <div>
                        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                        <h2 class="text-center text-3xl font-extrabold text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>
                    <input type="hidden" name="remember" value="true" />
                    <div class="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label for="email-address" class="sr-only">Email address</label>

                            <input id="email-address" onChange={(e) => onChange(e)} name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div>
                            <label for="password" class="sr-only">Password</label>
                            <input id="password" onChange={(e) => onChange(e)} name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>

                    <div class="flex items-center justify-center w-full mx-auto">
                        <div>
                            <button onClick={() => handleSignin()} class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Sign in
                            </button>
                        </div>
                    </div>
                    <div class="text-grey-dark mt-6">
                        Not have an account?
                        <Link to='/sign-up'>
                            <a class="no-underline border-b border-blue text-blue" href="../login/">
                                &nbsp;<span className='text-indigo-600 font-bold'>Sign Up</span>
                            </a>.
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(Signin);
