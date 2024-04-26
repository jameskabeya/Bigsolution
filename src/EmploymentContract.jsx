import React, { useState } from 'react';

function EmploymentContract() {
    const [contractData, setContractData] = useState({
        employeeName: '',
        startDate: '',
        endDate: '',
        position: '',
        salary: '',
        photo: ''
    });

    const handleChange = (e) => {
        if (e.target.name === 'photo') {
            setContractData({
                ...contractData,
                photo: URL.createObjectURL(e.target.files[0])
            });
        } else {
            setContractData({
                ...contractData,
                [e.target.name]: e.target.value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contract data submitted:', contractData);
        setContractData({
            employeeName: '',
            startDate: '',
            endDate: '',
            position: '',
            salary: '',
            photo: ''
        });
    };

    return (
        <div className="max-w-md mt-20 z-index mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Fiche de Contrat de Travail</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="employeeName" className="block font-semibold mb-2">Employee Name:</label>
                    <input
                        type="text"
                        id="employeeName"
                        name="employeeName"
                        value={contractData.employeeName}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="startDate" className="block font-semibold mb-2">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={contractData.startDate}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="endDate" className="block font-semibold mb-2">End Date:</label>
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={contractData.endDate}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="position" className="block font-semibold mb-2">Poste:</label>
                    <input
                        type="text"
                        id="position"
                        name="position"
                        value={contractData.position}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="position" className="block font-semibold mb-2">Adress</label>
                    <input
                        type="text"
                        id="position"
                        name="position"
                        value={contractData.position}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="salary" className="block font-semibold mb-2">Salary:</label>
                    <input
                        type="number"
                        id="salary"
                        name="salary"
                        value={contractData.salary}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Upload Puctire</label>
                    <label htmlFor="photo" className=' rounded-md p-2 w-full'>
                        <input
                            type="file"
                            id="photo"
                            name="photo"
                            onChange={handleChange}
                            className="hidden"
                        />
                        <img className='w-20' src="./src/assets/avatar.png" alt="" />
                    </label>
                </div>
                {contractData.photo && (
                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Employee Photo:</label>
                        <img src={contractData.photo} alt="Employee" className="rounded-full h-20 w-20 object-cover" />
                    </div>
                )}
                <div className='flex justify-between'>
                    <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-300">Enregistrer</button>
                    <button className='bg-pink-500 text-white font-semibold p-2 rounded-md'>Voir les contract</button>
                </div>
            </form>
        </div>
    );
}

export default EmploymentContract;
