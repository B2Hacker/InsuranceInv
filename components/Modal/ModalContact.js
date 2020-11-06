import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
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
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>

                <Button variant="primary" onClick={createContact}>
                    {editMode ? <button
                        variant="success" size="sm"
                        onClick={() => handleClickUpdateContact()}
                    >
                        UPDATE
        </button>
                        :
                        <button type="button" className="btn btn-success" onClick={() => handleClickOnCreateNewContact()}><i className="fa fa-database">
                        </i> &nbsp; Save</button>}
                </Button>



            </Modal.Footer>

        </Modal>
    )
};

ModalContact.defaultProps = {
    editMode: true
};

export default ModalContact;