import { Link } from 'react-router-dom';
import '../HomePage/HomePage.css';
import React from 'react';

function HomePage() {
  return (
    <div>
      <section className="hero">
        <h2>Bienvenido a Mi Sitio Web</h2>
        <p>Tu fuente confiable de información y servicios.</p>
        <Link to= "/ItemListContainer" className='button-home'>Ir a Comprar</Link>
      </section>
    </div>
  );
}

export default HomePage;
