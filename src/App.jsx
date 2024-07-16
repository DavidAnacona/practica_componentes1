import './App.css'
import { MyComponent } from './components/MyComponent'
import { SecondComponent } from './components/SecondComponent';

function App() {

  const name = "David Santiago Anacona";

  return (
    <>
      <div>
        <h3>Práctica de componentes</h3>
        {/* Cargar el primer componente */}
        <MyComponent name={name}/>
        <hr />
        <h4>Segundo componente</h4>
        <SecondComponent />
      </div>
    </>
  )
}

export default App
