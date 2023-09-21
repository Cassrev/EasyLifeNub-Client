import { useRef } from "react"
import { Navbar } from 'flowbite-react';

export const TopNavBar = ({ token, setToken }) => {

    return (
        <div className="ml-[9rem]">
        <Navbar
            className="bg-red-500 w-auto"
            fluid
        >
            <Navbar.Brand
            >
                <span className="self-center whitespace-nowrap text-xl font-semibold ">
                    Flow
                </span>
            </Navbar.Brand>           
        </Navbar>
        </div>
    )
}