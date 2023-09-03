import React from 'react';
import HomeHero from "@/app/component/HomeHero";
import Featured from "@/app/component/Featured";
import Latest from "@/app/component/Latest";
import NewsLetter from "@/app/component/NewsLetter";
import AppNavBar from "@/app/component/AppNavBar";


const Page = () => {
    return (
        <div>
            <AppNavBar/>
            <HomeHero/>
            <Latest/>
            <Featured/>
        </div>
    );
};

export default Page;