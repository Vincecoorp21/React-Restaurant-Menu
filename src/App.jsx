//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import BookForm from './components/Booking/BookForm';
import Main from './components/Main/Main';
import './App.css';

function App() {
  const dishes = [
    {
      id: 1,
      name: 'Simple Rissoto',
      description:
        'Risotto is a creamy Italian dish that tastes a lot like the rice version of mac and cheese',
      price: 10,
      image:
        'https://truffle-assets.imgix.net/d5617d50-thumbnail-risotto-landscape.png',
    },
    {
      id: 2,
      name: 'Steak Tartar',
      description:
        'Steak tartare is a dish of raw ground (minced) beef or horse meat. It is usually served with onions, capers, pepper, Worcestershire sauce',
      price: 30,
      image:
        'https://www.lacocinadelila.com/wp-content/uploads/2015/12/Steak-Tartar.jpg',
    },
    {
      id: 3,
      name: 'Tagliatelle Pesto',
      description:
        'Similar to oil-based sauces, pesto is served best with longer cuts of pasta, like the corkscrew shape of Fusilli',
      price: 45,
      image:
        'https://www.deliciousdia.com/wp-content/uploads/2019/07/DIA_TAGLIETELLE_AL_PESTO.png',
    },
  ];
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/home' element={<Home dishes={dishes} />} />
          <Route path='/booking' element={<BookForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
