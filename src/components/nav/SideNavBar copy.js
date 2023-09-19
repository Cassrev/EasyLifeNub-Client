// import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
// import { Link, useNavigate } from "react-router-dom"
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import "./NavBar.css"

// export const SideNavBar = ({ token, setToken }) => {
//   const navigate = useNavigate()

//   return (
//     <div className="qa--NavSideBarContainer">
//       <Sidebar className="qa--dashnav">
//         <Menu className="titleapp">
//           <h2>Easy Life Nub</h2>
//           <MenuItem component={<Link to="/" />}> Home</MenuItem>
//           <MenuItem component={<Link to="/tickets" />}> Tickets</MenuItem>
//           <MenuItem component={<Link to="/games" />}> Games</MenuItem>
//           ===========
//           <MenuItem icon={<LogoutRoundedIcon />} onClick={() => {
//             setToken('')
//             navigate('/login')
//           }}> Logout </MenuItem>
//         </Menu>
//       </Sidebar>
//     </div>
//   )
// }