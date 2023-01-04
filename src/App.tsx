import'./global.scss'
import { Header } from './components/Header';
import { ScocialButtons } from './components/SocialButtons';
import { Home } from './pages/Home';
import { About } from './pages/About';

function App() {
  return (
    <div className='App'>
      <Header/>
      <div className="container">
        <Home/>
        <About/>
      </div>
      <ScocialButtons/>
    </div>
  );
}

export default App;