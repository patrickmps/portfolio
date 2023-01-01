import'./global.scss'
import { Header } from './components/Header';
import { ScocialButtons } from './components/SocialButtons';
import { Home } from './pages/Home';
import { About } from './pages/About';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Home/>
      <About/>
      <ScocialButtons/>
    </div>
  );
}

export default App;