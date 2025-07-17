import PropTypes from "prop-types";
import { useState } from 'react';
import { useContacts } from '../hooks/useContacts';

const Contact = ({ id, name, title, email, phone, company, avatar, favorite, onEdit, onDelete }) => {
    const { toggleFavorite } = useContacts();
    const [isPulsing, setIsPulsing] = useState(false);

    const handleEdit = () => {
        if (onEdit) {
            onEdit('edit', { id, name, title, email, phone, company, avatar, favorite });
        }
    };

    const handleDelete = () => {
        if (onDelete) {
            onDelete('delete', { id, name, title, email, phone, company, avatar, favorite });
        }
    };

    const handleToggleFavorite = () => {
        toggleFavorite(id);
        
        // Add pulse animation
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 600);
    };

    return (
        <div className="contact-card">
            <div className="contact-header">
                <div className="contact-avatar">
                    <img 
                        src={`/assets/images/avatar-${avatar}.svg`} 
                        alt="Contact avatar"
                        className="contact-avatar-img"
                    />
                </div>
                <div className="contact-info">
                    <h3 className="contact-name">{name}</h3>
                    <p className="contact-title">{title}</p>
                </div>
                <button 
                    className={`contact-favorite-btn ${favorite ? 'contact-favorite-active' : ''} ${isPulsing ? 'contact-favorite-pulse' : ''}`}
                    onClick={handleToggleFavorite}
                    title={favorite ? 'Remove from favorites' : 'Add to favorites'}
                    aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                    {favorite ? '★' : '☆'}
                </button>
            </div>
            <div className="contact-details">
                <div className="contact-detail-item">
                    <span className="contact-label">Email:</span>
                    <span className="contact-value">{email}</span>
                </div>
                <div className="contact-detail-item">
                    <span className="contact-label">Phone:</span>
                    <span className="contact-value">{phone}</span>
                </div>
                <div className="contact-detail-item">
                    <span className="contact-label">Company:</span>
                    <span className="contact-value">{company}</span>
                </div>
            </div>
            <div className="contact-actions">
                <button className="contact-btn contact-btn-edit" onClick={handleEdit}>
                    <img src="/assets/images/edit.svg" alt="Edit" className="contact-btn-icon" />
                </button>
                <button className="contact-btn contact-btn-delete" onClick={handleDelete}>
                    <img src="/assets/images/delete.svg" alt="Delete" className="contact-btn-icon" />
                </button>
            </div>
        </div>
    )
}

Contact.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    favorite: PropTypes.bool,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func
}

export default Contact