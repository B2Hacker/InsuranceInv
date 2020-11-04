import { makeStyles } from "@material-ui/core/styles";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddCompany from "../Input/inputNewCompany";

const useStyles = makeStyles(theme => ({

}));

const ModalCompany = props => {
    const classes = useStyles();
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
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>

                <Button variant="primary" onClick={createCompany}>
                    {editMode ? <button
                        variant="success" size="sm"
                        onClick={() => handleClickUpdateCompany()}
                    >
                        UPDATE
        </button>
                        :
                        <button type="button" className="btn btn-success" onClick={() => handleClickOnCreateNewCompany()}><i className="fa fa-database">
                        </i> &nbsp; Save</button>}
                </Button>



            </Modal.Footer>

        </Modal>
    )
};

ModalCompany.defaultProps = {
    editMode: true
};

export default ModalCompany;