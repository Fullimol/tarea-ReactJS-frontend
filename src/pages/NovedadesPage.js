import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

import '../styles/pages/NovedadesPage.css';

// esto es lo que traigo del backend, la API que cree con "express" en el backend
const NovedadesPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data)
            setLoading(false);
        };
        cargarNovedades();
    }, []);

    return (
        <section className='novedades'>
            <h1 className="titu-novedades"><span>N</span>ovedades</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                novedades.map(item => <NovedadItem key={item.id}
                    title={item.titulo} subtitle={item.subtitulo}
                    imagen={item.imagen} body={item.cuerpo} />)
            )}
        </section>
    );
}


export default NovedadesPage;