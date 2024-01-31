import { IoMdNotifications, IoMdSearch } from "react-icons/io"

const Header = () => {
    return (
        <div className="flex w-full justify-between p-5">
            <div>Overview</div>
            <nav className="flex justify-between gap-4">
                <div className="flex justify-between items-center gap-4 border-r-2 border-gray-200 pr-4">
                    <IoMdSearch />
                    <IoMdNotifications />
                </div>
                <div className="flex justify-between items-center gap-4">
                    <p>Ahmad Ubaidillah</p>
                    <p>Pict</p>
                </div>
            </nav>
        </div>
    )
}

export default Header