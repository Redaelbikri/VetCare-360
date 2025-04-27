import InputGroupText from "react-bootstrap/esm/InputGroupText";
import Exemple from "../components/Exemple";
import "../globals.css";
import { Card, CardBody, CardText, CardTitle, Form, InputGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
export default function () {
    return (
        <>
            <div className='bg'>
                <Exemple />
                <div className="container mt-5">
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
                                <InputGroup className="mb-3">
                                    <InputGroupText id="basic-addon1"></InputGroupText>
                                    <FormControl
                                        placeholder="Nom de famille"
                                        aria-label="fname"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <Button>Chercher le titulaire </Button>
                                <br /><br />
                                <Button>Ajouter un titulaire</Button>
                            </CardText>
                        </CardBody>
                    </Card>
                </div></div >
        </>
    );
}