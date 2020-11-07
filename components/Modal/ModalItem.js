import Modal from "react-bootstrap/Modal";
import AddItem from "../Input/inputNewItem";


const ModalItem = props => {
    const { handleClose, open, allItems, allLocations, allRooms, allCategories, allConditions, allCompanies, allContracts, newItem, editMode, handleChange, handleClickUpdateItem, createItem, handleClickOnCreateNewItem, cancelCreateNewItem } = props;

    return (

        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editMode ? `Modifying ${newItem.name}` : `Add a new Item`}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <AddItem
                    newItem={newItem}
                    handleChange={handleChange}
                    allLocations={allLocations}
                    allRooms={allRooms}
                    allCategories={allCategories}
                    allConditions={allConditions}
                    allCompanies={allCompanies}
                    allContracts={allContracts}
                />
            </Modal.Body>

            <Modal.Footer>
                <button type="button" className="btn btn-secondary" onClick={handleClose}><i class="fas fa-times"></i>&nbsp;Cancel</button>

                <div onClick={createItem}>
                    {editMode ? <button type="button" className="btn btn-success" onClick={() => handleClickUpdateItem()}><i class="fas fa-edit"></i>&nbsp;Update</button>
                        :
                        <button type="button" className="btn btn-success" onClick={() => handleClickOnCreateNewItem()}><i class="fas fa-save"></i>&nbsp;Save</button>}
                </div>
            </Modal.Footer>
        </Modal>
    )
};

ModalItem.defaultProps = {
    editMode: true
};

export default ModalItem;