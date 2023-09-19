// import { useEffect, useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import { Img, Line } from "components/ui/uiexport";
// import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
// import {
//   Card,
//   Typography,
//   List,
//   ListItem,
//   ListItemPrefix,
//   ListItemSuffix,
//   Chip,
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";
// import {
//   PresentationChartBarIcon,
//   ShoppingBagIcon,
//   UserCircleIcon,
//   Cog6ToothIcon,
//   InboxIcon,
//   PowerIcon,
// } from "@heroicons/react/24/solid";
// import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";



// export const SideNavBar = ({ token, setToken }) => {
//   const navigate = useNavigate()
//   const location = useLocation()

//   useEffect(() => {
//     const menuItems = document.querySelectorAll(".menu-item");
//     menuItems.forEach((item) => {
//       const link = item.getAttribute("data-link");
//       if (link === location.pathname) {
//         item.classList.add("active-menu-item");
//       } else {
//         item.classList.remove("active-menu-item");
//       }
//     });
//   }, [location]);

//   return (
//     <Sidebar className="qa--dashnav !sticky !w-fit flex h-100 md:hidden justify-start overflow-auto top-[0]">
//       <Menu className="qa--sidenavmenu bg-white-A700 flex flex-col gap-[10px] p-[5px] w-full" >
//         {/* Dashboard/Home */}
//         <div className="flex flex-col items-center justify-start mt-[19px] w-full">
//           <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] w-full">
//             <Line className="bg-blue-A700_01 h-6 w-0.5" />
//             <div className="flex flex-row gap-2 items-start justify-start w-[50%] md:w-[30%]">
//               <MenuItem
//                 component={<Link to="/" className="link" />}
//                 className="menu-item mt-[3px] text-base text-blue_gray-700 overflow-hidden text-overflow-ellipsis"
//                 size="txtGilroySemiBold16BlueA70001"
//                 data-link="/"
//               >
//                 Dashboard/Home
//               </MenuItem>
//             </div>
//           </div>
//         </div>

//         {/* Games */}
//         <div className="flex flex-col items-start justify-start p-2 w-full">
//           <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[50%] md:w-[30%]">
//             <Img
//               className="h-6 w-6"
//               src="images/img_user.svg"
//               alt="user"
//             />
//             <MenuItem
//               component={<Link to="/games" />}
//               className="menu-item mt-[3px] text-base text-blue_gray-700 overflow-hidden text-overflow-ellipsis"
//               size="txtGilroySemiBold16"
//               data-link="/games"
//             >
//               Games
//             </MenuItem>
//           </div>
//         </div>

//         {/* Tickets */}
//         <div className="flex flex-col items-start justify-start p-2 w-full">
//           <div className="flex flex-row gap-2 items-start justify-start my-2 w-[50%] md:w-[30%]">
//             <Img
//               className="h-6 w-6"
//               src="images/img_grid.svg"
//               alt="grid"
//             />
//             <MenuItem
//               component={<Link to="/tickets" />}
//               className="menu-item mt-[5px] text-base text-blue_gray-700 overflow-hidden text-overflow-ellipsis"
//               size="txtGilroySemiBold16"
//               data-link="/tickets"
//             >
//               Tickets
//             </MenuItem>
//           </div>
//         </div>
//         <div className="border-b-2 border-blue_gray-700 my-2"></div>

//         <MenuItem
//           icon={<LogoutRoundedIcon />}
//           onClick={() => {
//             setToken("");
//             navigate("/login");
//           }}
//           className="text-base text-blue_gray-700 overflow-hidden text-overflow-ellipsis"
//         >
//           Logout
//         </MenuItem>
//       </Menu>
//     </Sidebar>
//   );
// };
// // import { useEffect, useState } from "react";
// // import { Link, useNavigate, useLocation } from "react-router-dom";
// // import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// // import { Img, Line } from "components/ui/uiexport";
// // import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
// // import {
// //   Card,
// //   Typography,
// //   List,
// //   ListItem,
// //   ListItemPrefix,
// //   ListItemSuffix,
// //   Chip,
// //   Accordion,
// //   AccordionHeader,
// //   AccordionBody
// // } from "@material-tailwind/react";
// // import {
// //   PresentationChartBarIcon,
// //   ShoppingBagIcon,
// //   UserCircleIcon,
// //   Cog6ToothIcon,
// //   InboxIcon,
// //   PowerIcon,
// // } from "@heroicons/react/24/solid";
// // import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";



// // export const SideNavBar = ({ token, setToken }) => {
// //   const navigate = useNavigate()
// //   const location = useLocation()

// //   useEffect(() => {
// //     const menuItems = document.querySelectorAll(".menu-item");
// //     menuItems.forEach((item) => {
// //       const link = item.getAttribute("data-link");
// //       if (link === location.pathname) {
// //         item.classList.add("active-menu-item");
// //       } else {
// //         item.classList.remove("active-menu-item");
// //       }
// //     });
// //   }, [location]);

// //   return (
// //     <Card className="h-[calc(45vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
// //       <div className="mb-2 p-4">
// //         <Typography variant="h5" color="blue-gray">
// //           Sidebar
// //         </Typography>
// //       </div>
// //       <Menu
// //         className="gap-10px">
// //         <MenuItem
// //           component={< Link to="/" className="link" />}
// //           icon={< PresentationChartBarIcon className="h-5 w-5" />}>
// //           Dashboard
// //         </MenuItem >
// //         <MenuItem
// //           className="gap-2"

// //           component={<Link to="/games" className="link" />}
// //           icon={<ShoppingBagIcon className="h-5 w-5" />}
// //         >
// //           Games
// //         </MenuItem>
// //         <MenuItem
// //           component={<Link to="/tickets" className="link" />}
// //           icon={<ShoppingBagIcon className="h-5 w-5" />}>
// //           Tickets
// //         </MenuItem>
// //         <hr className="my-2 border-blue-gray-50" />
// //         <MenuItem
// //           component={<Link to="/login" className="link" />}
// //           icon={<PowerIcon className="h-5 w-5" />}>
// //           Log Out
// //         </MenuItem>
// //       </Menu>
// //     </Card>
// //   );
// // }
