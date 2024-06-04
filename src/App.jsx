import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Perfil from './components/Perfil';
import ReposList from './components/ReposList';
import './global.css';

const App = () => {
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (altura, peso) => {
    const alturaEmMetros = altura / 100;
    const imcCalculado = peso / (alturaEmMetros * alturaEmMetros);
    setImc(imcCalculado.toFixed(2));

    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imcCalculado < 24.9) {
      setClassificacao('Peso normal');
    } else if (imcCalculado < 29.9) {
      setClassificacao('Sobrepeso');
    } else {
      setClassificacao('Obesidade');
    }
  };

  return (
    <div className="app">
      <h1>Calculadora de IMC</h1>
      <Formulario onCalcular={calcularIMC} />
      <Perfil imc={imc} classificacao={classificacao} />
      {/* O componente ReposList pode ser incluído conforme necessário */}
      {/* <ReposList nomeUsuario="seu-usuario" /> */}
    </div>
  );
};

export default App;
