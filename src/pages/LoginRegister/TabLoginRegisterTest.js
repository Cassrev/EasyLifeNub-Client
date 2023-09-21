import { useRef, useState } from "react"
import { Tabs, Flowbite } from 'flowbite-react';
import { HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { Typography } from "@material-tailwind/react";
import { Register } from "./Register";
import { Login } from "./Login";


export const TabLoginRegisterTest = ({ setToken }) => {
    const [activeTab, setActiveTab] = useState(null);
    const tabsRef = useRef([]);
    const props = { setActiveTab, tabsRef };

    return (
        <><section className="h-screen w-screen flex text-center items-center justify-center">
            <div className="py-8 px-4 max-w-screen-xl lg:py-16">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">EasyLifeNub</h1>
                <Typography
                    className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
                    Take control on all your development ticket
                </Typography>
                <Flowbite
                    theme={{ theme: { tab: { base: "!flex !items-center !justify-center flex-col gap-2" } } }}>

                    <Tabs.Group
                        aria-label="Tabs with underline"
                        theme={{ tablist: { base: "!flex !items-center !justify-center !w-fit", styles: { underline: "flex-wrap -mb-px border-b border-gray-200" }, tabpanel: "!bg-fuchsia-400" } }}
                        style="underline"
                        ref={props.tabsRef}
                        onActiveTabChange={(tab) => props.setActiveTab(tab)}>
                        <Tabs.Item active
                            title="Login"
                            icon={HiUserCircle}>
                            <Login />
                        </Tabs.Item>

                        <Tabs.Item
                            title="Register"
                            icon={MdDashboard}>
                            <Register />
                        </Tabs.Item>
                    </Tabs.Group>
                </Flowbite>
            </div>
        </section>
        </>
    );
};