import logo from './logo.svg';
import './App.css';
import { Contact } from './components';


function App() {
  return (
    <div className="App">
      <Contact
        name="John Doe"
        title="Software Engineer"
        email="jone@done.com"
        phone="123-456-7890"
        avatar="female"
        />
    </div>
  );
}

export default App;
