import { useState } from "react"
export default function Editproject() {

    const [employees, setEmployees] = useState([]);
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        lastname: "",
        matricule: "",
        phoneNumber: "",
        automaticHour: "",
        salary: "",
        site: "",
    });
    const [file, setFile] = useState();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEmployee = {
            ...formData,
            file: file ? URL.createObjectURL(file) : null,
            id: Date.now().toString(),
        };
        setEmployees([...employees, newEmployee]);
        setFormData({
            id: "",
            name: "",
            lastname: "",
            matricule: "",
            phoneNumber: "",
            automaticHour: "",
            salary: "",
            site: "",
        });
        setFile(null);
    };

    const handleEdit = (employee) => {
        setFormData({ ...employee });
    };

    const handleDelete = (id) => {
        const updatedEmployees = employees.filter((employee) => employee.id !== id);
        setEmployees(updatedEmployees);
    };

    const handleImageChange = (e) => {
        setFile(e.target.files[0]);
    };


    return (
        <div className="p-4 mt-[5%] flex justify-between h-screen ml-[20%] ">
            {/* <div className=" w-auto ">
                <div className="bg-white rounded-3xl p-8 items-center">
                    <div className="">
                        <img src="./src/assets/Foto.svg" alt="" />
                        <div className="">
                            <p className="font-bold mt-2 flex justify-center">Yash Ghori</p>
                            <p className="flex justify-center">Ahmedabad, Gujarat</p>
                            <p className="flex justify-center">Lubumbashi</p>
                        </div>
                        <div className="border-y gap-2">
                            <div className="mt-4 flex gap-2 justify-center">
                                <img src="./src/assets/Vector.svg" alt="" />
                                <p>UI-Intern</p>
                            </div>
                            <div className="flex justify-center gap-2 mt-4">
                                <img src="./src/assets/block.svg" alt="" />
                                <p>on-teak</p>
                            </div>
                        </div>
                        <div className="flex mt-2 gap-2">
                            <img src="./src/assets/add.svg" alt="" />
                            <p>+2437048144030</p>
                        </div>
                        <div className="flex gap-2 mt-4">
                            <img src="./src/assets/scraps.svg" alt="" />
                            <p>yghori@asite.com</p>
                        </div>
                        <div className="flex gap-2 mt-4">
                            <img src="./src/assets/gallery.svg" alt="" />
                            <p>PDT-I</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white  mt-4 rounded-3xl p-2">
                    <div className="flex justify-between">
                        <p>Total work done</p>
                        <div className="bg-gray-500">
                            <p className="p-2 rounded-2xl">This Week</p>
                        </div>
                    </div>
                    <img src="./src/assets/level.svg" alt="" />
                </div>
            </div> */}
            <div className="">
                <div className="w-5/7 shadow-lg justify-between rounded-3xl p-2 bg-white">
                    <form onSubmit={handleSubmit}>
                        <div className="">
                            <p className="text-2xl mt-5">Edit Profile</p>
                        </div>
                        <div className="mt-4 ">
                            {/* <div className="border">
                                <p>First Name</p>
                                {/* <input value={formData.name} name="name" onChange={handleChange} className="focus:outline-none " placeholder="First Name" type="text" /> */}
                            {/* </div> */}
                            <div className="flex justify-center mt-4">
                                <label className="p-4  h-40 w-40 rounded-full" htmlFor="title">Upload file
                                    <img className="w-20" src="./src/assets/avatar.png" alt="" />
                                </label>
                                <input className="hidden" type="file" id="title" onChange={handleImageChange} accept="image/*" />
                            </div>
                            <div className="border">
                                <p>Last Name</p>
                                <input value={formData.lastname} name="lastname" onChange={handleChange} className="focus:outline-none " placeholder="Last Name" type="text" />
                            </div>
                        </div>
                        <div className="mt-4 gap-2 flex">
                            <div className="border">
                                <p>Numero</p>
                                <input value={formData.phoneNumber} name="phoneNumber" onChange={handleChange} className="focus:outline-none " placeholder="0990777367" type="text" />
                            </div>
                            <div className="flex gap-2">
                                <div className="border">
                                    <p>Date de creation</p>
                                    <input value={formData.automaticHour} name="automaticHour" onChange={handleChange} className="focus:outline-none w-40" placeholder="Date" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 gap-4 flex">
                            <div className="border">
                                <p>Matricule</p>
                                <input value={formData.matricule} onChange={handleChange} name="matricule" className="focus:outline-none" placeholder="Matricule" type="text" />
                            </div>
                            <div className="border">
                                <p>Site</p>
                                <input value={formData.site} onChange={handleChange} name="site" className="focus:outline-none" placeholder="Site" type="text" />
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="mt-4 w-60 border">
                                <p className="flex justify-center">Salary</p>
                                <input value={formData.salary} onChange={handleChange} name="salary" className="focus:outline-none flex justify-center" placeholder="Salary" type="text" />
                            </div>
                        </div>
                        <div className="flex justify-center mt-5">
                            <button type="submit" className="bg-blue-500 mt-4 w-40 p-3 rounded-3xl text-white">{formData.id !== '' ? 'Update' : 'Add'}</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-[30%] p-4 rounded-3xl bg-white">
                <div className="flex justify-between">
                    <p className="font-bold">Liste des Agents</p>
                    <p>View All</p>
                </div>
                <div>
                    {employees.map((item, index) => (
                        <ul key={index}>
                            <li className="shadow-lg gap-2 mt-5 justify-between">
                                <li className="flex gap-4">
                                    <li>
                                        {item.file && <img className="w-20 ml-4 h-20 rounded-full" src={item.file} alt="Selected Image" />}

                                    </li>
                                    <li>
                                        <div className="flex gap-4">
                                            <p>Matricule :</p>
                                            <p className="flex justify-center ml-3">{item.matricule}</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <p>Telephone :</p>
                                            <p className="flex justify-center ml-2">{item.phoneNumber}</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <p>Date :</p>
                                            <p className="flex justify-center ml-10">{item.automaticHour}</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <p>Salaire :</p>
                                            <p className="flex justify-center ml-10">{item.salary}</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <p>Site Affecter :</p>
                                            <p className="flex justify-center ml-2">{item.site}</p>
                                        </div>
                                    </li>
                                </li>
                                <div className="flex justify-center gap-5 mt-5">
                                    <button className="bg-green-500 p-2 rounded-2xl w-20" onClick={() => handleEdit(item)}>Edit</button>
                                    <button className="bg-red-500 p-2 rounded-2xl w-20" onClick={() => handleDelete(item.id)}>Delete</button>
                                </div>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}