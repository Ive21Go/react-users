const Contact = ({name, title, email, phone, avatar, onEdit, onDelete }) => {

    const handleEdit = () => {
    };

    const handleDelete = () => {
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


export default Contact