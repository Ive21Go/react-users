import { Contact } from './components';
import { useState, useEffect, useRef } from 'react';
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;


function App() {
  // const [State, Function-State] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {

    setContacts([
      { id: '01', name: 'John Doe', title: 'Software Engineer', email: 'jone@done.com', phone: '123-456-7890'},
      { id: '02', name: 'Doe Juan', title: 'Software Engineer', email: 'jone2@done.com', phone: '123-456-90'},
      { id: '03', name: 'Marie', title: 'Software Engineer', email: 'marie@done.com', phone: '123-6-7890'},
      { id: '04', name: 'Pedrito', title: 'Software Engineer', email: 'ejemplo@done.com', phone: '3-456-7890'}
    ])
  }, []);

  const modalRef = useRef();

  const mostrarModal = () => {
    const modal = new window.bootstrap.Modal(modalRef.current);
    modal.show();
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar datos
    console.log('Registrando usuario...');
  };

  // Update contact section
  const updateContact = (id) => {
    const contactToUpdate = contacts.find(contact => contact.id === id);
    if (contactToUpdate) { }
  }
    // Delete contact section
    const deleteContact = (id) => {
      let question = window.confirm("You select delete this contact, Are you sure?");
      if (question) {
        const newSetContacts = contacts.filter(contact => contact.id !== id);
        setContacts(newSetContacts);
      } else {
        alert("Cancel delete contact");
      }
    }
  
    return (
        <div className="App">
          <div className="container my-5">
            <div className="row mb-4">
              <div className="col-12 text-center">
                <button className="btn" onClick={mostrarModal} style={{ backgroundColor: '#03312e', border: 'none', color: 'white' }}>
                  Add User
                </button>
              </div>
            </div>
            <div className="row g-4 justify-content-center">
              {contacts.map((contact) => (
                <div key={contact.id} className="col-12 col-md-4 d-flex justify-content-center">
                  <Contact
                    id={contact.id}
                    name={contact.name}
                    title={contact.title}
                    email={contact.email}
                    phone={contact.phone}
                    onDelete={deleteContact}
                    onUpdate={updateContact}
                  />
                </div>
              ))}
            </div>
          </div>
       <div className="modal fade" ref={modalRef} tabIndex="-1" aria-labelledby="registroModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title" id="registroModalLabel">Registro de Usuario</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
              </div>

              <form id="formRegistro">
                <div className="modal-body">

                  <div className="mb-3">
                    <label htmlFor="nombreUsuario" className="form-label">Name</label>
                    <input type="text" className="form-control" id="nombreUsuario" required />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" required />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="emailUsuario" className="form-label">Email</label>
                    <input type="email" className="form-control" id="emailUsuario" required />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="Celphone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone" required />
                  </div>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                  <button type="submit" className="btn btn-primary">Registrar</button>
                </div>
              </form>

            </div>
          </div>
        </div> 
        </div>

        
    );
  }

  export default App;
