import React, { useState } from 'react';

function PayrollList() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    matricule: '',
    site: '',
    hoursWorked: 0,
    hourlyRate: 0,
    taxRate: 0.2
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
      matricule: '',
      site: '',
      hoursWorked: 0,
      hourlyRate: 0,
      taxRate: 0.2
    });
  };

  const handleEdit = (employee) => {
    setFormData({ ...employee });
  };

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const calculateNetSalary = (employee) => {
    const grossSalary = employee.hoursWorked * employee.hourlyRate;
    const deductions = grossSalary * employee.taxRate;
    const net = grossSalary - deductions;
    return net;
  };

  return (
    <div className="max-w-3xl mt-20 mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-4">COMPTABILITE</h2>
      <h2 className="text-2xl font-semibold mb-4">List de Paie</h2>
      <form onSubmit={handleSubmit} className="mb-4">

        <div className='flex'>
          <div>
            {/* <input type="hidden" name="id" value={formData.id} /> */}
            <p>Nom de L'employer</p>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Employee Name" className="border border-gray-300 rounded-md p-2 mr-2" />
          </div>
          <div>
            <p>Heure de travail</p>
            <input type="number" name="hoursWorked" value={formData.hoursWorked} onChange={handleChange} placeholder="Heure de travail" className="border border-gray-300 rounded-md p-2 mr-2" />
          </div>
          <div>
            <p>Taux horaire</p>
            <input type="number" name="hourlyRate" value={formData.hourlyRate} onChange={handleChange} placeholder="Taux horaire" className="border border-gray-300 rounded-md p-2 mr-2" />
          </div>
          <div>
            <p>Tax Rate</p>
            <input type="number" name="taxRate" value={formData.taxRate} onChange={handleChange} placeholder="Tax Rate" className="border border-gray-300 rounded-md p-2 mr-2" />
          </div>

        </div>
        <div className='flex'>
          <div>
            <p>Matricule</p>
            <input type="text" name="matricule" value={formData.matricule} onChange={handleChange} placeholder="matricule" className="border border-gray-300 rounded-md p-2 mr-2" />
          </div>
          <div>
            <p>Site Affecter</p>
            <input type="text" name="site" value={formData.site} onChange={handleChange} placeholder="Site" className="border border-gray-300 rounded-md p-2 mr-2" />
          </div>
          <button type="submit" className="bg-blue-500 mt-4 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600">
            {formData.id !== '' ? 'Update' : 'Calculate Salary'} 
          </button>
        </div>
      </form>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id} className="border-b border-gray-300 py-2">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">{employee.name}</p>
                <p>Hours Worked: {employee.hoursWorked}</p>
                <p>Hourly Rate: {employee.hourlyRate}</p>
                <p>Tax Rate: {employee.taxRate}</p>
                <p>Matricule: {employee.matricule}</p>
                <p>Site Affecter: {employee.site}</p>
              </div>
              <div>
                <p>Net Salary: ${calculateNetSalary(employee)}</p>
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

export default PayrollList;
