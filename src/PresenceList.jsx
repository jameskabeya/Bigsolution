import React, { useState } from 'react';

const PresenceList = () => {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    matricule: '',
    site: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addEntry = () => {
    const { name, matricule, site } = formData;
    if (name && matricule && site) {
      const entry = {
        name: name,
        matricule: matricule,
        site: site,
        time: new Date().toLocaleTimeString(),
        status: ''
      };
      setEntries([...entries, entry]);
      setFormData({
        name: '',
        matricule: '',
        site: ''
      });
    } else {
      alert('Veuillez remplir tous les champs');
    }
  };

  const handlerEdit = (entries) => {
    setFormData ({...entries})
  };

  const markPresence = (index) => {
    const updatedEntries = [...entries];
    updatedEntries[index].status = 'Présent';
    setEntries(updatedEntries);
  };

  const markAbsence = (index) => {
    const updatedEntries = [...entries];
    updatedEntries[index].status = 'Absent';
    setEntries(updatedEntries);
  };

  const handlerDelete = (nameToDelete) => {
    const updatedEntries = entries.filter((entry) => entry.name !== nameToDelete.name);
    setEntries(updatedEntries);
  };
   

  return (
    <div className="container mt-20 p-4 ml-[18%] ">
      <h1 className="text-2xl font-bold mb-4">Liste de Présence</h1>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nom complet"
          className="border border-gray-300 px-4 py-2 mr-2"
        />
        <input
          type="text"
          name="matricule"
          value={formData.matricule}
          onChange={handleChange}
          placeholder="Matricule"
          className="border border-gray-300 px-4 py-2 mr-2"
        />
        <input
          type="text"
          name="site"
          value={formData.site}
          onChange={handleChange}
          placeholder="Site"
          className="border border-gray-300 px-4 py-2 mr-2"
        />
        <button
          onClick={addEntry}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow"
        >
          Ajouter une entrée
        </button>
      </div>
      <table className="border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-400">
            <th className="border border-gray-300 px-4 py-2">Nom</th>
            <th className="border border-gray-300 px-4 py-2">Matricule</th>
            <th className="border border-gray-300 px-4 py-2">Site</th>
            <th className="border border-gray-300 px-4 py-2">Heure d'entrée</th>
            <th className="border border-gray-300 px-4 py-2">Statut</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{entry.name}</td>
              <td className="border border-gray-300 px-4 py-2">{entry.matricule}</td>
              <td className="border border-gray-300 px-4 py-2">{entry.site}</td>
              <td className="border border-gray-300 px-4 py-2">{entry.time}</td>
              <td className="border border-gray-300 px-4 py-2">{entry.status}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded shadow mr-2"
                  onClick={() => markPresence(index)}
                >
                  Présent
                </button>
                <button
                  className="bg-pink-500 text-white px-4 py-2 rounded shadow"
                  onClick={() => markAbsence(index)}
                >
                  Absent
                </button>
                <button onClick={() => handlerDelete (entry)} className='bg-red-500 px-4 py-2 rounded shadow text-white ml-2'>Delete</button>
                <button onClick={() => handlerEdit (entry)} className='bg-blue-500 px-4 py-2 rounded  text-white ml-2'>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PresenceList;
