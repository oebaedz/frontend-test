import { FaChartPie, FaHeadSideVirus, FaSearchLocation, FaTicketAlt, FaVoteYea, } from "react-icons/fa";
import { IoIosPaper, IoIosPeople, IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const links = [
        {
            name: 'Overview',
            link: '/',
            icon: <FaChartPie />
        },
        {
            name: "Tickets",
            link: '/tickets',
            icon: <FaTicketAlt />
        },
        {
            name: "Ideas",
            link: '/ideas',
            icon: <FaHeadSideVirus />
        },
        {
            name: "Contacts",
            link: '/contacts',
            icon: <IoIosPeople />
        },
        {
            name: "Agents",
            link: '/agents',
            icon: <FaSearchLocation />
        },
        {
            name: "Articles",
            link: '/articles',
            icon: <IoIosPaper />
        }
    ]

    return (
        <div className="flex flex-col gap-10">
            <div className="font-bold text-xl mt-4">
                Dashboard Kit
            </div>
            <div>
                <div className="flex flex-col gap-2 border-b border-gray-200 pb-5">
                    {links.map((link, i) => {
                        return (
                            <Link to={link.link} className="flex items-center ml-20 gap-2" key={i}>
                                {link.icon}
                                {link.name}
                            </Link>
                        )
                    })}
                </div>

                <div className="flex flex-col gap-2 mt-5">
                    <Link to="/settings" className="flex items-center ml-20 gap-2" >
                        <IoMdSettings />
                        Settings
                    </Link>
                    <Link to='/subs' className="flex items-center ml-20 gap-2" >
                        <FaVoteYea />
                        Subcription
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar