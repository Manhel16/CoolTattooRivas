import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";
import usePageTitle from "../usePageTitle";
export default function SobreNosotros() {
  usePageTitle("Sobre Nosotros");
  return (
    <>
      <Header />
      <h1>Sobre nosotros</h1>
      <p>
        ¡Bienvenidos a Cool Tattoo Rivas! Desde 2006, nos hemos consolidado como
        el epicentro del arte corporal excepcional. Nuestro legado de más de una
        década se ha forjado a través de la pasión por el detalle y la
        dedicación a la creatividad sin límites. En nuestro estudio, encontrarás
        una fusión única de talento, experiencia y compromiso con la excelencia.
        Con tatuadores experimentados en una variedad de géneros, desde el
        tradicional hasta el realismo, nos enorgullece ofrecer un abanico
        diverso de estilos que reflejan la individualidad de cada cliente.
        Creemos en la colaboración estrecha con nuestros clientes, asegurando
        que cada diseño sea una expresión auténtica de su visión única. Nuestra
        filosofía se basa en la creencia de que los tatuajes son más que simples
        obras de arte; son vehículos para la autodescubrimiento y la expresión
        personal. En Cool Tattoo Rivas, no solo creamos tatuajes, sino que
        también creamos experiencias que perduran toda la vida. Desde el momento
        en que entras por nuestras puertas, te invitamos a un viaje emocionante
        hacia la materialización de tus sueños. Además de nuestro compromiso con
        la excelencia artística, priorizamos la higiene y la seguridad en todas
        nuestras prácticas. Cumplimos con los más altos estándares de limpieza y
        esterilización, garantizando un entorno seguro y cómodo para nuestros
        clientes. Gracias por ser parte de nuestra historia desde hace más de
        una década. Únete a nosotros y descubre el poder transformador del arte
        del tatuaje en Cool Tattoo Rivas.
      </p>
      <Footer />
    </>
  );
}
