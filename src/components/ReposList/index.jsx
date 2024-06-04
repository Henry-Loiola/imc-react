import React, { useEffect, useState } from 'react';
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [deuErro, setDeuErro] = useState(false);

    useEffect(() => {
        setEstaCarregando(true);
        setDeuErro(false);

        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then((res) => {
            if (!res.ok) {
            throw new Error('Usuário não encontrado');
            }
            return res.json();
        })
        .then((resJson) => {
            setRepos(resJson);
            setEstaCarregando(false);
        })
        .catch((error) => {
            console.error(error);
            setDeuErro(true);
            setEstaCarregando(false);
        });
    }, [nomeUsuario]);

    if (estaCarregando) {
        return <h1>Carregando...</h1>;
    }

    if (deuErro) {
        return <h1>Erro: Usuário não encontrado</h1>;
    }

    return (
        <div className={styles.container}>
        <ul className={styles.list}>
            {repos.map(({ id, name, language, html_url }) => (
            <li className={styles.listItem} key={id}>
                <div className={styles.itemName}>
                <b>Nome:</b> {name}
                </div>
                <div className={styles.itemLanguage}>
                <b>Linguagem:</b> {language}
                </div>
                <a className={styles.itemLink} target="_blank" rel="noopener noreferrer" href={html_url}>
                Visitar no GitHub
                </a>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default ReposList;
