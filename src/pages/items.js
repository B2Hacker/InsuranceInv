import { viewAllItems, viewItem, createItem, updateItem, deleteItem } from "../../src/lib/apiItem";
import ListItem from "../../components/List/ListItem";
import styles from '../../styles/Home.module.css';
import ModalItem from '../../components/Modal/ModalItem';

export default function itemsPage() {

    const [showElements, setShowElements] = React.useState(true);
    const [showModal, setShowModal] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);
    const [allItemsState, setAllItemsState] = React.useState([]);
    const [newItem, setNewItem] = React.useState({});


    React.useEffect(() => getItems(), []);

    const getItems = () => {
        viewAllItems().then(allItems => {
            setAllItemsState(allItems);
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

    const handleClickOnCancelNewItem = () => {
        setNewItem({})
        setShowElements(true);
    };

    const handleClickEditItem = itemID => {
        viewItem(itemID).then(item => {
            console.log("FOUND IT", item);
            setShowModal(true);
            setEditMode(true);
            setNewItem(item);
        })
    };

    const handleClickDeleteItem = itemID => {
        const borrandoItem = allItemsState.filter((item) => item.itemID !== itemID);
        console.log("DELETING", itemID);
        setAllItemsState(borrandoitem)

        deleteItem(itemID);
        setNewItem(true);
        setShowElements(true);

        getItems();
    };

    return (
        <div >
            <ModalItem
                open={showModal}
                handleClose={handleCloseModal}
                allItems={allItemsState}
                handleChange={handleChange}
                handleClickUpdateItem={handleClickUpdateItem}
                handleClickOnCreateNewItem={handleClickOnCreateNewItem}
                newItem={newItem}
                editMode={editMode}
            />
            <div >
                <div className={styles.main}>
                    <h3>Items</h3>
                </div>

                <div className={styles.main}>
                    {showElements ?
                        <button
                            className="btn btn-success"
                            onClick={() => handleClickAddItem()}
                        >
                            <i class="fas fa-plus-square"></i>&nbsp;Add new Item</button>
                        :
                        null
                    }
                </div>

                <div >
                    <ListItem
                        allItems={allItemsState}
                        handleClickEditItem={handleClickEditItem}
                        handleClickDeleteItem={handleClickDeleteItem}
                    />
                </div>
            </div>
        </div>
    );
};