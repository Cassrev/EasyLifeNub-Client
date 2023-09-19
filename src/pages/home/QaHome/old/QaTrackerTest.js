// import Listtracker from "components/ui/components/Listtracker";
// import { Button, Img, Line, List, Text } from "components/ui/uiexport";
// import { useState } from "react";


// export const QATrackerPage = () => {
//   const [inputfieldvalue, setInputfieldvalue] = useState("");

//   return (
//     <>
//       <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
//         <div className="flex flex-col items-start justify-start w-full">
//           <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
//             <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
//               <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
//                 <Img
//                   className="h-[35px] w-[13%]"
//                   src="images/img_group_8.svg"
//                   alt="Group"
//                 />
//                 <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[480px] p-2 rounded-[50%] w-14">
//                 </div>
//                 <div className="border border-blue-A700 border-solid flex flex-col h-14 items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex md:flex-col flex-row gap-8 items-start justify-start md:px-5 w-[93%] md:w-full">
//             <div className="flex flex-1 flex-col gap-[31px] items-start justify-start md:mt-0 mt-[37px] w-full">
//               <Text
//                 className="text-gray-900 text-lg"
//                 size="txtGilroySemiBold18"
//               >
//                 QA Tracker
//               </Text>
//               <div className="flex flex-col gap-[30px] items-center justify-start w-full">
//                 <div className="bg-white-A700 flex flex-col items-center justify-start p-4 rounded-md shadow-bs1 w-full">
//                   <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[99%] md:w-full">
//                     <div className="flex flex-row gap-2 items-center justify-between md:mt-0 mt-1.5 w-[28%] md:w-full">
//                       <Img
//                         className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
//                         src="images/img_ellipse91.png"
//                         alt="EllipseNinetyOne"
//                       />
//                     </div>
//                     <div className="flex flex-col gap-[34px] items-end justify-start w-[39%] md:w-full">
//                       <div className="flex flex-row gap-[30px] items-center justify-end w-3/5 md:w-full">
//                         <div className="flex flex-row items-start justify-evenly w-[43%]">
//                           <Img
//                             className="h-6 w-6"
//                             src="images/img_ticket_24X24.svg"
//                             alt="ticket"
//                           />
//                           <Text
//                             className="mt-[3px] text-base text-blue_gray-400"
//                             size="txtGilroyMedium16"
//                           >
//                             85 Ticket
//                           </Text>
//                         </div>
//                         <div className="flex flex-row items-start justify-evenly w-[44%]">
//                           <Img
//                             className="h-6 w-6"
//                             src="images/img_point1.svg"
//                             alt="pointOne"
//                           />
//                           <Text
//                             className="mt-[3px] text-base text-blue_gray-400"
//                             size="txtGilroyMedium16"
//                           >
//                             60 Points
//                           </Text>
//                         </div>
//                       </div>
//                       <div className="flex flex-row gap-4 items-center justify-between w-full">
//                         <Button
//                           className="cursor-pointer min-w-[110px] rounded-[15px] text-center text-sm"
//                           size="sm"
//                           variant="outline"
//                         >
//                           Ticket
//                         </Button>
//                         <Button
//                           className="cursor-pointer min-w-[111px] rounded-[15px] text-center text-sm"
//                           size="sm"
//                           variant="outline"
//                         >
//                           Details
//                         </Button>
//                         <Button
//                           className="cursor-pointer min-w-[111px] rounded-[15px] text-center text-sm"
//                           size="sm"
//                           variant="outline"
//                         >
//                           Activity
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-[30px] items-end justify-start w-full">
//                   <Button
//                     className="cursor-pointer flex items-center justify-center min-w-[86px]"
//                     leftIcon={
//                       <Img
//                         className="h-4 ml-3 mr-2 my-[9px]"
//                         src="images/img_filter.svg"
//                         alt="filter"
//                       />
//                     }
//                     shape="round"
//                     size="md"
//                   >
//                     <div className="font-medium text-left text-sm">Filters</div>
//                   </Button>
//                   <List
//                     className="sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
//                     orientation="horizontal"
//                   >
//                     <Listtracker className="flex flex-1 flex-col gap-6 items-center justify-start w-full" />
//                     <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
//                       <div className="bg-white-A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-md shadow-bs w-full">
//                         <div className="flex flex-col gap-[7px] items-start justify-start pt-[3px] w-[61%] md:w-full">
//                           <div className="flex flex-col items-start justify-start w-full">
//                             <Text
//                               className="text-blue-A700_01 text-sm"
//                               size="txtGilroyMedium14BlueA70001"
//                             >
//                               Delivered
//                             </Text>
//                             <Text
//                               className="mt-[15px] text-blue_gray-900 text-lg"
//                               size="txtGilroySemiBold18Bluegray900"
//                             >
//                               Silde drawer project navigation
//                             </Text>
//                             <Text
//                               className="mt-2.5 text-base text-blue_gray-400"
//                               size="txtGilroyRegular16"
//                             >
//                               Navigation, iOS, needs design
//                             </Text>
//                           </div>
//                           <div className="flex relative w-[43%]">
//                             <div className="flex my-auto w-[79%]">
//                               <div className="flex my-auto w-[73%]">
//                                 <Img
//                                   className="h-10 my-auto rounded-[50%] w-10"
//                                   src="images/img_ellipse92.png"
//                                   alt="EllipseNinetyTwo One"
//                                 />
//                                 <Img
//                                   className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
//                                   src="images/img_profileimglarg_85X85.png"
//                                   alt="EllipseNinetyThree One"
//                                 />
//                               </div>
//                               <Img
//                                 className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
//                                 src="images/img_ellipse91_40X40.png"
//                                 alt="EllipseNinetyOne Two"
//                               />
//                             </div>
//                             <Img
//                               className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
//                               src="images/img_ellipse94.png"
//                               alt="EllipseNinetyFour One"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="bg-white-A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-md shadow-bs w-full">
//                         <div className="flex flex-col gap-[7px] items-start justify-start pt-[3px] w-[61%] md:w-full">
//                           <div className="flex flex-col items-start justify-start w-full">
//                             <Text
//                               className="text-blue-A700_01 text-sm"
//                               size="txtGilroyMedium14BlueA70001"
//                             >
//                               Delivered
//                             </Text>
//                             <Text
//                               className="mt-[15px] text-blue_gray-900 text-lg"
//                               size="txtGilroySemiBold18Bluegray900"
//                             >
//                               Silde drawer project navigation
//                             </Text>
//                             <Text
//                               className="mt-2.5 text-base text-blue_gray-400"
//                               size="txtGilroyRegular16"
//                             >
//                               Navigation, iOS, needs design
//                             </Text>
//                           </div>
//                           <div className="flex relative w-[43%]">
//                             <div className="flex my-auto w-[79%]">
//                               <div className="flex my-auto w-[73%]">
//                                 <Img
//                                   className="h-10 my-auto rounded-[50%] w-10"
//                                   src="images/img_ellipse92.png"
//                                   alt="EllipseNinetyTwo One One"
//                                 />
//                                 <Img
//                                   className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
//                                   src="images/img_profileimglarg_85X85.png"
//                                   alt="EllipseNinetyThree One One"
//                                 />
//                               </div>
//                               <Img
//                                 className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
//                                 src="images/img_ellipse91_40X40.png"
//                                 alt="EllipseNinetyOne One One"
//                               />
//                             </div>
//                             <Img
//                               className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
//                               src="images/img_ellipse94.png"
//                               alt="EllipseNinetyFour One One"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="bg-white-A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-md shadow-bs w-full">
//                         <div className="flex flex-col gap-[7px] items-start justify-start pt-[3px] w-[61%] md:w-full">
//                           <div className="flex flex-col items-start justify-start w-full">
//                             <Text
//                               className="text-blue-A700_01 text-sm"
//                               size="txtGilroyMedium14BlueA70001"
//                             >
//                               Delivered
//                             </Text>
//                             <Text
//                               className="mt-[15px] text-blue_gray-900 text-lg"
//                               size="txtGilroySemiBold18Bluegray900"
//                             >
//                               Silde drawer project navigation
//                             </Text>
//                             <Text
//                               className="mt-2.5 text-base text-blue_gray-400"
//                               size="txtGilroyRegular16"
//                             >
//                               Navigation, iOS, needs design
//                             </Text>
//                           </div>
//                           <div className="flex relative w-[43%]">
//                             <div className="flex my-auto w-[79%]">
//                               <div className="flex my-auto w-[73%]">
//                                 <Img
//                                   className="h-10 my-auto rounded-[50%] w-10"
//                                   src="images/img_ellipse92.png"
//                                   alt="EllipseNinetyTwo Two One"
//                                 />
//                                 <Img
//                                   className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
//                                   src="images/img_profileimglarg_85X85.png"
//                                   alt="EllipseNinetyThree Two One"
//                                 />
//                               </div>
//                               <Img
//                                 className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
//                                 src="images/img_ellipse91_40X40.png"
//                                 alt="EllipseNinetyOne Two One"
//                               />
//                             </div>
//                             <Img
//                               className="h-10 ml-[-16px] my-auto rounded-[50%] w-10 z-[1]"
//                               src="images/img_ellipse94.png"
//                               alt="EllipseNinetyFour Two One"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </List>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default QATrackerPage;
