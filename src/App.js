import './App.css';
import './categories.styles.scss';
import Home from './components/routes/home/home';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/routes/navigation/navigation';
import SignIn from './components/routes/sign-in/sign-in-component';

const Shop = () => {
  return <h1> I am the shop page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} path="/" element={<Home />} />
        {/* adding index to the home path makes the outlet render that automatically on the home page */}
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
