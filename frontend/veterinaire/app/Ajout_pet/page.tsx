'use client';
import { Button, Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import Exemple from "../components/Exemple";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "../globals.css";
import Footer from "../components/Footer";
export default function addpet() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');// Récupérer l'ID depuis l'URL
    const [nom, setNom] = useState("");
    const [bd, setBd] = useState("");
    const [type, setType] = useState("");
    const [proprietaires, setProprietaires] = useState<any[]>([]);
    const [selectedProprietaire, setSelectedProprietaire] = useState("");
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

    const Createpet = (_id: any) => {
        if (!nom || !bd || !type || !_id) {
            alert("Veuillez remplir tous les champs !");
        }
        else {
            fetch(`http://localhost:5000/animaux`
                , {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nom: nom,
                        birthday: bd,
                        type: type,
                        proprietaire: proprietaires
                    })
                })
                .then(res => res.json())
                .then(data => {
                    const id = _id || data._id;
                    if (id) {
                        router.push(`/titulaire?id=${id}`);
                    }
                })
                .catch(error => console.error('Erreur création animal:', error))
        }
    }
    return (
        <>
            <div className='bg'>
                <Exemple />
                <div className="container mt-5">
                    <Card>
                        <CardBody>
                            <div className="salam m-5 fw-bold">
                                <CardTitle >Ajouter Un Nouveau Nouveau animal  </CardTitle>
                            </div>
                            <CardText>
                                <div className="container my-5">

                                    <input type="text" className="form-control form-control-lg mb-3" placeholder="Nom" onChange={e => setNom(e.target.value)} />


                                    <input type="date" className="form-control form-control-lg mb-3" onChange={e => setBd(e.target.value)} />


                                    <input type="text" className="form-control form-control-lg mb-3" placeholder="Type d'animal" onChange={e => setType(e.target.value)} />


                                    <select className="form-select form-select-lg" value={selectedProprietaire} onChange={e => setSelectedProprietaire(e.target.value)}>
                                        <option value="">{proprietaires.nom} {proprietaires.prenom}</option>
                                    </select>
                                </div>
                                < Button onClick={() => Createpet(proprietaires._id)}>Creer l'animal </Button>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div><Footer />
        </>
    );
}

