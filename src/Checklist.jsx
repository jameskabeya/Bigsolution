export default function Checklist() {
    return (
        <div className="p-4 h-screen mt-20 ml-[20%]">
            <div className="w-full mt-10">
                <button className="flex-end bg-green-500 p-4 rounded-2xl font-bold text-white">Resgister</button>
                <table className="w-full mt-4 border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2">Matricule</th>
                            <th className="p-2">Nom</th>
                            <th className="p-2">Site Affecter</th>
                            <th className="p-2">Date</th>
                            <th className="p-2">Position d'agent</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border bg-blue-400">
                            <td className="p-2 border">9570 kt 23648</td>
                            <td className="p-2 border">James KABEYA</td>
                            <td className="p-2 border">CCTV Camera</td>
                            <td className="p-2 border">19.Avril.2024</td>
                            <td className="p-2 flex">
                                <input className="border ml-20" type="checkbox" />
                                <input className="border ml-20" type="checkbox" />
                            </td>
                        </tr>
                        <tr className="border bg-blue-400">
                            <td className="p-2 border">9570 kt 23648</td>
                            <td className="p-2 border">James KABEYA</td>
                            <td className="p-2 border">CCTV Camera</td>
                            <td className="p-2 border">19.Avril.2024</td>
                            <td className="p-2 flex">
                                <div className="bg-green-500 ">
                                    <input className="border ml-20" type="checkbox" />
                                </div>
                                <div className="bg-red-500">
                                    <input className="border ml-20" type="checkbox" />
                                </div>
                            </td>
                        </tr>
                        <tr className="border bg-blue-400">
                            <td className="p-2 border">9570 kt 23648</td>
                            <td className="p-2 border">James KABEYA</td>
                            <td className="p-2 border">CCTV Camera</td>
                            <td className="p-2 border">19.Avril.2024</td>
                            <td className="p-2 flex">
                                <input className="border ml-20" type="checkbox" />
                                <input className="border ml-20" type="checkbox" />
                            </td>
                        </tr>
                        <tr className="border bg-blue-400">
                            <td className="p-2 border">9570 kt 23648</td>
                            <td className="p-2 border">James KABEYA</td>
                            <td className="p-2 border">CCTV Camera</td>
                            <td className="p-2 border">19.Avril.2024</td>
                            <td className="p-2 flex">
                                <input className="border ml-20" type="checkbox" />
                                <input className="border ml-20" type="checkbox" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}