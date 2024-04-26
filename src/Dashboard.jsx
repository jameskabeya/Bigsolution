import Siderbar from "./Sidebar"
import Header from "./Header"
import Project from './Project'
import Oneproject from "./Oneproject"
import Tasks from "./PayrollList"

// import SiderbarItem from "./SiderbarItem"
import Containercharts from "./Containercharts"
export default function Dashboard() {
    return (
        <div className="">
            <Header />
            <div className="flex">
                <div className="w-1/6 overflow-hidden ">
                    <Siderbar />
                </div>
                
            </div>
        </div>
    )
}
{/* <div className="w-5/6 bg-gray-200"> */}
                    {/* <Containercharts /> */}
                    {/* <div>
                        <Project />
                        <div className="flex gap-2 p-2 justify-between">
                            <Oneproject />
                            <Oneproject />
                            <Oneproject />
                        </div>
                        <div className="flex gap-2 p-2 justify-between">
                            <Oneproject />
                            <Oneproject />
                            <Oneproject />
                        </div> */}
                        // <Tasks />
                        {/* </div> */}