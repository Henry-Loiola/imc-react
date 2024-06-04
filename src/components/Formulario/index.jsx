import React, { useState, useEffect } from 'react';
import styles from './Formulario.module.css';

const Formulario = ({ onCalcular }) => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    useEffect(() => {
        console.log("O componente Formulario foi montado.");

    return () => {
        console.log("O componente Formulario foi desmontado.");
    };
    }, []);

    useEffect(() => {
        console.log("Altura ou peso mudaram:", { altura, peso });
    }, [altura, peso]);

    const handleSubmit = (evento) => {
        evento.preventDefault();
        onCalcular(altura, peso);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
        <input 
            type="number" 
            placeholder="Altura (cm)" 
            onChange={({ target }) => setAltura(parseFloat(target.value))} 
            className={styles.input} 
        />
        <input 
            type="number" 
            placeholder="Peso (kg)" 
            onChange={({ target }) => setPeso(parseFloat(target.value))} 
            className={styles.input} 
        />
        <button type="submit" className={styles.button}>Calcular IMC</button>
        </form>
    );
};

export default Formulario;
