'use client';
import { Card, CardBody, CardTitle, CardText, Button } from 'react-bootstrap';
import Exemple from "../components/Exemple";
import "../globals.css";
import "./style.css";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function Affichertitulaire() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');  // Récupérer l'ID depuis l'URL
    const [proprietaires, setProprietaires] = useState<{ nom: string; prenom: string; telephone: string; adresse: string; ville: string; }[]>([]);
    const [animals, setAnimaux] = useState<{ nom: string; birthday: string; type: string; proprietaire: string; }[]>([]);
    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5000/proprietaires/${id}`)  // Passer l'id dans l'URL
                .then(response => response.json())
                .then(data => {
                    setProprietaires(data)
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [id]);
    const router = useRouter();
    const allerpet = () => {
        if (id) {
            alert(id);
            router.push(`/Ajout_pet?id=${id}`); // Redirection dynamique
        }
    }
    const afficherAnimaux = () => {
        fetch(`http://localhost:5000/animaux/proprietaire/${id}`)  // Passer l'id dans l'URL
            .then(response => response.json())
            .then(data => {
                setAnimaux(data)
            })
            .catch(error => console.error('Error fetching data:', error));

    }
    return (
        <>
            <div className='bg'>
                <Exemple />
                <div className="container mt-5">
                    <Card>
                        <CardBody>
                            <CardTitle >Information de Titulaire </CardTitle>
                            <CardText>
                                <ul className="list-group list-group-flush fs-5">
                                    <li className="list-group-item"><strong>Prénom :</strong> {proprietaires.prenom}</li>
                                    <li className="list-group-item"><strong>Téléphone :</strong> {proprietaires.telephone}</li>
                                    <li className="list-group-item"><strong>Adresse :</strong> {proprietaires.adresse}</li>
                                    <li className="list-group-item"><strong>Ville :</strong> {proprietaires.ville}</li>
                                </ul>
                                <br /><br />
                                <Button onClick={allerpet}>Ajouter un animal </Button>
                                <Button onClick={afficherAnimaux}>afficher les animaux actuelle </Button>
                                <br /><br />

                                <div className="border rounded p-3 my-2 bg-light shadow-sm">

                                    {animals.map((animal) => (
                                        <ul>
                                            <li><strong>Nom :</strong> {animal.nom}</li>
                                            <li><strong>Date de naissance :</strong> {new Date(animal.birthday).toLocaleDateString()}</li>
                                            <li><strong>Type :</strong> {animal.type}</li>
                                            <li><strong>Propriétaire :</strong> {animal.proprietaire.nom} {animal.proprietaire.prenom}</li>
                                        </ul>
                                    ))}


                                    <Button variant="info">Ajouter visite</Button>
                                </div>


                            </CardText>
                        </CardBody>
                    </Card>
                </div></div >
        </>
    );
}