import React, { useEffect, useState } from 'react'

export default function Jailbase(props) {
    const [jailData, setJailData] = useState([]);
    useEffect(() => {
        getJailBaseData();
    }, []);

    const getJailBaseData = () => {
        fetch("https://jailbase-jailbase.p.rapidapi.com/sources/", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "5c10d64d7cmsha4d77b78530c2b7p1cebaejsnf091736797ab",
                "x-rapidapi-host": "jailbase-jailbase.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(data => setJailData(data.records))
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container py-8 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">JAIL BASE DATA</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                    </div>
                    <div class="w-full grid grid-cols-12">
                        {
                            jailData && jailData.length !== 0 ?
                                jailData.map((el, index) => {
                                    return (
                                        <div class="col-span-6 p-4 rounded-lg bg-white shadow-lg border border-gray-200 m-1">
                                            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                                <div class="flex-shrink-0 bg-gray-100 rounded-lg w-24 h-24 object-cover object-center sm:mb-0 mb-4">
                                                    <p className='text-center w-full mx-auto text-2xl font-bold text-gray-500 mt-6'>
                                                        {el.state}
                                                    </p>
                                                </div>
                                                <div class="flex-grow sm:pl-8">
                                                    <h2 class="title-font font-medium text-sm text-gray-900">{el.name}</h2>
                                                    <h3 class="text-indigo-500 mb-3 font-medium text-xs">{el.county}</h3>
                                                    <p class="mb-1 text-gray-500font-medium text-xs">City :- {el.city}</p>
                                                    <p class="text-gray-500 font-medium text-xs">Phone :- {el.phone}</p>
                                                    <p class="text-gray-500 font-medium text-xs">State :- {el.state_full}</p>
                                                    <p class="text-gray-500 mb-3 font-medium text-xs">Zipcode :- {el.zip_code}</p>
                                                    <a href={el.source_url} class="text-blue-500 font-medium text-xs">{el.source_url}</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : 'Loading'
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
