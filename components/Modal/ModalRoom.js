import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddRoom from "../Input/inputNewRoom";


const ModalRoom = props => {
        const { handleClose, open, allRooms, newRoom, editMode, handleChange, handleClickUpdateRoom, createRoom, handleClickOnCreateNewRoom, cancelCreateNewRoom } = props;

    return (

        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editMode ? `Modifying ${newRoom.name}` : `Add a new room`}</Modal.Title>

            </Modal.Header>

            <Modal.Body>
                <AddRoom
                    newRoom={newRoom}
                    handleChange={handleChange}
                />

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>

                <Button variant="primary" onClick={createRoom}>
                    {editMode ? <button
                        variant="success" size="sm"
                        onClick={() => handleClickUpdateRoom()}
                    >
                        UPDATE
        </button>
                        :
                        <button type="button" className="btn btn-success" onClick={() => handleClickOnCreateNewRoom()}><i className="fa fa-database">
                        </i> &nbsp; Save</button>}
                </Button>



            </Modal.Footer>

        </Modal>
    )
};

ModalRoom.defaultProps = {
    editMode: true
};

export default ModalRoom;