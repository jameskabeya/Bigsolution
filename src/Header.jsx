export default function Header() {
    return (
        <div className="shadow-lg flex justify-between py-4 px-6 fixed w-full top-0 ">
            <div className="">
                <div>
                    {/* <img src="./src/assets/token.svg" alt="" /> */}
                </div>
                <div className="flex p-2">
                    {/* <div className="border mr-10 flex gap-2 h-10">
                    <img className="w-5" src="./src/assets/search.svg" alt="" />
                    <input placeholder="write something" className="border-none focus:outline-none" type="text" />
                </div> */}
                    <div className="flex h-10 ml-40">
                        {/* <img className="w-5 h-5" src="./src/assets/notify.png" alt="" />
                        <p>Bro James</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}