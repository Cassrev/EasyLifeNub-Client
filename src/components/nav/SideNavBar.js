import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export const SideNavBar = ({ token, setToken }) => {
  const navigate = useNavigate()

  return (
    <Card className="!sticky h-[calc(45vh-2rem)] md:hidden overflow-auto w-fit max-w-[20rem] shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>

        <Link to="/">
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem >
        </Link>

        <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          Games
        </ListItem>

        <Link to="/tickets">
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>

            Tickets
          </ListItem>
        </Link>

        <hr className="my-2 border-blue-gray-50" />

        <Link to="/login">
          <ListItem
            onClick={() => {
              setToken('')
              navigate('/login')
            }}>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </Link>

      </List>
    </Card>
  );
}
