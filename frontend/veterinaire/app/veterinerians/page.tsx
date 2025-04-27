import Exemple from '../components/Exemple';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import "../globals.css";
function veterinerians() {
    const myarray = [{ id: 2, name: "yahya essalhi", speciality: "radiology" }
        , { id: 3, name: "hamza essalhi", speciality: "surgery" }
        , { id: 4, name: "sohaib essalhi", speciality: "dentistry surgery" }];
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
                                                <th>#</th>
                                                <th>Nom</th>
                                                <th>specialitees</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {myarray.map(item => (
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.speciality}</td>
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
