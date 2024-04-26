import { Link } from "react-router-dom";

export default function ContractType() {
    return (
        <div className="max-w-3xl mt-[8%] shadow-lg mx-auto p-4">
            <div>
                <h1 className="font-bold text-2xl flex justify-center">Type de Contrat</h1>
            </div>
            <div className="mt-10">
                {/* <Link to={`Contract`}> */}
                    <p className="font-bold text-blue-500">Contrat à durée déterminée (CDD): </p>
                {/* </Link> */}
                <p>Ce contrat a une date de début et une date de fin prédéterminées.</p>
                <p> Il est souvent utilisé pour des projets temporaires ou saisonniers.</p>
            </div>
            <div className="mt-10">
                <p className="font-bold text-blue-500">Contrat à durée indéterminée (CDI) : </p>
                <p> Ce contrat n'a pas de date de fin spécifique et se poursuit jusqu'à ce qu'il soit résilié par l'employeur ou le salarié. </p>
                <p>C'est le type de contrat le plus courant et offre une plus grande sécurité d'emploi.</p>
            </div>
            <div className="mt-10">
                <p className="font-bold text-blue-500">Contrat de travail temporaire :</p>
                <p>Ce contrat est conclu entre une entreprise de travail temporaire et un travailleur intérimaire. Il permet à l'entreprise de travail </p>
                <p>temporaire de fournir des employés à une entreprise cliente pour une durée déterminée.</p>
            </div>
            <div className="mt-10">
                <p className="font-bold text-blue-500">Contrat d'apprentissage :</p>
                <p> Ce contrat est destiné aux jeunes âgés de 16 à 25 ans (ou plus dans certains cas) qui souhaitent acquérir une qualification professionnelle</p>
                <p> en alternant entre formation en entreprise et formation en centre de formation d'apprentis</p>
            </div>
            <div className="mt-10">
                <p className="font-bold text-blue-500">Contrat de travail à temps partiel :</p>
                <p>Ce contrat prévoit un nombre d'heures de travail inférieur à celui d'un contrat à temps plein. </p>
                <p>Il peut être conclu pour une durée déterminée ou indéterminée.</p>
            </div>
        </div>
    )
} 