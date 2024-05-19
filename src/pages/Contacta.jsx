import Header from "../components/Header";
import "../App.css"
import Footer from "../components/Footer";
import FormularioContacto from "../components/FormularioContacto";
import usePageTitle from "../usePageTitle";
export default function Contacta() {
  usePageTitle('Contáctanos');
return (
  <>
    <Header />
    <h1>Contacta Con nosotros</h1>
    <p>Para pedir cita o cualquier otra consulta sobre un tatuaje rellena este formulario</p>
    <FormularioContacto/>
    <Footer/>
  </>
);
}