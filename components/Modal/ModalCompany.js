import Modal from "react-bootstrap/Modal";
import AddCompany from "../Input/inputNewCompany";


const ModalCompany = props => {
        const { handleClose, open, allCompanies, newCompany, editMode, handleChange, handleClickUpdateCompany, createCompany, handleClickOnCreateNewCompany, cancelCreateNewCompany } = props;

    return (

        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editMode ? `Modifying ${newCompany.name}` : `Add a new company`}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <AddCompany
                    newCompany={newCompany}
                    handleChange={handleChange}
                />
            </Modal.Body>

            <Modal.Footer>
            <button type="button" className="btn btn-secondary" onClick={handleClose}><i class="fas fa-times"></i>&nbsp;Cancel</button>

                <div onClick={createCompany}>
                    {editMode ? <button type="button" className="btn btn-success" onClick={() => handleClickUpdateCompany()}><i class="fas fa-edit"></i>&nbsp;Update</button>
                        :
                        <button type="button" className="btn btn-success" onClick={() => handleClickOnCreateNewCompany()}><i class="fas fa-save"></i>&nbsp;Save</button>}
                </div>
            </Modal.Footer>

        </Modal>

        
    )
};

ModalCompany.defaultProps = {
    editMode: true
};

export default ModalCompany;