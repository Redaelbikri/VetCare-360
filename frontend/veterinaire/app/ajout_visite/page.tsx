'use client';
import { useEffect, useState } from "react";
import Exemple from "../components/Exemple";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
import Footer from "../components/Footer";

export default function AjoutVisite() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    type Proprietaire = {
        _id: string;
        nom: string;
        prenom: string;
        telephone: string;
        adresse: string;
        ville: string;
    };
    type Animal = {
        nom: string;
        type: string;
        birthday: string;
        proprietaire: Proprietaire;
        _id: string; // Ajout de l'ID de l'animal
    };
    const [animal, setAnimal] = useState<Animal | null>(null);
    const [date, setDate] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [selectedAnimal, setSelectedAnimal] = useState<string>("");
    const [selectedVeterinaire, setSelectedVeterinaire] = useState<string>("");
    type Veterinaire = {
        firstName: string;
        lastName: string;
        specialties: string;
        _id: string; // Ajout de l'ID du vétérinaire
    };
    const [Veterinaires, setVeterinaires] = useState<Veterinaire[]>([]);
    const router = useRouter();

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5000/animals/${id}`)  // Passer l'id dans l'URL
                .then(response => response.json())
                .then(data => {
                    setAnimal(data);
                    setSelectedAnimal(data._id); // Initialiser selectedAnimal avec l'ID de l'animal
                })
                .catch(error => console.error('Error fetching data:', error));
        }

        fetch('http://localhost:5000/veterinaires')
            .then(response => response.json())
            .then(veterinaires => setVeterinaires(veterinaires))
            .catch(error => console.error('Error fetching data:', error));


    }, [id]);

    const AjVisite = (nom: any) => {
        fetch(`http://localhost:5000/visites`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                animal: selectedAnimal,
                date: date,
                description: description,
                veterinaire: selectedVeterinaire
            })
        })
            .then(res => res.json())

            .then(data => { // Sauvegarde les données envoyées dans l'état
                if (animal?.proprietaire._id) {
                    alert("Visite créée !");
                    router.push(`/titulaire?&animalProprietaireId=${animal?.proprietaire._id}`); // Redirection dynamique
                }
                else {
                    alert("ID introuvable dans la réponse.");
                }
            })
            .catch(error => console.error('Erreur création visite:', error));
    };

    return (
        <>
            <div className="bg">
                <Exemple />
                <div className="container mt-5">
                    <div className="salam m-5 fw-bold">
                        <h1>Ajouter une Visite</h1>
                    </div>
                    <form className="m-5">
                        <div className="mb-3">
                            <label htmlFor="animal" className="form-label">Animal :</label>
                            <select className="form-select" value={selectedAnimal} disabled>
                                <option value={animal?._id}>{animal?.nom} ({animal?.type})</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date :</label>
                            <input type="date" className="form-control" name="date" onChange={e => setDate(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description :</label>
                            <textarea name="description" id="description" className="form-control" onChange={e => setDescription(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="veterinaire" className="form-label">Vétérinaire :</label>
                            <select className="form-select" value={selectedVeterinaire} onChange={e => setSelectedVeterinaire(e.target.value)}>
                                {Veterinaires.map(veterinaire => (
                                    <option key={veterinaire._id} value={veterinaire._id}>
                                        {veterinaire.firstName} {veterinaire.lastName}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </form>
                    <Button variant="info" onClick={() => AjVisite(animal?.proprietaire._id)}>Ajouter Visite</Button>
                </div>
            </div>
            <Footer />
        </>
    );
}
