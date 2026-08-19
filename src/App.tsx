import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout/Layout';
import './css/index.css';

function App() {
  return (
    <LanguageProvider>
      <Layout />
    </LanguageProvider>
  );
}

export default App;
