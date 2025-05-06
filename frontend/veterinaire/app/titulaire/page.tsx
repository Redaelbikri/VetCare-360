'use client';
import { Card, CardBody, CardTitle, CardText, Button } from 'react-bootstrap';
import Exemple from "../components/Exemple";
import "./style.css";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Footer from '../components/Footer';


export default function Affichertitulaire() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const animalpropid = searchParams.get('animalProprietaireId');

    const [proprietaires, setProprietaires] = useState<{ nom: string; prenom: string; telephone: string; adresse: string; ville: string; }[]>([]);
    type Animal = {
        _id: string;
        nom: string;
        type: string;
        birthday: string;
        proprietaire: {
            nom: string;
            prenom: string;
        };
    };
    type Visite = {
        date: string;
        description: string;
        animal: Animal;
        veterinaire: {
            firstName: string;
            lastName: string;
            specialties: string;
        };
    };
    const [animals, setAnimaux] = useState<Animal[]>([]);
    const [visites, setVisites] = useState<Visite[]>([]);
    useEffect(() => {
        const proprietaireId = animalpropid || id;
        if (proprietaireId) {
            fetch(`http://localhost:5000/proprietaires/${proprietaireId}`)
                .then(response => response.json())
                .then(data => {
                    setProprietaires(data)
                })
                .catch(error => console.error('Error fetching data:', error));
            fetch(`http://localhost:5000/animaux/proprietaire/${proprietaireId}`)
                .then(response => response.json())
                .then(data1 => {
                    setAnimaux(data1);

                })
                .catch(error => console.error('Error fetching data:', error));
        }

    }, [id]);
    const router = useRouter();
    const allerpet = () => {
        const proprietaireId = animalpropid || id;
        if (proprietaireId) {

            router.push(`/Ajout_pet?id=${proprietaireId}`);
        }
    }
    const handleSelect = (id: string) => {
        if (id) {
            router.push(`/ajout_visite?id=${id}`);
        }
    }
    const handle = (id: string) => {
        if (id) {
            fetch(`http://localhost:5000/visites/${id}`)
                .then(response => response.json())
                .then(data => {
                    setVisites(data)
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    }
    const naffichepas = (id: string) => {
        if (id) {
            setVisites([]);
        }
    }

    return (
        <>
            <div className='b'>
                <Exemple />
                <div className="container mt-5 mb-5">

                    <Card>
                        <CardBody>
                            <CardTitle ><div className="p-4 mb-4 bg-primary text-white fw-bold rounded shadow">
                                <h2><strong>Information de Proprietaire  :</strong></h2>
                            </div> </CardTitle>
                            <CardText>
                                <ul className="list-group list-group-flush fs-5">
                                    <li className="list-group-item"><strong>Nom :</strong> {proprietaires.prenom} {proprietaires.nom}</li>
                                    <li className="list-group-item"><strong>Téléphone :</strong> {proprietaires.telephone}</li>
                                    <li className="list-group-item"><strong>Adresse :</strong> {proprietaires.adresse}</li>
                                    <li className="list-group-item"><strong>Ville :</strong> {proprietaires.ville}</li>
                                </ul>
                                <Button onClick={allerpet} variant="info" className="mt-3">Ajouter un animal</Button>

                                <div className="border rounded p-3 my-2 bg-light shadow-sm mt-4">
                                    <div className="p-4 mb-4 bg-primary text-white fw-bold rounded shadow">
                                        <h2><strong>Information de ces animaux :</strong></h2>
                                    </div>
                                    <div className="row">
                                        {animals.length > 0 ? (
                                            animals.map((animal) => {
                                                const visitesAnimal = Array.isArray(visites)
                                                    ? visites.filter(visite => visite.animal._id === animal._id)
                                                    : [];

                                                return (
                                                    <div className="col-4" key={animal._id}>
                                                        <ul className="list-group list-group-flush">
                                                            <li className="list-group-item"><strong>Nom :</strong> {animal.nom}</li>
                                                            <li className="list-group-item"><strong>Date de naissance :</strong> {new Date(animal.birthday).toLocaleDateString()}</li>
                                                            <li className="list-group-item"><strong>Type :</strong> {animal.type}</li>
                                                            <li className="list-group-item"><strong>Propriétaire :</strong> {animal.proprietaire.nom} {animal.proprietaire.prenom}</li>
                                                        </ul>
                                                        <div className="text-center mt-3">
                                                            <div className="row">
                                                                <div className="col-3 me-3">
                                                                    <Button variant="info" onClick={() => handleSelect(animal._id)}>Ajouter visite</Button>
                                                                </div>
                                                                <div className="col-3 me-3">
                                                                    <Button variant="info" onClick={() => handle(animal._id)}>Afficher visite</Button>
                                                                </div>
                                                                <div className="col-3 ms-5">
                                                                    <Button variant="secondary" onClick={() => naffichepas(animal._id)}>cacher visite</Button>
                                                                </div></div></div>
                                                        <br /><hr />
                                                        <div className="p-2 mb-2 bg-primary text-white fw-bold rounded shadow">
                                                            <h2><strong>Information de ces visites :</strong></h2>
                                                            {visitesAnimal.length > 0 ? (

                                                                visitesAnimal.map((visite) => (
                                                                    <ul className="list-group list-group-flush" key={visite._id}>
                                                                        <li className="list-group-item"><strong>Date :</strong> {new Date(visite.date).toLocaleDateString()}</li>
                                                                        <li className="list-group-item"><strong>Description :</strong> {visite.description}</li>
                                                                        <li className="list-group-item"><strong>Animal :</strong> {visite.animal.nom}</li>
                                                                        <li className="list-group-item"><strong>Vétérinaire :</strong> {visite.veterinaire.firstName} {visite.veterinaire.lastName}</li>
                                                                    </ul>
                                                                ))
                                                            ) : (
                                                                <p>Aucune visite à afficher.</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        ) : (
                                            <p>Aucun animal à afficher.</p>
                                        )}
                                    </div>
                                </div>
                            </CardText>

                        </CardBody>
                    </Card>

                </div></div >
            <Footer />
            <br /><br /><br />
        </>
    );
}