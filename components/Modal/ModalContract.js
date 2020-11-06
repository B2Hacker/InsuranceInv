import Modal from "react-bootstrap/Modal";
import AddContract from "../Input/inputNewContract";


const ModalContract = props => {
        const { handleClose, open, allContracts, allContacts, allCompanies, newContract, editMode, handleChange, handleClickUpdateContract, createContract, handleClickOnCreateNewContract, cancelCreateNewContract } = props;

    return (

        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editMode ? `Modifying ${newContract.name}` : `Add a new Contract`}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <AddContract
                    newContract={newContract}
                    handleChange={handleChange}
                    allCompanies={allCompanies}
                    allContacts={allContacts}
                />
            </Modal.Body>

            <Modal.Footer>
                <button type="button" className="btn btn-secondary" onClick={handleClose}><i class="fas fa-times"></i>&nbsp;Cancel</button>

                <div onClick={createContract}>
                    {editMode ? <button type="button" className="btn btn-success" onClick={() => handleClickUpdateContract()}><i class="fas fa-edit"></i>&nbsp;Update</button>
                        :
                        <button type="button" className="btn btn-success" onClick={() => handleClickOnCreateNewContract()}><i className="fa fa-database"></i>&nbsp;Save</button>}
                </div>
            </Modal.Footer>

        </Modal>
    )
};

ModalContract.defaultProps = {
    editMode: true
};

export default ModalContract;