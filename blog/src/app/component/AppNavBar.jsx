"use client"
function getData() {
    return [
        {"id":1,"name":"Featured"},
        {"id":3,"name":"Tutorials"},
        {"id":4,"name":"Tips"},
        {"id":6,"name":"Insights"},
        {"id":9,"name":"Other"}
    ]
}

import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation'
const AppNavBar =  () => {
    let list =  getData();
    let current=usePathname();
    return (
        <div className="text-center border-b mb-16">
            <h1 className="font-heading tracking-tight text-4xl sm:text-4xl lg:text-4xl font-bold mb-24">
                Captain Binary
            </h1>
            <div className="flex -mx-4 w-full lg:w-auto flex-wrap items-bottom justify-center">

                <div className="px-4">
                    <Link
                        className={current==="/"? "inline-block px-2 sm:px-8 pb-8 leading-none font-semibold text-gray-900 sm:border-b-2 border-yellowGreen-500" : "inline-block px-2 pb-8 leading-none text-gray-500 hover:text-gray-900 sm:border-b-2 border-transparent hover:border-yellowGreen-500"}
                        href="/">All</Link>
                </div>

                {
                    list.map((item,i)=>{
                        return(
                            <div className="px-4">
                                <Link href={"/"+item['name']} className={current==="/"+item['name']? "inline-block px-2 sm:px-8 pb-8 leading-none font-semibold text-gray-900 sm:border-b-2 border-yellowGreen-500" : "inline-block px-2 pb-8 leading-none text-gray-500 hover:text-gray-900 sm:border-b-2 border-transparent hover:border-yellowGreen-500"}>
                                    {item['name']}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};
export default AppNavBar;