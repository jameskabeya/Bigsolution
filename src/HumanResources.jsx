import React, { useState } from 'react';

function HumanResources() {
    const [employees, setEmployees] = useState([]);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        department: '',
        position: '',
        salary: '',
        naissance: '',
        sexe: '',
        Adresse: '',
        email: '',
        statut: '',
        number: '',
        identity: '',
        basesalary: '',
        bonus: '',
        impots: '',
        summary: '',
        congé: '',
        performance: '',
        contrat: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.id !== '') {
            const updatedEmployees = employees.map((employee) => {
                if (employee.id === formData.id) {
                    return formData;
                }
                return employee;
            });
            setEmployees(updatedEmployees);
        } else {
            setEmployees([...employees, { ...formData, id: Date.now().toString() }]);
        }
        setFormData({
            id: '',
            name: '',
            department: '',
            position: '',
            salary: '',
            naissance: '',
            sexe: '',
            Adresse: '',
            email: '',
            statut: '',
            number: '',
            identity: '',
            basesalary: '',
            bonus: '',
            impots: '',
            summary: '',
            congé: '',
            performance: '',
            contrat: '',
        });
    };

    const handleEdit = (employee) => {
        setFormData({ ...employee });
    };

    const handleDelete = (id) => {
        const updatedEmployees = employees.filter((employee) => employee.id !== id);
        setEmployees(updatedEmployees);
    };

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Human Resources Management</h2>
            <form onSubmit={handleSubmit} className="mt-20 gap-10 justify-between flex">
                <input type="hidden" name="id" value={formData.id} />
                <div className='w-1/3'>
                    <div className='flex flex-col'>
                        <div className='items-center gap-4 mt-4'>
                            <p className='w-32'>Name :</p>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Employee Name" className="border border-gray-300 rounded-md p-2 mr-2" />
                        </div>
                        <div className='mt-4 gap-1 items-center'>
                            <p className=''>Departement:</p>
                            <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" className="border border-gray-300 rounded-md p-2 mr-2" />
                        </div>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <div className=' items-center'>
                            <p className=''>Position:</p>
                            <input type="text" name="position" value={formData.position} onChange={handleChange} placeholder="Position" className="border border-gray-300 rounded-md p-2 mr-2" />
                        </div>
                        <div className='items-center mt-4'>
                            <p className='w-32'>Salaire :</p>
                            <input type="" name="salary" value={formData.salary} onChange={handleChange} placeholder="Salary" className="border border-gray-300 rounded-md p-2 mr-2" />
                        </div>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <div className=' gap-1 items-center'>
                            <p className=''>Date de Naissance:</p>
                            <input type="text" name="naissance" value={formData.naissance} onChange={handleChange} placeholder="Salary" className="border border-gray-300 rounded-md p-2 mr-2" />
                        </div>
                        <div className=' gap-1 mt-4 items-center'>
                            <p className='w-32'>Sexe:</p>
                            <input type="text" name="sexe" value={formData.sexe} onChange={handleChange} placeholder="Salary" className="border border-gray-300 rounded-md p-2 mr-2" />
                        </div>
                    </div>

                </div>
                <div className='w-1/3'>
                    <div className='flex flex-col mt-4'>
                        <div className='mt-4 gap-1 items-center'>
                            <p className='w-32'>Adress :</p>
                            <input type="text" name="salary" value={formData.Adresse} onChange={handleChange} placeholder="Salary" className="border border-gray-300 rounded-md p-2 mr-2" />
                        </div>
                        <div className='mt-4 items-center'>
                            <p className='w-32'>E-mail :</p>
                            <input type="number" name="salary" value={formData.email} onChange={handleChange} placeholder="Salary" className="border border-gray-300 rounded-md p-2 mr-2" />
                        </div>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <div className='mt-4 gap-1 items-center'>
                            <p className=''>Statut d'emploi:</p>
                            <input type="number" name="salary" value={formData.statut} onChange={handleChange} placeholder="Salary" className="border border-gray-300 rounded-md p-2 mr-2" />
                        </div>
                    </div>
                    <div className='gap-4'>
                        <div className='mt-4 gap-1 items-center'>
                            <p>Identifiant:</p>
                            <input type="number" name="salary" value={formData.identity} onChange={handleChange} placeholder="Salary" className="border border-gray-300 rounded-md p-2 mr-2" />
                        </div>
                        <div className='mt-4 gap-1 items-center'>
                            <p>Salaire de base :</p>
                            <input type="number" name="salary" value={formData.basesalary} onChange={handleChange} placeholder="Salary" className="border border-gray-300 rounded-md p-2 mr-2" />
                        </div>
                    </div>
                    <div className='gap-4 mt-4'>
                        <div className='gap-1 mt-4 items-center'>
                            <p>Primes ou bonus :</p>
                            <input type="number" name="salary" value={formData.bonus} onChange={handleChange} placeholder="Salary" className="border border-gray-300 rounded-md p-2 mr-2" />
                        </div>
                        <div className='mt-4 gap-1 items-center'>
                            <p>Retenues sur salaire (impôts) :</p>
                            <input type="number" name="salary" value={formData.impots} onChange={handleChange} placeholder="Salary" className="border border-gray-300 rounded-md p-2 mr-2" />
                        </div>
                    </div>
                </div>
                <div className='w-1/3'>
                    <div className="gap-4 mt-4" >
                        <div className="mt-4 gap-1 items-center" >
                            <p>Horaires de travail :</p>
                            <input type="number" name="salary" value={formData.summary} onChange={handleChange} placeholder="Salary" className="border border-gray-300 rounded-md p-2 mr-2" />
                        </div>
                        <div className='mt-4 gap-1 items-center'>
                            <p>Type de Contrat :</p>
                            <input type="number" name="salary" value={formData.contrat} onChange={handleChange} placeholder="Salary" className="border border-gray-300 rounded-md p-2 mr-2" />
                        </div>
                    </div>
                    <div className="gap-4 mt-4" >
                        <div className="mt-4 gap-1 mt-4 items-center" >
                            <p>Jours de congé :</p>
                            <input type="number" name="number" value={formData.congé} onChange={handleChange} placeholder="Salary" className="border border-gray-300 rounded-md p-2 mr-2" />
                        </div>
                        <div className="mt-4 gap-1 mt-4 items-center" >
                            <p>Évaluations de performance :</p>
                            <input type="number" name="salary" value={formData.performance} onChange={handleChange} placeholder="Salary" className="border border-gray-300 rounded-md p-2 mr-2" />
                        </div>

                        <div className='mt-4 gap-1 mt-4 items-center'>
                            <p className=''>Numéro d'identification de l'employé :</p>
                            <input type="number" name="salary" value={formData.number} onChange={handleChange} placeholder="Salary" className="border border-gray-300 rounded-md p-2 mr-2" />
                        </div>
                    </div>
                    <button type="submit" className="bg-blue-500 mt-5 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600">
                        {formData.id !== '' ? 'Update' : 'Add'} Employee
                    </button>
                </div>

            </form>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id} className="border-b border-gray-300 py-2">
                        <div className="flex justify-between">
                            <div>
                                <p className="font-semibold">{employee.name}</p>
                                <p>Department: {employee.department}</p>
                                <p>Poste occupé: {employee.position}</p>
                                <p>Date de naissance: {employee.position}</p>
                                <p>Sexe: {employee.position}</p>
                                <p>Adresse: {employee.position}</p>
                                <p>Adresse e-mail: {employee.position}</p>
                                <p>Statut d'emploi: {employee.position}</p>
                                <p>Numéro de téléphone: {employee.position}</p>
                                <p>Salaire ou taux horaire: {employee.salary}</p>
                                <p>Numéro d'identification de l'employé: {employee.salary}</p>
                                <p>Salaire de base: {employee.salary}</p>
                                <p>Primes ou bonus : {employee.salary}</p>
                                <p>Retenues sur salaire (impôts): {employee.salary}</p>
                                <p>Horaires de travail: {employee.salary}</p>
                                <p>Jours de congé: {employee.salary}</p>
                                <p>Évaluations de performance: {employee.salary}</p>
                                <p>Contrat de travail: {employee.salary}</p>
                            </div>
                            <div>
                                <button onClick={() => handleEdit(employee)} className="text-blue-500 font-semibold mr-2">Edit</button>
                                <button onClick={() => handleDelete(employee.id)} className="text-red-500 font-semibold">Delete</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HumanResources;
