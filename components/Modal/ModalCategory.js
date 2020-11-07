import Modal from "react-bootstrap/Modal";
import AddCategory from "../Input/inputNewCategory";


const ModalCategory = props => {
    const { handleClose, open, allCategories, allSubCategories, newCategory, editMode, handleChange, handleClickUpdateCategory, createCategory, handleClickOnCreateNewCategory, cancelCreateNewCategory } = props;

    return (

        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editMode ? `Modifying ${newCategory.name}` : `Add a new Category`}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <AddCategory
                    newCategory={newCategory}
                    allSubCategories={allSubCategories}
                    handleChange={handleChange}
                />
            </Modal.Body>

            <Modal.Footer>
                <button type="button" className="btn btn-secondary" onClick={handleClose}><i class="fas fa-times"></i>&nbsp;Cancel</button>

                <div onClick={createCategory}>
                    {editMode ? <button type="button" className="btn btn-success" onClick={() => handleClickUpdateCategory()}><i class="fas fa-edit"></i>&nbsp;Update</button>
                        :
                        <button type="button" className="btn btn-success" onClick={() => handleClickOnCreateNewCategory()}><i class="fas fa-save"></i>&nbsp;Save</button>}
                </div>
            </Modal.Footer>
        </Modal>
    )
};

ModalCategory.defaultProps = {
    editMode: true
};

export default ModalCategory;