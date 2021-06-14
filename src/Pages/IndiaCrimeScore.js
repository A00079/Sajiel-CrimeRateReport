import React, { useEffect, useState } from 'react';
import { data } from '../assets/data.js';

export default function Indiacrimescore(props) {

    const [crimeData, setCrimeData] = useState([]);
    useEffect(() => {
        getIndianCrimeData();
    }, []);

    const getIndianCrimeData = () => {
        setCrimeData(data.results);
    }

    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container py-8 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">INDIA CRIME SCORE</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                    </div>
                    <div class="w-full grid grid-cols-12">
                        {
                            crimeData && crimeData.length !== 0 ?
                                crimeData.map((el, index) => {
                                    return (
                                        <div class="col-span-6 p-4 rounded-lg bg-white shadow-lg border border-gray-200 m-1">
                                            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                                <div class="flex-shrink-0 bg-gray-100 rounded-lg w-24 h-24 object-cover object-center sm:mb-0 mb-4">
                                                    <p className='text-center w-full mx-auto text-2xl font-bold text-gray-500 mt-6'>
                                                        {el.state}
                                                    </p>
                                                </div>
                                                <div class="flex-grow sm:pl-8 ">
                                                    <h2 class="title-font font-medium text-sm text-gray-900">{el.publisher}</h2>
                                                    <h3 class="text-indigo-500 mb-3 font-medium text-xs capitalize">{el.place}</h3>
                                                    <p class="mb-1 text-gray-500font-medium text-xs">Site :- {el.site}</p>
                                                    <p class="text-gray-500 font-medium text-xs">Digital :- {el.digital}</p>
                                                    <p class="text-gray-500 font-medium text-xs">Submitter :- {el.submitter}</p>
                                                    <p class="text-gray-500 font-medium text-xs">TimeStamp :- {new Date(el.timestamp).toDateString()}</p>
                                                    <p class="text-gray-500 mb-3 font-medium text-xs">Year:- {el.year}</p>
                                                    <div className='w-full break-all'>
                                                        <a href={el.url} class="text-blue-500 font-medium text-xs w-10">{el.url}</a>
                                                    </div>
                                                    <p class="text-gray-500 mt-3 font-medium text-xs">Score:- {el.score} %</p>
                                                    <div class="shadow w-full bg-grey-300 mt-2">
                                                        <div class="bg-red-500 text-xs leading-none py-1 text-center text-white" style={{ width: el.score + '%' }}></div>
                                                    </div>
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
