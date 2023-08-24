import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcom';
import stlyes from './App.module.css';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Hello />
      <Hello />
      <div className={stlyes.box}>App</div>
    </div>
  );
}

export default App;
