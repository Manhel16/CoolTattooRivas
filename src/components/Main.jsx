import React, { useRef } from "react";
import { Link } from "../Link";

export default function Main() {
  const videoRef = useRef(null);

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Vuelve al principio del video
      videoRef.current.play(); // Comienza la reproducción
    }
  };
  return (
    <>
      
        {/* <h2>Un poco de nosotros</h2> */}
        {/* <video
          ref={videoRef}
          src="src/assets/video/video-general(1).mp4"
          style={{ width: "70%", height: "40%" }}
          autoPlay
          muted
          onEnded={restartVideo}
        ></video> */}
      

      {/* Sección de los tatuadores */}
      <div>
        <h2>Tatuadores</h2>
        <div className="tattoo-artists d-flex flex-row justify-content-around m-4">
          <Link className="tattoo-artist" to="/bio-aitor">
            <img
              src="src/assets/img/aitor.jpg"
              alt="Tatuador 1"
              style={{ width: "350px", height: "350px" }}
            />
            <p>Aitor</p>
          </Link>

          <Link className="tattoo-artist" to="/bio-chal">
            <img
              src="src/assets/img/chal.jpg"
              alt="Tatuador 2"
              style={{ width: "350px", height: "350px" }}
            />
            <p>Chal</p>
          </Link>
        </div>
      </div>
      {/* Sección de la historia y misión */}
      <div>
        <h2>Quienes somos</h2>
        <p>
          ¡Bienvenidos a Cool Tattoo Rivas! Desde 2006, somos el hogar del arte
          corporal excepcional. Con tatuadores expertos en una variedad de
          estilos, desde lo tradicional hasta el realismo, colaboramos
          estrechamente con nuestros clientes para crear diseños únicos y
          personalizados. Priorizamos la excelencia artística, la higiene y la
          seguridad en todas nuestras prácticas. Únete a nosotros en un viaje
          hacia la autodescubrimiento y la expresión artística. ¡Gracias por ser
          parte de nuestra historia durante más de una década!
        </p>
        <button>
          <Link to="/about">Conocer mas</Link>
        </button>
      </div>
    </>
  );
}
