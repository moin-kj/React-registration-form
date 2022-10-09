import './assets/style/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './component/layout';
import Home from './pages/registration/index';
import PersonalInformation from "./pages/personal-info/index";
import DeliveryInfo from './pages/deliveryInfo';
import BuyInfo from './pages/BuyInfo';



const App = () => {
  return (
    <Router>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home/>}  />
        <Route exact path="/PersonalInformation" element={<PersonalInformation />} />
        <Route exact path="/DeliveryInfo" element={<DeliveryInfo />} />
        <Route exact path="/BuyInfo" element={<BuyInfo />} />
      </Routes>
    </Layout>
  </Router>
  );
}

export default App;
