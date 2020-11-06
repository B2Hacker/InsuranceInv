import Modal from "react-bootstrap/Modal";
import AddContact from "../Input/inputNewContact";


const ModalContact = props => {
        const { handleClose, open, allContacts, newContact, editMode, handleChange, handleClickUpdateContact, createContact, handleClickOnCreateNewContact, cancelCreateNewContact } = props;

    return (

        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editMode ? `Modifying ${newContact.name}` : `Add a new Contact`}</Modal.Title>

            </Modal.Header>

            <Modal.Body>
                <AddContact
                    newContact={newContact}
                    handleChange={handleChange}
                />

            </Modal.Body>

            <Modal.Footer>
            <button className="btn btn-secondary" onClick={handleClose}><i class="fas fa-times"></i>&nbsp;Cancel</button>

                <div onClick={createContact}>
                    {editMode ? <button onClick={() => handleClickUpdateContact()}><i class="fas fa-edit"></i>&nbsp;Update</button>
                        :
                        <button type="button" className="btn btn-success" onClick={() => handleClickOnCreateNewContact()}><i className="fa fa-database"></i>&nbsp;Save</button>}
                </div>
            </Modal.Footer>

        </Modal>
    )
};

ModalContact.defaultProps = {
    editMode: true
};

export default ModalContact;