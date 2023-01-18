import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Logos from './components/logos/Logos';
import MyHome from './components/my_home/MyHome';
import ScrollUp from './components/scroll-up/ScrollUp';
import Subscrible from './components/subscrible/Subscrible';

function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <MyHome />
        <Subscrible />
        {/* <Home /> */}
        {/* <Logos /> */}
        <Footer />
        <ScrollUp />
      </main>
    </>
  );
}

export default App;
