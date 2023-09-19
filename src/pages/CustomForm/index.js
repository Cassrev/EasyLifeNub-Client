// import { Sidebar } from "react-pro-sidebar";

// import { Button, Img, Input, Text } from "components";

// import { CloseSVG } from "../../assets/images";

// const CustomFormPage = () => {
//   const [inputfieldvalue, setInputfieldvalue] = React.useState("");

//   return (
//     <>
//       <div className="bg-gray-50_04 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
//         <div className="flex flex-col items-start justify-start w-full">
//           <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
//             <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
//               <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
//                 <Img
//                   className="h-[35px] w-[13%]"
//                   src="images/img_group_9.svg"
//                   alt="Group"
//                 />
//                 <Input
//                   name="InputField"
//                   placeholder="Search Items, Customer etc"
//                   value={inputfieldvalue}
//                   onChange={(e) => setInputfieldvalue(e)}
//                   className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
//                   wrapClassName="border border-blue_gray-300 border-solid flex md:flex-1 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
//                   prefix={
//                     <Img
//                       className="cursor-pointer h-5 m-3"
//                       src="images/img_search.svg"
//                       alt="search"
//                     />
//                   }
//                   suffix={
//                     <CloseSVG
//                       fillColor="#bac1ce"
//                       className="cursor-pointer h-5 my-auto"
//                       onClick={() => setInputfieldvalue("")}
//                       style={{
//                         visibility:
//                           inputfieldvalue?.length <= 0 ? "hidden" : "visible",
//                       }}
//                       height={20}
//                       width={20}
//                       viewBox="0 0 20 20"
//                     />
//                   }
//                   size="xs"
//                 ></Input>
//                 <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[480px] p-2 rounded-[50%] w-14">
//                   <div className="md:h-9 h-[35px] mb-1 relative w-9">
//                     <Img
//                       className="absolute bottom-[0] h-8 left-[0] w-8"
//                       src="images/img_notification.svg"
//                       alt="notification"
//                     />
//                     <Text
//                       className="absolute bg-red-700 border border-blue_gray-50 border-solid h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-white-A700 text-xs top-[0] w-[18px]"
//                       size="txtOpenSansRomanSemiBold12"
//                     >
//                       2
//                     </Text>
//                   </div>
//                 </div>
//                 <div className="border border-blue-A700 border-solid flex flex-col h-14 items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
//                   <Img
//                     className="h-12 md:h-auto rounded-[50%] w-12"
//                     src="images/img_profileimglarg.png"
//                     alt="ProfileImgLarg"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
//             <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
//               <div className="bg-white-A700 flex flex-col md:gap-10 gap-[375px] items-center justify-end p-[5px] w-full">
//                 <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
//                   <div className="flex flex-col items-start justify-start pr-4 py-4 w-full">
//                     <div className="flex flex-row gap-2 items-center justify-start w-[56%] md:w-full">
//                       <Img
//                         className="h-6 ml-[7px] w-6"
//                         src="images/img_save.svg"
//                         alt="save"
//                       />
//                       <Text
//                         className="text-base text-blue_gray-700"
//                         size="txtGilroySemiBold16"
//                       >
//                         Dashboard
//                       </Text>
//                     </div>
//                   </div>
//                   <div className="flex flex-col items-start justify-start p-2 w-full">
//                     <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
//                       <Img
//                         className="h-6 w-6"
//                         src="images/img_user_24X24.svg"
//                         alt="user"
//                       />
//                       <Text
//                         className="mt-[3px] text-base text-blue_gray-700"
//                         size="txtGilroySemiBold16"
//                       >
//                         Users
//                       </Text>
//                     </div>
//                   </div>
//                   <div className="flex flex-col items-start justify-start p-2 w-full">
//                     <div className="flex flex-row gap-2 items-start justify-start my-2 w-[49%] md:w-full">
//                       <Img
//                         className="h-6 w-6"
//                         src="images/img_grid.svg"
//                         alt="grid"
//                       />
//                       <Text
//                         className="mt-[5px] text-base text-blue_gray-700"
//                         size="txtGilroySemiBold16"
//                       >
//                         Categories
//                       </Text>
//                     </div>
//                   </div>
//                   <div className="flex flex-col items-start justify-start p-2 w-full">
//                     <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
//                       <Img
//                         className="h-6 w-6"
//                         src="images/img_edit.svg"
//                         alt="edit"
//                       />
//                       <Text
//                         className="mt-[3px] text-base text-blue_gray-700"
//                         size="txtGilroySemiBold16"
//                       >
//                         Items
//                       </Text>
//                     </div>
//                   </div>
//                   <div className="flex flex-col items-start justify-start p-2 w-full">
//                     <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[35%] md:w-full">
//                       <Img
//                         className="h-6 w-6"
//                         src="images/img_bag.svg"
//                         alt="bag"
//                       />
//                       <Text
//                         className="mt-[3px] text-base text-blue_gray-700"
//                         size="txtGilroySemiBold16"
//                       >
//                         Orders
//                       </Text>
//                     </div>
//                   </div>
//                   <div className="flex flex-col items-start justify-start p-2 w-full">
//                     <div className="flex flex-row gap-2 items-start justify-start my-2 w-[28%] md:w-full">
//                       <Img
//                         className="h-6 w-6"
//                         src="images/img_clock.svg"
//                         alt="clock"
//                       />
//                       <Text
//                         className="mt-1 text-base text-blue_gray-700"
//                         size="txtGilroySemiBold16"
//                       >
//                         Blog
//                       </Text>
//                     </div>
//                   </div>
//                   <div className="flex flex-col items-start justify-start p-2 w-full">
//                     <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[54%] md:w-full">
//                       <Img
//                         className="h-6 w-6"
//                         src="images/img_notification.svg"
//                         alt="notification One"
//                       />
//                       <Text
//                         className="mt-[3px] text-base text-blue_gray-700"
//                         size="txtGilroySemiBold16"
//                       >
//                         Notifications
//                       </Text>
//                     </div>
//                   </div>
//                   <div className="flex flex-col items-start justify-start p-2 w-full">
//                     <div className="flex flex-row gap-2 items-start justify-start my-2 w-2/5 md:w-full">
//                       <Img
//                         className="h-6 w-6"
//                         src="images/img_settings_24X24.svg"
//                         alt="settings"
//                       />
//                       <Text
//                         className="mt-[5px] text-base text-blue_gray-700"
//                         size="txtGilroySemiBold16"
//                       >
//                         Settings
//                       </Text>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col font-opensans items-start justify-start p-2 w-[87%] md:w-full">
//                   <div className="flex flex-row gap-2 items-end justify-start my-2 w-[29%] md:w-full">
//                     <Img
//                       className="h-6 w-6"
//                       src="images/img_question.svg"
//                       alt="question"
//                     />
//                     <Text
//                       className="mt-[5px] text-base text-blue_gray-700"
//                       size="txtOpenSansRomanSemiBold16"
//                     >
//                       Help
//                     </Text>
//                   </div>
//                 </div>
//               </div>
//             </Sidebar>
//             <div className="flex flex-1 flex-col gap-[34px] items-center justify-start md:mt-0 mt-[59px] w-full">
//               <Text
//                 className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
//                 size="txtGilroySemiBold32"
//               >
//                 Custom Form
//               </Text>
//               <div className="flex flex-col gap-4 items-center justify-start w-full">
//                 <div className="flex flex-col gap-1 items-start justify-start w-full sm:w-full">
//                   <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
//                     <Text
//                       className="text-blue_gray-900 text-lg"
//                       size="txtGilroyMedium18"
//                     >
//                       First Name
//                     </Text>
//                   </div>
//                   <Input
//                     name="InputField One"
//                     placeholder="Enter Your First Name"
//                     className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
//                     wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
//                     type="text"
//                   ></Input>
//                 </div>
//                 <div className="flex flex-col items-center justify-start w-full">
//                   <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
//                     <Text
//                       className="text-blue_gray-900 text-lg"
//                       size="txtGilroyMedium18"
//                     >
//                       Last Name
//                     </Text>
//                   </div>
//                   <Input
//                     name="InputField Two"
//                     placeholder="Enter Your Last Name"
//                     className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
//                     wrapClassName="border border-blue_gray-100 border-solid mt-1 rounded-lg w-full"
//                     type="text"
//                   ></Input>
//                 </div>
//                 <div className="flex flex-col items-center justify-start w-full">
//                   <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
//                     <Text
//                       className="text-blue_gray-900 text-lg"
//                       size="txtGilroyMedium18"
//                     >
//                       Email Id
//                     </Text>
//                   </div>
//                   <Input
//                     name="InputField Three"
//                     placeholder="Enter Your Email Id"
//                     className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
//                     wrapClassName="border border-blue_gray-100 border-solid mt-1 rounded-lg w-full"
//                     type="email"
//                   ></Input>
//                 </div>
//                 <div className="flex flex-col items-center justify-start w-full">
//                   <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
//                     <Text
//                       className="text-blue_gray-900 text-lg"
//                       size="txtGilroyMedium18"
//                     >
//                       Phone Number
//                     </Text>
//                   </div>
//                   <Input
//                     name="InputField Four"
//                     placeholder="Enter Your Phone Number"
//                     className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
//                     wrapClassName="border border-blue_gray-100 border-solid mt-1 rounded-lg w-full"
//                     type="number"
//                   ></Input>
//                 </div>
//                 <div className="flex flex-col items-center justify-start w-full">
//                   <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
//                     <Text
//                       className="text-blue_gray-900 text-lg"
//                       size="txtGilroyMedium18"
//                     >
//                       Password
//                     </Text>
//                   </div>
//                   <Input
//                     name="InputField Five"
//                     placeholder="Enter Your Password"
//                     className="font-medium p-0 placeholder:text-blue_gray-300 text-base text-left w-full"
//                     wrapClassName="border border-blue_gray-100 border-solid flex md:h-auto mt-1 rounded-lg w-full sm:w-full"
//                     type="password"
//                     suffix={
//                       <Img
//                         className="h-5 ml-[35px] mr-3 my-4"
//                         src="images/img_eye.svg"
//                         alt="eye"
//                       />
//                     }
//                   ></Input>
//                 </div>
//                 <div className="flex flex-col items-center justify-start w-full">
//                   <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
//                     <Text
//                       className="text-blue_gray-900 text-lg"
//                       size="txtGilroyMedium18"
//                     >
//                       Confirm Password
//                     </Text>
//                   </div>
//                   <Input
//                     name="language"
//                     placeholder="Confirm Your Password "
//                     className="font-medium p-0 placeholder:text-blue_gray-300 text-base text-left w-full"
//                     wrapClassName="border border-blue_gray-100 border-solid flex md:h-auto mt-1 rounded-lg w-full sm:w-full"
//                     type="password"
//                     suffix={
//                       <Img
//                         className="h-5 ml-[35px] mr-3 my-4"
//                         src="images/img_eye.svg"
//                         alt="eye"
//                       />
//                     }
//                   ></Input>
//                 </div>
//                 <Button
//                   className="cursor-pointer font-medium text-base text-center w-full"
//                   shape="round"
//                 >
//                   Submit
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CustomFormPage;
