// import { Sidebar } from "react-pro-sidebar";
// import { Img, Line, List, Text } from "components/ui/uiexport";
// import { useEffect, useState } from "react";

// export const DashboardPage = () => {
//   const [inputfieldvalue, setInputfieldvalue] = useState("");
//   return (
//     <>
//       <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
//         <div className="flex flex-col items-center justify-start w-full">
//           <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
//             <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
//               <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
//                 <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[480px] p-2 rounded-[50%] w-14">
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex md:flex-col flex-row gap-8 items-start justify-between mx-auto md:px-5 w-full">
//             <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
//               <div className="bg-white-A700 flex flex-col md:gap-10 gap-[375px] items-center justify-end p-[5px] w-full">
//                 <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
//                   <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] w-full">
//                     <Line className="bg-blue-A700_01 h-6 w-0.5" />
//                     <div className="flex flex-row gap-2 items-start justify-start w-[49%]">
//                       <Img
//                         className="h-6 w-6"
//                         src="images/img_minimize.svg"
//                         alt="minimize"
//                       />
//                       <Text
//                         className="mt-[3px] text-base text-blue-A700_01"
//                         size="txtGilroySemiBold16BlueA70001"
//                       >
//                         Dashboard/Home
//                       </Text>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-start justify-start p-2 w-full">
//                   <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
//                     <Img
//                       className="h-6 w-6"
//                       src="images/img_user.svg"
//                       alt="user"
//                     />
//                     <Text
//                       className="mt-[3px] text-base text-blue_gray-700"
//                       size="txtGilroySemiBold16"
//                     >
//                       Games
//                     </Text>
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-start justify-start p-2 w-full">
//                   <div className="flex flex-row gap-2 items-start justify-start my-2 w-[49%] md:w-full">
//                     <Img
//                       className="h-6 w-6"
//                       src="images/img_grid.svg"
//                       alt="grid"
//                     />
//                     <Text
//                       className="mt-[5px] text-base text-blue_gray-700"
//                       size="txtGilroySemiBold16"
//                     >
//                       Tickets
//                     </Text>
//                   </div>
//                 </div>
//               </div>

//             </Sidebar>
//             <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-[27%] md:w-full">
//               <div className="flex flex-col gap-[15px] items-center justify-start w-full">
//                 <div className="flex flex-row items-start justify-between w-full">
//                   <Text
//                     className="text-gray-900 text-lg"
//                     size="txtGilroySemiBold18"
//                   >
//                     Recent Customer
//                   </Text>
//                   <Img
//                     className="h-6 w-6"
//                     src="images/img_overflowmenu.svg"
//                     alt="overflowmenu One"
//                   />
//                 </div>
//               </div>
//             </div>
//             <List
//               className="flex flex-col gap-[15px] items-center w-full"
//               orientation="vertical"
//             >
//               <div className="flex flex-1 flex-row gap-2.5 items-center justify-start md:pr-10 sm:pr-5 pr-[93px] w-full">
//                 <Img
//                   className="h-10 md:h-auto object-cover rounded-[3px] w-10"
//                   src="images/img_jankoferlicg.png"
//                   alt="jankoferlicG"
//                 />
//                 <div className="flex flex-col items-start justify-start">
//                   <Text
//                     className="text-gray-900 text-sm"
//                     size="txtGilroyMedium14"
//                   >
//                     Benny Chagur
//                   </Text>
//                   <Text
//                     className="text-blue_gray-400_01 text-xs"
//                     size="txtGilroyRegular12Bluegray40001"
//                   >
//                     Member
//                   </Text>
//                 </div>
//               </div>
//               <div className="flex flex-1 flex-row gap-2.5 items-center justify-start md:pr-10 sm:pr-5 pr-[93px] w-full">
//                 <Img
//                   className="h-10 md:h-auto object-cover rounded-[3px] w-10"
//                   src="images/img_studioportrait.png"
//                   alt="studioportrait"
//                 />
//                 <div className="flex flex-col items-start justify-start">
//                   <Text
//                     className="text-gray-900 text-sm"
//                     size="txtGilroyMedium14"
//                   >
//                     Chynita Heree
//                   </Text>
//                   <Text
//                     className="text-blue_gray-400_01 text-xs"
//                     size="txtGilroyRegular12Bluegray40001"
//                   >
//                     Member
//                   </Text>
//                 </div>
//               </div>
//               <div className="flex flex-1 flex-row gap-2.5 items-center justify-start md:pr-10 sm:pr-5 pr-[87px] w-full">
//                 <Img
//                   className="h-10 md:h-auto object-cover rounded-[3px] w-10"
//                   src="images/img_youngbeardedm.png"
//                   alt="youngbeardedm"
//                 />
//                 <div className="flex flex-col items-start justify-start">
//                   <Text
//                     className="text-gray-900 text-sm"
//                     size="txtGilroyMedium14"
//                   >
//                     David Yers
//                   </Text>
//                   <Text
//                     className="text-blue_gray-400_01 text-xs"
//                     size="txtGilroyRegular12Bluegray40001"
//                   >
//                     Regular Customer
//                   </Text>
//                 </div>
//               </div>
//               <div className="flex flex-1 flex-row gap-2.5 items-center justify-start md:pr-10 sm:pr-5 pr-[99px] w-full">
//                 <Img
//                   className="h-10 md:h-auto object-cover rounded-[3px] w-10"
//                   src="images/img_cheerfulindian.png"
//                   alt="cheerfulindian"
//                 />
//                 <div className="flex flex-col items-start justify-start">
//                   <Text
//                     className="text-gray-900 text-sm"
//                     size="txtGilroyMedium14"
//                   >
//                     Hayder Jahid
//                   </Text>
//                   <Text
//                     className="text-blue_gray-400_01 text-xs"
//                     size="txtGilroyRegular12Bluegray40001"
//                   >
//                     Member
//                   </Text>
//                 </div>
//               </div>
//               <div className="flex flex-1 flex-row gap-2.5 items-center justify-start md:pr-10 sm:pr-5 pr-[99px] w-full">
//                 <Img
//                   className="h-10 md:h-auto object-cover rounded-[3px] w-10"
//                   src="images/img_cheerfulindian.png"
//                   alt="cheerfulindian One"
//                 />
//                 <div className="flex flex-col items-start justify-start">
//                   <Text
//                     className="text-gray-900 text-sm"
//                     size="txtGilroyMedium14"
//                   >
//                     Hayder Jahid
//                   </Text>
//                   <Text
//                     className="text-blue_gray-400_01 text-xs"
//                     size="txtGilroyRegular12Bluegray40001"
//                   >
//                     Member
//                   </Text>
//                 </div>
//               </div>
//               <div className="flex flex-1 flex-row gap-2.5 items-center justify-start md:pr-10 sm:pr-5 pr-[99px] w-full">
//                 <Img
//                   className="h-10 md:h-auto object-cover rounded-[3px] w-10"
//                   src="images/img_cheerfulindian.png"
//                   alt="cheerfulindian Two"
//                 />
//                 <div className="flex flex-col items-start justify-start">
//                   <Text
//                     className="text-gray-900 text-sm"
//                     size="txtGilroyMedium14"
//                   >
//                     Hayder Jahid
//                   </Text>
//                   <Text
//                     className="text-blue_gray-400_01 text-xs"
//                     size="txtGilroyRegular12Bluegray40001"
//                   >
//                     Member
//                   </Text>
//                 </div>
//               </div>
//             </List>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };