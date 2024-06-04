import React from "react";
import styles from './Perfil.module.css';

const Perfil = ({ imc, classificacao }) => {
    return (
        <div className={styles.resultado}>
            {imc && (
                <>
                    <h2>Seu IMC: {imc}</h2>
                    <h3>Classificação: {classificacao}</h3>
                </>
            )}
        </div>
    )
}

export default Perfil;