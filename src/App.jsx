import { useState } from 'react'


function App() {
  const [peso, setPeso] = useState(null);
  const [altura, setAltura] = useState(null);
  const [imc, setImc] = useState(0);
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = (e) => {
    e.preventDefault();
    const resultado = peso / (altura * altura);

    setImc(resultado);

    const classificacao =
      resultado < 1 ? 'Insira um peso ou altura válidos' :
      resultado >= 1 && resultado < 18.5 ? 'Abaixo do peso' :
      resultado >= 18.5 && resultado <= 24.9 ? 'Peso normal' :
      resultado >= 25 && resultado <= 29.9 ? 'Sobrepeso' :
      resultado >= 30 && resultado <= 34.9 ? 'Obesidade grau I' :
      resultado >= 35 && resultado <= 39.9 ? 'Obesidade grau II' :
      'Obesidade grau III';

    setClassificacao(classificacao);
  }

  const formatarImc = (imc) => {
    return imc.toFixed(2).replace('.', ',');
  }

  return (
    <div className='container'>
      <div className='card'>
        <div className='card2'>
          <form className='form'>
            <h1>Calculadora de IMC</h1>
            <div className='field'>
              <input className='input-field' type="number" value={peso} onChange={(e) => setPeso(parseFloat(e.target.value))} placeholder='Peso (kg)' required />
            </div>
            <div className='field'>
              <input className='input-field' type="number" value={altura} onChange={(e) => setAltura(parseFloat(e.target.value))} placeholder='Altura (m)' required />
            </div>
            <div className='btn'>
              <button className='button' onClick={calcularIMC}>Calcular</button>
            </div>
            {
              imc >= 1 ? (
                <div className='result'>
                  <p>Seu IMC é: {formatarImc(imc)}</p>
                  <p>Classificação: {classificacao}</p>
                </div>
            ) : (
              <div className='result'>
                <p>{classificacao}</p>
              </div>
            )
          }
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
