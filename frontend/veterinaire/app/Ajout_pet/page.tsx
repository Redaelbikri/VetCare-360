'use client';
import { Button, Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import Exemple from "../components/Exemple";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
                    alert("animal créé !" + id);
                    router.push(`/titulaire?id=${id}`);
                }
            })
            .catch(error => console.error('Erreur création animal:', error))
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
                                <input type="text" placeholder="nom" onChange={e => setNom(e.target.value)} /><br /><br />
                                <input type="date" placeholder="date de naissance " onChange={e => setBd(e.target.value)} /><br /><br />
                                <input type="text" placeholder="type d'animal" onChange={e => setType(e.target.value)} /><br /><br />
                                <select className="form-select" value={selectedProprietaire} onChange={e => setSelectedProprietaire(e.target.value)}>
                                    <option value="">{proprietaires.nom} {proprietaires.prenom}</option>
                                </select><br /><br />

                                < Button onClick={Createpet(proprietaires._id)}>Creer l'animal </Button>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    );
}
function setProprietaires(data: any) {
    throw new Error("Function not implemented.");
}

