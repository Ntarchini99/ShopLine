import '../HomePage/HomePage.css';
import React from 'react';

function HomePage() {
  return (
    <div>
      <section className="hero">
        <h2>Bienvenido a Mi Sitio Web</h2>
        <p>Tu fuente confiable de información y servicios.</p>
        <a href="#">Más información</a>
      </section>

      <section className="features">
        <div className="feature">
          <h3>Feature 1</h3>
          <p>Descripción de la característica 1.</p>
        </div>
        <div className="feature">
          <h3>Feature 2</h3>
          <p>Descripción de la característica 2.</p>
        </div>
        <div className="feature">
          <h3>Feature 3</h3>
          <p>Descripción de la característica 3.</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
