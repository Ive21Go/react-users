import { Contact } from './components';
import { useState, useEffect } from 'react';

function App() {
  // const [State, Function-State] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // const saveContacts = localStorage.getItem('contacts');
    // if (saveContacts) {
    //   setContacts(JSON.parse(saveContacts));
    // }
    setContacts([
    { id:'01', name: 'John Doe', title: 'Software Engineer', email: 'jone@done.com', phone: '123-456-7890', avatar: 'male' },
    { id:'02', name: 'Doe Juan', title: 'Software Engineer', email: 'jone2@done.com', phone: '123-456-90', avatar: 'female' },
    { id:'03', name: 'Marie', title: 'Software Engineer', email: 'marie@done.com', phone: '123-6-7890', avatar: 'female' },
    { id:'04', name: 'Pedrito', title: 'Software Engineer', email: 'ejemplo@done.com', phone: '3-456-7890', avatar: 'account' }
    ])
  }, []);

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
          {contacts.map((contact) => (
            <div key={contact.id} className="col-12 col-md-4 d-flex justify-content-center">
              <Contact
                name={contact.name}
                title={contact.title}
                email={contact.email}
                phone={contact.phone}
                avatar={contact.avatar}
              />
            </div>
          ))}
        </div>
      </div>
    </div>






  );
}

export default App;
