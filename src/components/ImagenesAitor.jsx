import React, {useState, useEffect} from "react";

const ImagenesAitor = () =>{
    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {
        const obtenerImagenes = async () => {
            try {
                const nombreTatuador = 'Andrew';
                const response = await fetch(`http://7409-139-47-81-118.ngrok-free.app/api/ImagenesTattoo/tatuador/Andrew`);
                const data = await response.json();
                setImagenes(data);
            } catch (error) {
                console.error('Error al obtener las imágenes:', error);
            }
        };

        obtenerImagenes();
    }, []);

    // Dividir las imágenes en dos filas
    const primeraFila = imagenes.slice(0, 3);
    const segundaFila = imagenes.slice(3, 6);

    return (
        <div id="imagenesContainer" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {primeraFila.map((imagen, index) => (
                    <img
                        key={index}
                        src={`data:image/jpeg;base64,${imagen.fotografia}`}
                        alt={imagen.titulo}
                        style={{ width: '340px', marginRight: index < 2 ? '20px' : '0' }}
                    />
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                {segundaFila.map((imagen, index) => (
                    <img
                        key={index}
                        src={`data:image/jpeg;base64,${imagen.fotografia}`}
                        alt={imagen.titulo}
                        style={{ width: '340px', marginRight: index < 2 ? '20px' : '0' }}
                    />
                ))}
            </div>
        </div>
    );
};
export default ImagenesAitor;