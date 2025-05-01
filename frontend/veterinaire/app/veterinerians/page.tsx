'use client';
import Exemple from '../components/Exemple';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import "../globals.css";
import { use, useEffect, useState } from 'react';
function veterinerians() {
    type Veterinaire = {
        firstName: string;
        lastName: string;
        specialties: string;
    };
    const [veterinaires, setVeterinaires] = useState<Veterinaire[]>([]);
    //<Veterinaire[]> : indique que l’état est un tableau d’objets de type Veterinaire
    useEffect(() => {
        fetch('http://localhost:5000/veterinaires')
            .then(response => response.json())
            .then(veterinaires => setVeterinaires(veterinaires))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (<>
        <div className='app'>
            <div className='bg'>
                <Exemple />
                <div className="container mt-5">
                    <Card>
                        <CardBody>
                            <div className="salam m-5 fw-bold">
                                <CardTitle >Les Veterinaires</CardTitle>
                            </div>
                            <CardText>
                                <div className="table-responsive m-5">
                                    <table className="table table-striped table-bordered m-5">
                                        <thead>
                                            <tr>
                                                <th>Prenom</th>
                                                <th>Nom</th>
                                                <th>specialite</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {veterinaires.map(veterinaire => (
                                                <tr key={veterinaire.firstName}>
                                                    <td >{veterinaire.firstName}</td>
                                                    <td>{veterinaire.lastName}</td>
                                                    <td>{veterinaire.specialties}</td>
                                                </tr>))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div >
    </>)
}

export default veterinerians;
