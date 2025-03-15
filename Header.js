import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1> Blog de Ensamblador </h1>
      
      <nav>
        <a href="/Ejemplo_imprimir" style={styles.navLink}>Ejemplo para imprimir</a>
        <a href="/Ejemplo_leer" style={styles.navLink}>Ejemplo para leer</a>
        <a href="/Ejemplo_sumar" style={styles.navLink}>Ejemplo para sumar</a>
        <a href="/Ejemplo_ciclar" style={styles.navLink}>Ejemplo para ciclar</a>
        <a href="/Ejemplo_calculadora" style={styles.navLink}>Ejemplo de calculadora</a>
        <a href="/Ejemplo_calculadora_y_ciclar" style={styles.navLink}>Ejemplo para calcular y ciclar</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#424949',
    color: 'black',
    padding: '1rem',
    textAlign: 'center',
  },
  navLink: {
    color: 'black',
    margin: '0 1rem',
    textDecoration: 'none',
  },
};

export default Header;