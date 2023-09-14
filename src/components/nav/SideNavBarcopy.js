import { useRef, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import SimpleBar from 'simplebar-react';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBoxOpen, faChartPie, faCog, faFileAlt, faHandHoldingUsd, faSignOutAlt, faTable, faTimes, faCalendarAlt, faMapPin, faInbox, faRocket } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button, Dropdown, Accordion, Navbar } from '@themesberg/react-bootstrap';
// import ThemesbergLogo from "../assets/img/themesberg.svg";
// import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
// import ProfilePicture from "../assets/img/team/profile-picture-3.jpg"; 
import { RoutesCstm } from "../../managers/utils/routes";
// import "./NavBarcopy.css"

export const SideNavBarDash = ({ token, setToken }) => {
  const navigate = useNavigate()
  const navbar = useRef()
  const hamburger = useRef()

  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const NavItem = (props) => {
    const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
    const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };


    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
            {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  // const LogoutNavItem = (setToken) => {
  //   const { signOutTokenClear } = setToken;
  //   const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
  //   const navItemClassName = link === pathname ? "active" : "";
  //   const linkProps = external ? { href: link } : { as: Link, to: link };

  //   return (
  //     <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
  //       <Nav.Link {...linkProps} target={target} className={classNames}>
  //         <span>
  //           {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
  //           {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

  //           <span className="sidebar-text">{title}</span>
  //         </span>
  //         {badgeText ? (
  //           <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
  //         ) : null}
  //       </Nav.Link>
  //     </Nav.Item>
  //   );
  // };

  const clearToken = () => setToken('')

    return (
      <>

        <Nav className="flex-column pt-3 pt-md-0">

          <NavItem title="Home" to="/" />
          <NavItem title="Games" to="/games" />
          <NavItem title="Tickets" to="/tickets" />

          <Dropdown.Divider className="my-3 border-indigo" />

          <Button bsPrefix="text" href="/login" variant="primary" className="m-3">Signout</Button>
          <NavItem title="Logoutitemnav" to="/login" />
          <Button as={Link} variant="secondary" size="xs"  className="text-dark">
            <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Logout
          </Button>

          {/* <Dropdown.Item className="fw-bold">
            <FontAwesomeIcon icon={faSignOutAlt} className="text-danger me-2" /> Logout
          </Dropdown.Item>
          <Button as={Link} variant="secondary" size="xs" to={RoutesCstm.Signin.path} className="text-dark">
            <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Logout
          </Button> */}

        </Nav>

      </>
    );
  };

// export default (props = {}) => {
//   const location = useLocation();
//   const { pathname } = location;
//   const [show, setShow] = useState(false);
//   const showClass = show ? "show" : "";

//   const onCollapse = () => setShow(!show);

//   const CollapsableNavItem = (props) => {
//     const { eventKey, title, icon, children = null } = props;
//     const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

//     return (
//       <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
//         <Accordion.Item eventKey={eventKey}>
//           <Accordion.Button as={Nav.Link} className="d-flex justify-content-between align-items-center">
//             <span>
//               <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span>
//               <span className="sidebar-text">{title}</span>
//             </span>
//           </Accordion.Button>
//           <Accordion.Body className="multi-level">
//             <Nav className="flex-column">
//               {children}
//             </Nav>
//           </Accordion.Body>
//         </Accordion.Item>
//       </Accordion>
//     );
//   };

//   const NavItem = (props) => {
//     const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
//     const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
//     const navItemClassName = link === pathname ? "active" : "";
//     const linkProps = external ? { href: link } : { as: Link, to: link };
  

//     return (
//       <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
//         <Nav.Link {...linkProps} target={target} className={classNames}>
//           <span>
//             {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
//             {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

//             <span className="sidebar-text">{title}</span>
//           </span>
//           {badgeText ? (
//             <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
//           ) : null}
//         </Nav.Link>
//       </Nav.Item>
//     );
//   };

