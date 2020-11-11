import Modal from "react-bootstrap/Modal";

const ModalDelete = props => {

    const { handleClose, open, handleDelete, item } = props;

    return (

        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Deleting!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                Are you sure you want to delete {item.name}?
            </Modal.Body>

            <Modal.Footer>
                <button className="btn btn-secondary" onClick={handleClose}><i className="fas fa-times"></i>&nbsp;Cancel</button>
                <button className="btn btn-danger"onClick={handleDelete}>&nbsp;<i className="fas fa-trash-alt"></i>Delete</button>
            </Modal.Footer>
        </Modal>
    )
};

ModalDelete.defaultProps = {
    editMode: true
};

export default ModalDelete;