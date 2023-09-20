import logo from './logo.svg';
import './App.css';
import Usuario from './componentes/Usuario';
import imagen from './img/Ken.png';

function App() {
  return (
    <div className="App">
      <Usuario foto={imagen} nombre="Maria" cargo="Gerente General" conoceme="CV de Maria" />
      <Usuario nombre="Luis Garcia" cargo="Sub-Gerente General" conoceme="CV de Luis Garcia" />
      <Usuario nombre="Pedro" cargo="Gerente Generalde Region" conoceme="CV de Pedro" />
      <Usuario />
      <Usuario foto={imagen} nombre="Carlos" />
    </div>
  );
}

export default App;
