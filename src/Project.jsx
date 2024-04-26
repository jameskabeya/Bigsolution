// import Oneproject from "./Oneproject"
export default function Project() {
    return (
        <div>
            <div className="flex p-6 justify-between">
                <p className="text-2xl font-bold">Projects</p>
                <div className="border bg-white w-[40%] mr-10 flex gap-2 h-10">
                    <img className="w-5" src="./src/assets/search.svg" alt="" />
                    <input placeholder="write something" className="border-none focus:outline-none" type="text" />
                </div>
            </div>
        </div>
    )
}