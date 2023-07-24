import {BiSolidDashboard,BiSolidUserPin} from 'react-icons/bi'
import {RiFileTransferFill} from 'react-icons/ri'
import {AiOutlineSchedule , AiFillSetting} from 'react-icons/ai'
import {FaClipboardCheck} from 'react-icons/fa'

 const Showsidebar = [
  {
    title: "Board.",
    path: "/",
    icon: <FaClipboardCheck />,
    cName: "nav-text",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <BiSolidDashboard/>,
    cName: "nav-text",
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: <RiFileTransferFill />,
    cName: "nav-text",
  },
  {
    title: "Schedules",
    path: "/schedules",
    icon: <AiOutlineSchedule />,
    cName: "nav-text",
  },
  {
    title: "User",
    path: "/user",
    icon: <BiSolidUserPin />,
    cName: "nav-text",
  },
  {
    title: "Setting",
    path: "/setting",
    icon: <AiFillSetting />,
    cName: "nav-text",
  },
];
export default Showsidebar