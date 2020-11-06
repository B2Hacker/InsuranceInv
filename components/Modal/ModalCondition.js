import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddCondition from "../Input/inputNewCondition";


const ModalCondition = props => {
        const { handleClose, open, allConditions, newCondition, editMode, handleChange, handleClickUpdateCondition, createCondition, handleClickOnCreateNewCondition, cancelCreateNewCondition } = props;

    return (

        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editMode ? `Modifying ${newCondition.name}` : `Add a new Condition`}</Modal.Title>

            </Modal.Header>

            <Modal.Body>
                <AddCondition
                    newCondition={newCondition}
                    handleChange={handleChange}
                />

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>

                <div variant="primary" onClick={createCondition}>
                    {editMode ? <button
                        variant="success" size="sm"
                        onClick={() => handleClickUpdateCondition()}
                    >
                        UPDATE
        </button>
                        :
                        <button type="button" className="btn btn-success" onClick={() => handleClickOnCreateNewCondition()}><i className="fa fa-database">
                        </i> &nbsp; Save</button>}
                </div>



            </Modal.Footer>

        </Modal>
    )
};

ModalCondition.defaultProps = {
    editMode: true
};

export default ModalCondition;