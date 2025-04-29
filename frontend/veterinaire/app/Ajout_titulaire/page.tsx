import { Button, Card, CardBody, CardText, CardTitle, FormControl, InputGroup } from "react-bootstrap";
import Exemple from "../components/Exemple";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

export default function ex() {
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
                                <label className="form-label fw-bold text-danger">
                                    Prenom :
                                </label>
                                <br /><br />
                                <InputGroup className="mb-3">
                                    <InputGroupText id="basic-addon1"></InputGroupText>
                                    <FormControl
                                        placeholder="Ajouter Votre Prenom"
                                        aria-label="fname"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <label className="form-label fw-bold text-danger">
                                    Nom :
                                </label>
                                <br /><br />
                                <InputGroup className="mb-3">
                                    <InputGroupText id="basic-addon1"></InputGroupText>
                                    <FormControl
                                        placeholder="Ajouter Votre nom"
                                        aria-label="Lname"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <label className="form-label fw-bold text-danger">
                                    ville :
                                </label>
                                <br /><br />
                                <InputGroup className="mb-3">
                                    <InputGroupText id="basic-addon1"></InputGroupText>
                                    <FormControl
                                        placeholder="Ajouter Votre ville"
                                        aria-label="city"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <br /><br />
                                <label className="form-label fw-bold text-danger">
                                    telephone :
                                </label>
                                <br /><br />
                                <InputGroup className="mb-3">
                                    <InputGroupText id="basic-addon1"></InputGroupText>
                                    <FormControl
                                        placeholder="Ajouter Votre telephone"
                                        aria-label="fname"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <Button>Ajouter ce titulaire</Button>
                            </CardText>
                        </CardBody>
                    </Card>
                </div></div >
        </>
    );
}