export default function Oneproject() {
    return (
        <div className="rounded-3xl">
            <div className="p-6 bg-white gap-2 ">
                <div className="flex border-b justify-between">
                    <p className="font-bold">Adoddle</p>
                    <div className="bg-gray-200 p-2">
                        <label className="text-green-600">Completed</label>
                    </div>
                </div>
                <div className="p-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                    <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation </p>
                    <p>ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="flex justify-between">
                    <span className="text-red-500">Deadline :  05 APRIL 2023</span>
                    <img className="w-10" src="./src/assets/folder.svg" alt="" />
                </div>
            </div>
        </div>
    )
}