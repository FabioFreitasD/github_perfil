import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(false); // Inicialize aqui
  const [nomeUsuario, setNomeUsuario] = useState('');


  return (
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}
      <button type="button" onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}>toggle form</button> */}
    </>
  )
}

export default App
