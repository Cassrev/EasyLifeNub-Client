// import { Button, Img, Input, Line, Text } from "components";

// export const SignupLoginModulePage = () => {
//   const googleSignIn = useGoogleLogin({
//     onSuccess: (res) => {
//       console.log("res", res);
//       alert("Login successfull. 😍");
//     },
//   });

//   return (
//     <>
//       <div className="bg-gray-50_03 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[83px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
//         <header className="flex items-center justify-center md:px-5 w-full">
//           <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
//             <div className="header-row my-[7px]">
//               <Img
//                 className="h-[35px]"
//                 src="images/img_group10392_20.svg"
//                 alt="Group10392"
//               />
//               <div className="mobile-menu">
//                 <div></div>
//                 <div></div>
//                 <div></div>
//               </div>
//             </div>
//             <div className="flex md:flex-1 sm:flex-col flex-row gap-6 sm:hidden items-start justify-center md:ml-[0] ml-[285px] w-[30%] md:w-full">
//               <div className="flex flex-row gap-[11px] items-start justify-between w-[27%] sm:w-full">
//                 <Text
//                   className="mt-[3px] text-base text-gray-900_02"
//                   size="txtGilroyMedium16Gray90002"
//                 >
//                   Products
//                 </Text>
//                 <Img
//                   className="h-6 w-6"
//                   src="images/img_arrowdown_gray_900.svg"
//                   alt="arrowdown"
//                 />
//               </div>
//               <div className="flex flex-row gap-[9px] items-start justify-center w-[28%] sm:w-full">
//                 <Text
//                   className="mt-[3px] text-base text-gray-900_02"
//                   size="txtGilroyMedium16Gray90002"
//                 >
//                   Resouces
//                 </Text>
//                 <Img
//                   className="h-6 w-6"
//                   src="images/img_arrowdown_gray_900.svg"
//                   alt="arrowdown One"
//                 />
//               </div>
//               <Text
//                 className="sm:mt-0 mt-1 text-base text-gray-900_02"
//                 size="txtGilroyMedium16Gray90002"
//               >
//                 Request a demo
//               </Text>
//             </div>
//             <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[225px] rounded-md w-[18%] md:w-full">
//               <a href="javascript:" className="text-base text-gray-900_02">
//                 <Text size="txtGilroyMedium16Gray90002">Sign in</Text>
//               </a>
//               <Button
//                 className="cursor-pointer font-medium min-w-[148px] text-base text-center"
//                 shape="round"
//               >
//                 Sign up for free
//               </Button>
//             </div>
//           </div>
//         </header>
//         <div className="flex flex-col gap-[29px] items-center justify-start mb-[267px] md:px-5 w-[39%] md:w-full">
//           <Text
//             className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
//             size="txtGilroySemiBold32"
//           >
//             Sign in to DhiWise
//           </Text>
//           <div className="flex flex-col items-start justify-start w-full">
//             <div className="flex flex-col gap-1.5 items-start justify-start rounded-lg w-full">
//               <Text
//                 className="text-blue_gray-900 text-lg"
//                 size="txtGilroyMedium18"
//               >
//                 Email
//               </Text>
//               <Input
//                 name="Group10198"
//                 placeholder="Enter Email"
//                 className="font-medium p-0 placeholder:text-blue_gray-300 text-base text-left w-full"
//                 wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
//                 type="email"
//               ></Input>
//             </div>
//             <div className="flex flex-col gap-1.5 items-start justify-start mt-[21px] rounded-lg w-full">
//               <Text
//                 className="text-blue_gray-900 text-lg"
//                 size="txtGilroyMedium18"
//               >
//                 Password
//               </Text>
//               <Input
//                 name="Group10198 One"
//                 placeholder="Enter Password"
//                 className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
//                 wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
//                 type="password"
//               ></Input>
//             </div>
//             <a
//               href="javascript:"
//               className="md:ml-[0] ml-[381px] mt-[15px] text-blue-A700_01 text-lg"
//             >
//               <Text size="txtGilroyMedium18BlueA70001">Forgot Password?</Text>
//             </a>
//             <Button
//               className="cursor-pointer font-medium min-w-[528px] sm:min-w-full mt-6 text-base text-center"
//               shape="round"
//             >
//               Log in
//             </Button>
//                     </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default SignupLoginModulePage;
