import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const Signup = (props) => {

    const [formData, setFormData] = useState({
        'fullname': '',
        'email': '',
        'password': '',
        'confirmpassword': '',
    });

    const onChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = () => {
        if (!!formData.fullname && !!formData.email && !!formData.password && !!formData.confirmpassword) {
            if (formData.password === formData.confirmpassword) {
                console.log('formData', formData);
                // https://localhost:5000/api/v1/crimereport/newuser/create
                fetch("http://localhost:5000/api/v1/crimereport/newuser/create", {

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
                            props.history.push('/sign-in');
                            console.log(json);
                        } else {
                            alert(json.message);
                        }
                    });
            } else {
                alert('Password do not match try again');
            }
        } else {
            alert('Please fill all fields');
        }
    }

    return (
        <>
            <div class="bg-grey-200 min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-xl text-black w-full">
                        <h1 class="mb-8 text-3xl text-center text-indigo-600 font-bold">Sign Up</h1>
                        <input
                            type="text"
                            onChange={(e) => onChange(e)}
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name" />

                        <input
                            type="text"
                            onChange={(e) => onChange(e)}
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />

                        <input
                            type="password"
                            onChange={(e) => onChange(e)}
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        <input
                            type="password"
                            onChange={(e) => onChange(e)}
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirmpassword"
                            placeholder="Confirm Password" />

                        <button
                            onClick={() => handleSubmit()}
                            class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button>

                        <div class="text-center text-sm text-grey-dark mt-2">
                            By signing up, you agree to the
                            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and
                            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                &nbsp; Privacy Policy
                            </a>
                        </div>
                    </div>
                    <div class="text-grey-dark mt-6">
                        Already have an account?
                        <Link to='/sign-in'>
                            <a class="no-underline border-b border-blue text-blue" href="../login/">
                                &nbsp;<span className='text-indigo-600 font-bold'>Log in</span>
                            </a>.
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(Signup);
