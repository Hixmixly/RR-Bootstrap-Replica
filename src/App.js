import './App.css'
import TopBar from './components/TopBar';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div>
      <TopBar />
      <div className="container mt-5">
        <h1>Welcome to Instacart!</h1>
        <p>This is a sample landing page.</p>
      </div>
    </div>
  );
}

export default App;

