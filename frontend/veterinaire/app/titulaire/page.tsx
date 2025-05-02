'use client';
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import Exemple from "../components/Exemple";
import "../globals.css";
import "./style.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Affichertitulaire() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');  // Récupérer l'ID depuis l'URL
    const [proprietaires, setProprietaires] = useState<{ nom: string; prenom: string; telephone: string; adresse: string; ville: string; }[]>([]);
    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5000/proprietaires/${id}`)  // Passer l'id dans l'URL
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setProprietaires(data) // Traite les données récupérées
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [id]);

    return (
        <>
            <div className='bg'>
                <Exemple />
                <div className="container mt-5">
                    <Card>
                        <CardBody>
                            <div className="salam m-5 fw-bold">
                                <CardTitle >Information de Titulaire </CardTitle>
                            </div>
                            <CardText>
                                <ul>
                                    <li > Prenom : {proprietaires.prenom}</li>
                                    <li> Telephone : {proprietaires.telephone}</li>
                                    <li>adresse : {proprietaires.adresse}</li>
                                    <li>ville : {proprietaires.ville}</li>
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </div></div >
        </>
    );
}