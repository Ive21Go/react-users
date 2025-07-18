import { Contact } from './components';
import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;



function App() {
  // const [State, Function-State] = useState([]);
  const [contacts, setContacts] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {

    setContacts([
      { id: '01', name: 'Nadia Ivette Godinez Zamora', title: 'Software Development Engineer', email: 'nadiaIvette.Godinez@Solera.com', phone: '000000000' }    ])
  }, []);

  const modalRef = useRef();

  const mostrarModal = () => {
    const modal = new window.bootstrap.Modal(modalRef.current);
    modal.show();
  };

  // Register user section
  const onSubmitAddUser = (data) => {
    setContacts([...contacts, { id: Date.now().toString(), ...data }]);
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

      {/* Modal for user registration */}

      <div className="modal fade" ref={modalRef} tabIndex="-1" aria-labelledby="registroModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="registroModalLabel">User registration</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <form onSubmit={handleSubmit(onSubmitAddUser)}>
              <div className="modal-body">

                {/* Name */}
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input className="form-control" {...register("name", {
                    required: true,
                    pattern: {
                      value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, // just letters and spaces
                      message: "You can only use letters"
                    }
                  })} />
                  {errors.name && <span className="text-danger">{errors.name.message}</span>}
                </div>

                {/* Title */}
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input className="form-control" {...register("title", {
                    required: true,
                    pattern: {
                      value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, // just letters and spaces
                      message: "You can only use letters"
                    }
                  })} />
                  {errors.title && <span className="text-danger">{errors.title.message}</span>}

                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="emailUsuario" className="form-label">Email</label>
                  <input type="email" className="form-control" id="emailUsuario" {...register("email", {
                    required: true
                  })} />
                  {errors.email && <span className="text-danger">{errors.email.message}</span>}
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <label htmlFor="Celphone" className="form-label">Phone</label>
                  <input type="text" className="form-control" id="phone" {...register("phone", {
                    required: true,
                    pattern: { value: /^[0-9]+$/, message: "Phone must be numeric" }
                  })} />
                  {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-primary">Create User</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
