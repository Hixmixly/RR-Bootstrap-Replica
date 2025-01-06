import './App.css'
import TopBar from './components/TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './components/Background';
import StoreListings  from './components/StoreListings'; 

function App() {
  return (
    <div>
     <TopBar/>
     <Background/>
    <StoreListings/>
    </div>
  );
}

export default App;

