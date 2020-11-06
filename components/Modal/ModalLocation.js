import Modal from "react-bootstrap/Modal";
import AddLocation from "../Input/inputNewLocation";


const ModalLocation = props => {
        const { handleClose, open, allLocations, newLocation, editMode, handleChange, handleClickUpdateLocation, createLocation, handleClickOnCreateNewLocation, cancelCreateNewLocation } = props;

    return (

        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editMode ? `Modifying ${newLocation.name}` : `Add a new location`}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <AddLocation
                    newLocation={newLocation}
                    handleChange={handleChange}
                />
            </Modal.Body>

            <Modal.Footer>
            <button type="button" className="btn btn-secondary" onClick={handleClose}><i class="fas fa-times"></i>&nbsp;Cancel</button>

                <div onClick={createLocation}>
                    {editMode ? <button type="button" className="btn btn-success" onClick={() => handleClickUpdateLocation()}><i class="fas fa-edit"></i>&nbsp;Update</button>
                        :
                        <button type="button" className="btn btn-success" onClick={() => handleClickOnCreateNewLocation()}><i className="fa fa-database"></i>&nbsp;Save</button>}
                </div>
            </Modal.Footer>

        </Modal>
    )
};

ModalLocation.defaultProps = {
    editMode: true
};

export default ModalLocation;