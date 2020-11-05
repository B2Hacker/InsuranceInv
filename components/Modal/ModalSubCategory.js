import { makeStyles } from "@material-ui/core/styles";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddSubCategory from "../Input/inputNewSubCategory";

const useStyles = makeStyles(theme => ({

}));

const ModalSubCategory = props => {
    const classes = useStyles();
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
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>

                <Button variant="primary" onClick={createSubCategory}>
                    {editMode ? <button
                        variant="success" size="sm"
                        onClick={() => handleClickUpdateSubCategory()}
                    >
                        UPDATE
        </button>
                        :
                        <button type="button" className="btn btn-success" onClick={() => handleClickOnCreateNewSubCategory()}><i className="fa fa-database">
                        </i> &nbsp; Save</button>}
                </Button>



            </Modal.Footer>

        </Modal>
    )
};

ModalSubCategory.defaultProps = {
    editMode: true
};

export default ModalSubCategory;