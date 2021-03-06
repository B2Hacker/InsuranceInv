import { viewAllItems, viewItem, createItem, updateItem, deleteItem } from "../../src/lib/apiItem";
import { viewAllLocations, viewLocation } from "../../src/lib/apiLocation";
import { viewAllRooms, viewRoom } from "../../src/lib/apiRoom";
import { viewAllCategories, viewCategory } from "../../src/lib/apiCategory";
import { viewAllConditions, viewCondition } from "../../src/lib/apiCondition";
import { viewAllCompanies, viewCompany } from "../../src/lib/apiCompany";
import { viewAllContracts, viewContract } from "../../src/lib/apiContract";
import ListItem from "../../components/List/ListItem";
import styles from '../../styles/Home.module.css';
import ModalItem from '../../components/Modal/ModalItem';
import ModalDelete from "../../components/Modal/ModalDelete";

export default function itemsPage() {

    const [showElements, setShowElements] = React.useState(true);
    const [showModal, setShowModal] = React.useState(false);
    const [showDeleteModal, setShowDeleteModal] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);
    const [allItems, setAllItems] = React.useState([]);
    const [allLocations, setAllLocations] = React.useState([]);
    const [allRooms, setAllRooms] = React.useState([]);
    const [allCategories, setAllCategories] = React.useState([]);
    const [allConditions, setAllConditions] = React.useState([]);
    const [allCompanies, setAllCompanies] = React.useState([]);
    const [allContracts, setAllContracts] = React.useState([]);
    const [newItem, setNewItem] = React.useState({});


    React.useEffect(() => {
        getLocations();
        getRooms();
        getCategories();
        getConditions();
        getCompanies();
        getContracts();
        getItems();
    }, []);

    const getItems = () => {
        viewAllItems().then(allItems => {
            setAllItems(allItems);
        })
    };

    const getLocations = () => {
        viewAllLocations().then(allItems => {
            setAllLocations(allItems);
        })
    };

    const getRooms = () => {
        viewAllRooms().then(allItems => {
            setAllRooms(allItems);
        })
    };

    const getCategories = () => {
        viewAllCategories().then(allItems => {
            setAllCategories(allItems);
        })
    };

    const getConditions = () => {
        viewAllConditions().then(allItems => {
            setAllConditions(allItems);
        })
    };

    const getCompanies = () => {
        viewAllCompanies().then(allItems => {
            setAllCompanies(allItems);
        })
    };

    const getContracts = () => {
        viewAllContracts().then(allItems => {
            setAllContracts(allItems);
        })
    };

    const handleCloseModal = () => {
        console.log("handleCloseModal")
        setShowModal(false);
        setNewItem({});
    };

    const handleClickAddItem = () => {
        console.log("handleClickAddItem")
        setShowModal(true);
        setEditMode(false);
        setNewItem({});
    }

    const handleClickUpdateItem = () => {
        updateItem(newItem).then(() => {
            handleCloseModal()
            getItems();
        })
    }

    const handleChange = path => name => event => {
        if (path) {
            setNewItem({
                ...newItem,
                [path]: {
                    ...newItem[path],
                    [name]: event.target.value
                }
            });
        } else {
            setNewItem({
                ...newItem,
                [name]: event.target.value
            });
        }
        console.log(newItem);
    };

    const handleClickOnCreateNewItem = () => {

        createItem(newItem).then(item => {
            getItems();
            setNewItem({})
            setShowElements(true);
            handleCloseModal();
        })

    };

    const handleClickEditItem = itemID => {
        viewItem(itemID).then(item => {
            console.log("FOUND IT", item);
            setShowModal(true);
            setEditMode(true);
            setNewItem(item);
        })
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const handleClickDeleteItem = item => {
        setNewItem(item);
        setShowDeleteModal(true);
    };


    const DeleteItemOnClick = () => {
        console.log("DELETING", newItem);
        deleteItem(newItem._id).then(() => {
            getItems();
            setNewItem({});
            setShowDeleteModal(false);
        })
    }

    return (
        <div >
            <ModalItem
                open={showModal}
                handleClose={handleCloseModal}
                allItems={allItems}
                allLocations={allLocations}
                allRooms={allRooms}
                allCategories={allCategories}
                allConditions={allConditions}
                allCompanies={allCompanies}
                allContracts={allContracts}
                handleChange={handleChange}
                handleClickUpdateItem={handleClickUpdateItem}
                handleClickOnCreateNewItem={handleClickOnCreateNewItem}
                newItem={newItem}
                editMode={editMode}
            />

            <ModalDelete
                open={showDeleteModal}
                handleClose={handleCloseDeleteModal}
                handleDelete={DeleteItemOnClick}
                item={newItem}
            />

            <div >
                <div className={styles.tabletop}>
                    <h3>Items</h3>
                </div>

                <div className={styles.tabletop}>
                    {showElements ?
                        <button
                            className="btn btn-success"
                            onClick={() => handleClickAddItem()}
                        >
                            <i className="fas fa-plus-square"></i>&nbsp;Add new Item</button>
                        :
                        null
                    }
                </div>

                <div >
                    <ListItem
                        allItems={allItems}
                        handleClickEditItem={handleClickEditItem}
                        handleClickDeleteItem={handleClickDeleteItem}
                    />
                </div>
            </div>
        </div>
    );
};