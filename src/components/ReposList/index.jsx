import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaEstaCarregando, setEstaCarregando] = useState(true);
    const [falhaErro, setFalhaErro] = useState(false);

    useEffect(() => {
        setEstaCarregando(true);
        setFalhaErro(false);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Erro ao buscar repositórios');
                }
                return res.json();
            })
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 3000);
            })
            .catch(e => {
                setEstaCarregando(false);
                setFalhaErro(true);
            });
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaEstaCarregando ? (
                <h1>Carregando...</h1>
            ) : falhaErro ? (
                <h1>Erro ao carregar os repositórios</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b> {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>linguagem:</b> {language}
                            </div>
                            <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ReposList;
