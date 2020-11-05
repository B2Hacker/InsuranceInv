import { makeStyles } from "@material-ui/core/styles";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddItem from "../Input/inputNewItem";

const useStyles = makeStyles(theme => ({

}));

const ModalItem = props => {
    const classes = useStyles();
    const { handleClose, open, allItems, newItem, editMode, handleChange, handleClickUpdateItem, createItem, handleClickOnCreateNewItem, cancelCreateNewItem } = props;

    return (

        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editMode ? `Modifying ${newItem.name}` : `Add a new Item`}</Modal.Title>

            </Modal.Header>

            <Modal.Body>
                <AddItem
                    newItem={newItem}
                    handleChange={handleChange}
                />

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>

                <Button variant="primary" onClick={createItem}>
                    {editMode ? <button
                        variant="success" size="sm"
                        onClick={() => handleClickUpdateItem()}
                    >
                        UPDATE
        </button>
                        :
                        <button type="button" className="btn btn-success" onClick={() => handleClickOnCreateNewItem()}><i className="fa fa-database">
                        </i> &nbsp; Save</button>}
                </Button>



            </Modal.Footer>

        </Modal>
    )
};

ModalItem.defaultProps = {
    editMode: true
};

export default ModalItem;