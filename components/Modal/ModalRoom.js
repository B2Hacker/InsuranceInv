import Modal from "react-bootstrap/Modal";
import AddRoom from "../Input/inputNewRoom";


const ModalRoom = props => {
        const { handleClose, open, allRooms, allLocations, newRoom, editMode, handleChange, handleClickUpdateRoom, createRoom, handleClickOnCreateNewRoom, cancelCreateNewRoom } = props;

    return (

        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editMode ? `Modifying ${newRoom.name}` : `Add a new room`}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <AddRoom
                    newRoom={newRoom}
                    handleChange={handleChange}
                    allLocations={allLocations}
                />
            </Modal.Body>

            <Modal.Footer>
            <button type="button" className="btn btn-secondary" onClick={handleClose}><i class="fas fa-times"></i>&nbsp;Cancel</button>

                <div onClick={createRoom}>
                    {editMode ? <button type="button" className="btn btn-success" onClick={() => handleClickUpdateRoom()}><i class="fas fa-edit"></i>&nbsp;Update</button>
                        :
                        <button type="button" className="btn btn-success" onClick={() => handleClickOnCreateNewRoom()}><i className="fa fa-database"></i>&nbsp;Save</button>}
                </div>
            </Modal.Footer>

        </Modal>
    )
};

ModalRoom.defaultProps = {
    editMode: true
};

export default ModalRoom;