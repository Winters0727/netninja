import logo from './logo.svg';
import './App.css';

import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
        <NavBar />
        <div className="content">
          <h1>App Component</h1>
        </div>
    </div>
  );
}

export default App;
