import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import PonteNova from './components/PonteNova';
import Trustcenter from './components/Trustcenter';
import Treuhand from './components/Treuhand';
import Consulting from './components/Consulting';
import Veranstaltungen from './components/Veranstaltungen';
import Kontakt from './components/Kontakt';


function App() {
  const [page, setPage] = useState('Home');

  const handlePageChange = (newPage) => {
    window.scrollTo(0, 0)
    setPage(newPage)
  }

  const pages = {
    Home: <Home currentPage={page} onPageChange={handlePageChange}/>,
    PonteNova: <PonteNova currentPage={page} onPageChange={handlePageChange}/>,
    Trustcenter: <Trustcenter currentPage={page} onPageChange={handlePageChange}/>,
    Treuhand: <Treuhand currentPage={page} onPageChange={handlePageChange}/>,
    Consulting: <Consulting currentPage={page} onPageChange={handlePageChange}/>,
    Veranstaltungen: <Veranstaltungen currentPage={page} onPageChange={handlePageChange} />,
    Kontakt: <Kontakt />
  }

  const renderPage = () => {
    return pages[page] || <Home />;
    }


  return (
    <div className="App">
      <NavBar currentPage={page} onPageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default App;
