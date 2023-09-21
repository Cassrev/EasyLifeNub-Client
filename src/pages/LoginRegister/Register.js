import { useRef, } from "react"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../../managers/AuthManager"
import { Button, Card, Label, TextInput } from 'flowbite-react';


export const Register = ({ setToken }) => {
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const username = useRef()
    const password = useRef()
    const passwordDialog = useRef()
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value) {
            const newUser = {
                username: username.current.value,
                first_name: firstName.current.value,
                last_name: lastName.current.value,
                email: email.current.value,
                password: password.current.value,
            }

            registerUser(newUser)
                .then(res => {
                    if ("valid" in res && res.valid) {
                        setToken(res.token)
                        navigate("/")
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }


    return (
        <>

            <Card
                theme={{ root: { base: "border- none" } }}
                className="flex font-gilroy mx-auto md:px-10 sm:px-5 w-full h-fit"
                >
                <form
                    className="flex flex-col gap-4 items-start justify-start w-full"
                    onSubmit={handleRegister}>
                    <div className="flex flex-col items-center justify-start ">
                        <div className="flex flex-col gap-1.5 items-start justify-start rounded-lg w-full">
                            <Label
                                className="text-blue_gray-900 text-lg"
                                htmlFor="firstName"
                                value="Enter First Name"
                            />
                            <TextInput
                                ref={firstName}
                                id="firstName"
                                placeholder="first of name"
                                className="border border-blue_gray-100 border-solid rounded-lg w-full font-medium p-0 placeholder:text-blue_gray-300 text-base text-left"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5 items-start justify-start rounded-lg w-full">
                            <Label
                                className="text-blue_gray-900 text-lg"
                                htmlFor="lastName"
                                value="Enter Last Name"
                            />
                            <TextInput
                                ref={lastName}
                                id="lastName"
                                placeholder="last of name"
                                className="border border-blue_gray-100 border-solid rounded-lg w-full font-medium p-0 placeholder:text-blue_gray-300 text-base text-left"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5 items-start justify-start rounded-lg w-full">
                            <Label
                                className="text-blue_gray-900 text-lg"
                                htmlFor="userName"
                                value="Create a username"
                            />
                            <TextInput
                                ref={username}
                                id="userName"
                                placeholder="username here"
                                className="border border-blue_gray-100 border-solid rounded-lg w-full font-medium p-0 placeholder:text-blue_gray-300 text-base text-left"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5 items-start justify-start rounded-lg w-full">
                            <Label
                                className="text-blue_gray-900 text-lg"
                                htmlFor="email"
                                value="Enter Email"
                            />
                            <TextInput
                                ref={email}
                                id="email"
                                placeholder="enteryour@email.com"
                                className="border border-blue_gray-100 border-solid rounded-lg w-full font-medium p-0 placeholder:text-blue_gray-300 text-base text-left"
                                type="email"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5 items-start justify-start mt-[21px] rounded-lg w-full">
                            <Label
                                className="text-blue_gray-900 text-lg"
                                htmlFor="password"
                                value="Create Password"
                            />
                            <TextInput
                                ref={password}
                                id="password"
                                type="password"
                                placeholder="password"
                                className="border border-blue_gray-100 border-solid rounded-lg !placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                                required
                            />
                        </div>
                        <Button
                            className="cursor-pointer font-medium min-w-[528px] sm:min-w-full mt-6 text-base text-center"
                            type="submit"
                            shape="round"
                        >
                            Register
                        </Button>
                    </div>
                </form>
            </Card>

        </>
    );
};