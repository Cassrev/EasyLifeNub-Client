import { Flowbite, Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

export const SideNavBar = ({ token, setToken }) => {
  const navigate = useNavigate();

  return (
    <Flowbite
      theme={{theme: {sidebar: {root: {inner: "bg-green-300"}}}}}>

      <Sidebar
        className="fixed flex font-normal duration-75 h-fit w-fit">

        <Sidebar.Items
          className='space-y-2 font-medium justify-start'>
          <Sidebar.ItemGroup>

            <Sidebar.Item
              className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100'
              href="/"
              icon={HiChartPie}
            >
              <span class="ml-3">Dashboard</span>
            </Sidebar.Item>

            <Sidebar.Item
              className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100'
              href="/games"
              icon={HiChartPie}
            >
              <span class="ml-3">Games</span>
            </Sidebar.Item>

            <Sidebar.Item
              className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100'
              href="/tickets"
              icon={HiInbox}
            >
              <span class="ml-3">Tickets</span>

            </Sidebar.Item>
          </Sidebar.ItemGroup>

          <Sidebar.ItemGroup>
            <Sidebar.Item
              className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100'
              icon={HiArrowSmRight}
              onClick={() => {
                setToken('')
                navigate('/login')
              }}>
              <span class="ml-3">Logout</span>

            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </Flowbite>
  );
};
