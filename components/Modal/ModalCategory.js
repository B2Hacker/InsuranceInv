import { makeStyles } from "@material-ui/core/styles";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddCategory from "../Input/inputNewCategory";

const useStyles = makeStyles(theme => ({

}));

const ModalCategory = props => {
    const classes = useStyles();
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
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>

                <Button variant="primary" onClick={createCategory}>
                    {editMode ? <button
                        variant="success" size="sm"
                        onClick={() => handleClickUpdateCategory()}
                    >
                        UPDATE
        </button>
                        :
                        <button type="button" className="btn btn-success" onClick={() => handleClickOnCreateNewCategory()}><i className="fa fa-database">
                        </i> &nbsp; Save</button>}
                </Button>



            </Modal.Footer>

        </Modal>
    )
};

ModalCategory.defaultProps = {
    editMode: true
};

export default ModalCategory;