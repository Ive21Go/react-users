import { Contact } from './components';


function App() {
  return (
    <div className="App">
      <div className="container my-5">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <button className="btn" style={{ backgroundColor: '#03312e', border: 'none', color: 'white' }}>
              Agregar usuario
            </button>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <Contact
              name="John Doe"
              title="Software Engineer"
              email="jone@done.com"
              phone="123-456-7890"
              avatar="female" />
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <Contact
              name="John Doe"
              title="Software Engineer"
              email="jone@done.com"
              phone="123-456-7890"
              avatar="female" />
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <Contact
              name="John Doe"
              title="Software Engineer"
              email="jone@done.com"
              phone="123-456-7890"
              avatar="female"
            />
          </div>
        </div>
      </div>
    </div>






  );
}

export default App;
