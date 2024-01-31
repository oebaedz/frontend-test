import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {
    const [data, setData] = useState({})

    // useEffect(() => {
    //     const url = "https://madindarullughah.zendesk.com/api/v2/tickets"
    //     // const url = 'https://your_subdomain.zendesk.com/api/v2/groups.json'
    //     const user = 'oebaedz@gmail.com'
    //     const pwd = 'G3rbangdwk'
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(res => setData(res.data))
    //         .then(console.log(data))
    // }, [])

    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-wrap md:flex-nowrap gap-4">
                <div className="flex flex-col lg:w-1/4 border py-3 gap-2 cursor-pointer hover:text-blue-500 hover:border-blue-500 rounded-lg justify-center items-center">
                    <p>Unresolved</p>
                    <p className="font-bold text-2xl">16</p>
                </div>
                <div className="flex flex-col lg:w-1/4 border py-3 gap-2 cursor-pointer hover:text-blue-500 hover:border-blue-500 rounded-lg justify-center items-center">
                    <p>Unresolved</p>
                    <p className="font-bold text-2xl">16</p>
                </div>
                <div className="flex flex-col lg:w-1/4 border py-3 gap-2 cursor-pointer hover:text-blue-500 hover:border-blue-500 rounded-lg justify-center items-center">
                    <p>Unresolved</p>
                    <p className="font-bold text-2xl">16</p>
                </div>
                <div className="flex flex-col lg:w-1/4 border py-3 gap-2 cursor-pointer hover:text-blue-500 hover:border-blue-500 rounded-lg justify-center items-center">
                    <p>Unresolved</p>
                    <p className="font-bold text-2xl">16</p>
                </div>
            </div>
            <div className="flex">
                <div className="w-3/4 bg-slate-100">Chart</div>
                <div className="flex flex-col w-1/4">
                    <div className="flex flex-col px-10 border-b py-3 gap-1 cursor-pointer hover:text-blue-500 justify-center items-center">
                        <p className="text-sm">Unresolved</p>
                        <p className="font-bold text-lg">16</p>
                    </div>
                    <div className="flex flex-col px-10 border-b py-3 gap-1 cursor-pointer hover:text-blue-500 justify-center items-center">
                        <p className="text-sm">Unresolved</p>
                        <p className="font-bold text-lg">16</p>
                    </div>
                    <div className="flex flex-col px-10 border-b py-3 gap-1 cursor-pointer hover:text-blue-500 justify-center items-center">
                        <p className="text-sm">Unresolved</p>
                        <p className="font-bold text-lg">16</p>
                    </div>
                    <div className="flex flex-col px-10 border-b py-3 gap-1 cursor-pointer hover:text-blue-500 justify-center items-center">
                        <p className="text-sm">Unresolved</p>
                        <p className="font-bold text-lg">16</p>
                    </div>
                    <div className="flex flex-col px-10 border-b py-3 gap-1 cursor-pointer hover:text-blue-500 justify-center items-center">
                        <p className="text-sm">Unresolved</p>
                        <p className="font-bold text-lg">16</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 justify-between text-sm">
                <div className="flex flex-col gap-2 border rounded-lg p-5 w-1/2">
                    <div className="flex justify-between">
                        <div className="text-left">
                            <p className="font-medium text-base">Un Tickets</p>
                            <p className="text-gray-400">Group: <span className="text-gray-600">Support</span></p>
                        </div>
                        <div>
                            <Link className="text-blue-400 cursor-pointer hover:text-blue-500">View Details</Link>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between py-4 border-b">
                            <p>Waiting</p>
                            <p>4238</p>
                        </div>
                        <div className="flex justify-between py-4 border-b">
                            <p>Waiting</p>
                            <p>4238</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 border rounded-lg p-5 w-1/2">
                </div>
            </div>
        </div>
    )
}

export default Home