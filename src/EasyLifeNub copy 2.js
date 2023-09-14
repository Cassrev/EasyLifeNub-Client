
// import { useState, useEffect, useMemo } from "react";

// // react-router components
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";


// import { ApplicationViews } from "./views/ApplicationViews"
// import { NavBar } from "./components/nav/NavBar"

// export const EasyLifeNub = () => {
//   const [token, setTokenState] = useState(localStorage.getItem('auth_token'))

//   const setToken = (newToken) => {
//     localStorage.setItem('auth_token', newToken)
//     setTokenState(newToken)
//   }
//   const [controller, dispatch] = useMaterialUIController();
//   const {
//     miniSidenav,
//     direction,
//     layout,
//     openConfigurator,
//     sidenavColor,
//     transparentSidenav,
//     whiteSidenav,
//     darkMode,
//   } = controller;
//   const [onMouseEnter, setOnMouseEnter] = useState(false);
//   const [rtlCache, setRtlCache] = useState(null);
//   const { pathname } = useLocation();

//   // Cache for the rtl
//   useMemo(() => {
//     const cacheRtl = createCache({
//       key: "rtl",
//       stylisPlugins: [rtlPlugin],
//     });

//     setRtlCache(cacheRtl);
//   }, []);

//   // Open sidenav when mouse enter on mini sidenav
//   const handleOnMouseEnter = () => {
//     if (miniSidenav && !onMouseEnter) {
//       setMiniSidenav(dispatch, false);
//       setOnMouseEnter(true);
//     }
//   };

//   // Close sidenav when mouse leave mini sidenav
//   const handleOnMouseLeave = () => {
//     if (onMouseEnter) {
//       setMiniSidenav(dispatch, true);
//       setOnMouseEnter(false);
//     }
//   };

//   // Change the openConfigurator state
//   const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

//   // Setting the dir attribute for the body element
//   useEffect(() => {
//     document.body.setAttribute("dir", direction);
//   }, [direction]);

//   // Setting page scroll to 0 when changing the route
//   useEffect(() => {
//     document.documentElement.scrollTop = 0;
//     document.scrollingElement.scrollTop = 0;
//   }, [pathname]);

//   const getRoutes = (allRoutes) =>
//     allRoutes.map((route) => {
//       if (route.collapse) {
//         return getRoutes(route.collapse);
//       }

//       if (route.route) {
//         return <Route exact path={route.route} element={route.component} key={route.key} />;
//       }

//       return null;
//     });

//   const configsButton = (
//     <MDBox
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       width="3.25rem"
//       height="3.25rem"
//       bgColor="white"
//       shadow="sm"
//       borderRadius="50%"
//       position="fixed"
//       right="2rem"
//       bottom="2rem"
//       zIndex={99}
//       color="dark"
//       sx={{ cursor: "pointer" }}
//       onClick={handleConfiguratorOpen}
//     >
//       <Icon fontSize="small" color="inherit">
//         settings
//       </Icon>
//     </MDBox>
//   );

//   return 
//     <>
//       <Sidenav
//         color={sidenavColor}
//         brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
//         brandName="Material Dashboard 2"
//         routes={routes}
//         onMouseEnter={handleOnMouseEnter}
//         onMouseLeave={handleOnMouseLeave}
//       />
//       <Configurator />
//       {configsButton}
//     </>
//   )
// }
// { layout === "vr" && <Configurator /> }
//       <Routes>
//         {getRoutes(routes)}
//         <Route path="*" element={<Navigate to="/dashboard" />} />
//       </Routes>
//       // <NavBar token={token} setToken={setToken} />
//       // <ApplicationViews token={token} setToken={setToken} />


  
// }
