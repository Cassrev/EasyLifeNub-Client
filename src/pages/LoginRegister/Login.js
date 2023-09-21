import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../managers/AuthManager"
import { Button, Card, Checkbox, Label, TextInput, Tabs } from 'flowbite-react';

export const Login = ({ setToken }) => {
    const username = useRef()
    const password = useRef()
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState(0);
    const props = { setActiveTab };

    const handleLogin = (e) => {
        e.preventDefault()
        const user = {
            username: username.current.value,
            password: password.current.value
        }

        loginUser(user)
            .then(res => {
                if ("valid" in res && res.valid) {
                    setToken(res.token)
                    navigate("/")
                }
            })
    }
    return (
        <>
            
            <Card
                    theme={{ root: { base: "border- none" }}}
                className="flex font-gilroy mx-auto md:px-10 sm:px-5 w-fit h-fit"
                >
                <form
                    className="flex flex-col gap-4 items-start justify-start w-fit"
                    onSubmit={handleLogin}>
                    <div className="flex flex-col items-center justify-start ">

                        <div className="flex flex-col gap-1.5 items-start justify-start rounded-lg w-full">
                            <Label
                                className="text-blue_gray-900 text-lg"
                                htmlFor="email"
                                value="Your email"
                            />
                            <TextInput
                                ref={username}
                                id="email"
                                placeholder="your@email.com"
                                className="border border-blue_gray-100 border-solid rounded-lg w-full font-medium p-0 placeholder:text-blue_gray-300 text-base text-left"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5 items-start justify-start mt-[21px] rounded-lg w-full">
                            <Label
                                className="text-blue_gray-900 text-lg"
                                htmlFor="password"
                                value="Password"
                            />
                            <TextInput
                                ref={password}
                                id="password"
                                type="password"
                                placeholder="Enter Password"
                                className="border border-blue_gray-100 border-solid rounded-lg !placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                                required
                            />
                        </div>
                        <Button
                            className="cursor-pointer font-medium min-w-[528px] sm:min-w-full mt-6 text-base text-center"
                            type="submit"
                            shape="round"
                            href="/"

                        >
                            Log in
                        </Button>
                    </div>
                </form>
            </Card>
        </>
    );
};