import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddContract from "../Input/inputNewContract";


const ModalContract = props => {
        const { handleClose, open, allContracts, newContract, editMode, handleChange, handleClickUpdateContract, createContract, handleClickOnCreateNewContract, cancelCreateNewContract } = props;

    return (

        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editMode ? `Modifying ${newContract.name}` : `Add a new Contract`}</Modal.Title>

            </Modal.Header>

            <Modal.Body>
                <AddContract
                    newContract={newContract}
                    handleChange={handleChange}
                />

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>

                <Button variant="primary" onClick={createContract}>
                    {editMode ? <button
                        variant="success" size="sm"
                        onClick={() => handleClickUpdateContract()}
                    >
                        UPDATE
        </button>
                        :
                        <button type="button" className="btn btn-success" onClick={() => handleClickOnCreateNewContract()}><i className="fa fa-database">
                        </i> &nbsp; Save</button>}
                </Button>



            </Modal.Footer>

        </Modal>
    )
};

ModalContract.defaultProps = {
    editMode: true
};

export default ModalContract;