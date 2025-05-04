'use client';
import { Button, Card, CardBody, CardText, CardTitle, FormControl, InputGroup } from "react-bootstrap";
import Exemple from "../components/Exemple";
import { useState } from "react";
import "../globals.css";
import { useRouter } from 'next/navigation';
import Footer from "../components/Footer";
export default function ex() {
    const router = useRouter();
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [tele, setTele] = useState("");
    const [adresse, setAdesse] = useState("");
    const [ville, setVille] = useState("");
    const Createtitulaire = () => {
        fetch('http://localhost:5000/proprietaires', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                nom: nom,
                prenom: prenom,
                telephone: tele,
                adresse: adresse,
                ville: ville
            })
        })
            .then(res => res.json())
            .then(data => {
                const id = data._id;
                if (id) {
                    alert("Propriétaire créé !");
                    router.push(`/titulaire?id=${id}`);// Redirection dynamique
                } else {
                    console.error("ID introuvable dans la réponse.");
                }
            })
            .catch(error => console.error('Erreur création propriétaire:', error));
    }
    return (
        <>
            <div className='bg'>
                <Exemple />
                <div className="container mt-5">
                    <Card>
                        <CardBody>
                            <div className="salam m-5 fw-bold">
                                <CardTitle >Ajouter Un Nouveau Titulaire </CardTitle>
                            </div>
                            <CardText>
                                <div className="div">
                                    <input type="text" placeholder="nom" onChange={e => setNom(e.target.value)} /><br /><br />
                                    <input type="text" placeholder="prenom" onChange={e => setPrenom(e.target.value)} /><br /><br />
                                    <input type="number" placeholder="telephone" onChange={e => setTele(e.target.value)} /><br /><br />
                                    <input type="text" placeholder="adresse" onChange={e => setAdesse(e.target.value)} /><br /><br />
                                    <input type="text" placeholder="ville" onChange={e => setVille(e.target.value)} /><br /><br />
                                    <Button onClick={Createtitulaire}>Creer le proprietaire </Button>
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>

            </div >
            <Footer />
        </>
    );
}