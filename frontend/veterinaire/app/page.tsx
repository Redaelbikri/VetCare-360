
import 'bootstrap/dist/css/bootstrap.min.css';
import Exemple from './components/Exemple';
import "./globals.css";
import Footer from './components/Footer';
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'react-bootstrap';
export default function Home() {
  const animals = [
    {
      name: 'Bella',
      image: '/images/dog1.jpg',
      description: 'Chienne affectueuse et joueuse.',
    },
    {
      name: 'Milo',
      image: '/images/cat1.jpg',
      description: 'Chat curieux et calme.',
    },
    {
      name: 'Luna',
      image: '/images/rabbit1.jpg',
      description: 'Lapin doux et intelligent.',
    },
    {
      name: 'Rocky',
      image: '/images/dog2.jpg',
      description: 'Chien énergique et fidèle.',
    },
  ];
  return (
    <>
      <div className='app'>
        <div className='bg'>
          <Exemple />
          <div className="container mt-5 mb-5">
            <div className="animal-care-text-transparent container my-5">
              <h2 className="title mb-3">Prendre soin des animaux</h2>
              <Container className="my-5">
                <Row>
                  <Col md={{ span: 8, offset: 2 }}>
                    <div className="p-4 rounded shadow-sm" style={{ backdropFilter: 'blur(5px)', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                      <h2 className="mb-3 text-center text-white">
                        👋 Bienvenue sur <strong>VitCare</strong>
                      </h2>
                      <p className="text-white">
                        Nous sommes ravis de vous accueillir sur <strong>VitCare</strong>, une solution dédiée à la gestion et au suivi des soins de vos animaux .
                      </p>
                      <p className="text-white">
                        Notre site a été conçu pour faciliter la vie des <strong>propriétaires d’animaux</strong>, des <strong>vétérinaires</strong> et des <strong>professionnels du secteur animalier</strong>. Grâce à une interface intuitive et moderne, <strong>VitCare</strong> vous permet de :
                      </p>
                      <ul className="text-white">
                        <li>📋 Gérer les dossiers médicaux de vos animaux</li>
                        <li>🩺 Planifier et suivre les visites médicales</li>
                        <li>👨‍⚕️ Trouver et contacter un vétérinaire rapidement</li>
                        <li>🐶 Ajouter et consulter les profils des animaux</li>
                        <li>🗂️ Organiser les informations importantes (vaccinations, traitements, antécédents, etc.)</li>
                      </ul>
                      <p className="text-center text-white mt-4">
                        Merci de votre visite, et n’hésitez pas à explorer toutes les fonctionnalités que nous vous proposons !
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div></div>
        </div>
      </div><Footer />
    </>
  );
}
