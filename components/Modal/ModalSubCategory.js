import Modal from "react-bootstrap/Modal";
import AddSubCategory from "../Input/inputNewSubCategory";


const ModalSubCategory = props => {
        const { handleClose, open, allCompanies, newSubCategory, editMode, handleChange, handleClickUpdateSubCategory, createSubCategory, handleClickOnCreateNewSubCategory, cancelCreateNewSubCategory } = props;

    return (

        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editMode ? `Modifying ${newSubCategory.name}` : `Add a new SubCategory`}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <AddSubCategory
                    newSubCategory={newSubCategory}
                    handleChange={handleChange}
                />
            </Modal.Body>

            <Modal.Footer>
            <button type="button" className="btn btn-secondary" onClick={handleClose}><i class="fas fa-times"></i>&nbsp;Cancel</button>

                <div onClick={createSubCategory}>
                    {editMode ? <button type="button" onClick={() => handleClickUpdateSubCategory()}><i class="fas fa-edit"></i>&nbsp;Update</button>
                        :
                        <button type="button" className="btn btn-success" onClick={() => handleClickOnCreateNewSubCategory()}><i className="fa fa-database"></i>&nbsp;Save</button>}
                </div>
            </Modal.Footer>
        </Modal>
    )
};

ModalSubCategory.defaultProps = {
    editMode: true
};

export default ModalSubCategory;