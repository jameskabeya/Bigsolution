import HeadLogo from "./HeadLogo"
export default function Login() {
    return (
        <div>
            <HeadLogo />
            <div className="flex">
                <div className="">
                    <img src="./src/assets/image.svg" alt="" />
                </div>
                <div className="p-40">
                    <div className="mt-10">
                        <h2 className="text-2xl font-bold">Welcome Back</h2>
                        <label>Welcome Back please enter you detailabel</label>
                        <div className="mt-5">
                            <div className="">
                                <span>E-mail</span><br />
                                <input className="border-none focus:outline-none" type="text" />
                            </div>
                            <div className="border-y">
                                <span>Password</span><br />
                                <input className="border-none focus:outline-none" type="password" />
                            </div>
                            <div className="flex mt-4 justify-between">
                                <div className="gap-2 flex">
                                    <input type="checkbox" />
                                    <label>Terms & Conditions </label>
                                </div>
                                <div>
                                    <label className="underline">Forgot Password</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="bg-black w-[20rem] h-10 rounded-3xl mt-4 text-white">Log in</button><br />
                    <div className="flex justify-between mt-5">
                        <label>Don’t have an account?</label>
                        <p className="underline">Sign up for free</p>
                    </div>
                </div>
            </div>
        </div>
    )
}