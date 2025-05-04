'use client';
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import Exemple from "../components/Exemple";
import "../globals.css";
import { Card, CardBody, CardText, CardTitle, Form, InputGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";

export default function () {
    const [nom, setNom] = useState("");
    const [proprietaires, setProprietaires] = useState<{ _id: string, nom: string; prenom: string; telephone: string; adresse: string; ville: string; }[]>([]);
    const Affichertitulaire = () => {
        if (nom) {
            fetch(`http://localhost:5000/proprietaires?nom=${nom}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setProprietaires(data);
                })
                .catch(error => console.error('Error fetching data:', error));
        } else {
            console.log("Veuillez entrer un nom.");
        }
    }

    const router = useRouter();

    const handleSelect = (id: string) => {
        if (id) {
            alert("ok" + id);
            router.push(`/Ajout_pet?id=${id}`); // Redirection dynamique
        }
    }
    const handle = (id: string) => {
        if (id) {
            alert("salam " + id);

            router.push(`/titulaire?id=${id}`); // Redirection dynamique
        }
    }

    return (
        <>
            <div className='bg'>
                <Exemple />
                <div className="container mt-2">
                    <Card>
                        <CardBody>
                            <div className="salam m-5 fw-bold">
                                <CardTitle >Trouver les titulaires!!</CardTitle>
                            </div>
                            <CardText>
                                <label className="form-label fw-bold text-danger">
                                    Nom de famille :
                                </label>
                                <br /><br />
                                <input type="text" placeholder="nom" onChange={e => setNom(e.target.value)} /><br /><br />
                                <div className="row">
                                    <div className="col-3">
                                        <Button onClick={Affichertitulaire}>Chercher le titulaire </Button>
                                    </div>
                                    <div className="col-9 ps-5">
                                        <Link href="./Ajout_titulaire">
                                            <Button>Ajouter un titulaire</Button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="container mt-5">
                                    <Card >
                                        <CardBody>
                                            <div className="salam m-5 fw-bold">
                                                <CardTitle>Les titulaires avec se nom saisie !</CardTitle>
                                            </div>
                                            <CardText>
                                                <div className="table-responsive m-5">
                                                    <table className="table table-striped table-bordered m-5">
                                                        <thead>
                                                            <tr>
                                                                <th>Nom</th>
                                                                <th>Prenom</th>
                                                                <th>Telephone</th>
                                                                <th>Adresse</th>
                                                                <th>Ville</th>
                                                                <th>Les actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {proprietaires.map(proprietaire => (
                                                                <tr>
                                                                    <td>{proprietaire.nom}</td>
                                                                    <td >{proprietaire.prenom}</td>
                                                                    <td>{proprietaire.telephone}</td>
                                                                    <td>{proprietaire.adresse}</td>
                                                                    <td>{proprietaire.ville}</td>
                                                                    <td>
                                                                        <Button onClick={() => handle(proprietaire._id)}>Afficher ce proprietaire</Button>

                                                                        <br /><br />
                                                                        <Button onClick={() => handleSelect(proprietaire._id)}> Ajouter un animal</Button>
                                                                    </td>
                                                                </tr>))}
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </CardText>
                                        </CardBody>
                                    </Card></div>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div ><Footer />

        </>
    );
}