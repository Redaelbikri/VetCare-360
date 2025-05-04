
import 'bootstrap/dist/css/bootstrap.min.css';
import Exemple from './components/Exemple';
import "./globals.css";
import Footer from './components/Footer';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
export default function Home() {
  return (
    <div className='app'>
      <div className='bg'>
        <Exemple />
        <div className="animal-care-text-transparent container my-5">
          <h2 className="title mb-3">Prendre soin des animaux</h2>
          <p className="description">
            En tant que vétérinaire, prendre soin des animaux va bien au-delà de la simple médecine.
            C’est une mission de compassion, d’écoute et d’engagement. Chaque animal mérite attention,
            respect et bienveillance, car derrière chaque regard se cache une vie précieuse.
            Chez <strong>Vitecare</strong>, nous croyons que soigner un animal, c’est aussi soutenir son bien-être émotionnel
            et celui de son propriétaire. 🐾
          </p>
        </div>


      </div>
      <Footer />
    </div>
  );
}
