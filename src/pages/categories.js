import { viewAllCategories, viewCategory, createCategory, updateCategory, deleteCategory } from "../../src/lib/apiCategory";
import ListCategory from "../../components/List/ListCategory";
import AddIcon from "@material-ui/icons/Add";
import styles from '../../styles/Home.module.css';
import ModalCategory from "../../components/Modal/ModalCategory";

export default function categoriesPage() {

    const [showElements, setShowElements] = React.useState(true);
    const [showModal, setShowModal] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);
    const [allCategoriesState, setAllCategoriesState] = React.useState([]);
    const [newCategory, setNewCategory] = React.useState({});


    React.useEffect(() => getCategories(), []);

    const getCategories = () => {
        viewAllCategories().then(allCategories => {
            setAllCategoriesState(allCategories);
        })
    };

    const handleCloseModal = () => {
        console.log("handleCloseModal")
        setShowModal(false);
        setNewCategory({});
    };

    const handleClickAddCategory = () => {
        console.log("handleClickAddCategory")
        setShowModal(true);
        setEditMode(false);
        setNewCategory({});
    }

    const handleClickUpdateCategory = () => {
        updateCategory(newCategory).then(() => {
            handleCloseModal()
            getCategories();
        })
    }

    const handleChange = path => name => event => {
        if (path) {
            setNewCategory({
                ...newCategory,
                [path]: {
                    ...newCategory[path],
                    [name]: event.target.value
                }
            });
        } else {
            setNewCategory({
                ...newCategory,
                [name]: event.target.value
            });
        }
        console.log(newCategory);
    };

    const handleClickOnCreateNewCategory = () => {

        createCategory(newCategory).then(category => {
            getCategories();
            setNewCategory({})
            setShowElements(true);
        })

    };

    const handleClickOnCancelNewCategory = () => {
        setNewCategory({})
        setShowElements(true);
    };

    const handleClickEditCategory = categoryID => {
        viewCategory(categoryID).then(category => {
            console.log("FOUND IT", category);
            setShowModal(true);
            setEditMode(true);
            setNewCategory(category);
        })
    };

    const handleClickDeleteCategory = categoryID => {
        const borrandoCategory = allCategoriesState.filter((category) => category.categoryID !== categoryID);
        console.log("DELETING", categoryID);
        setAllCategoriesState(borrandoCategory)

        deleteCategory(categoryID);
        setNewCategory(true);
        setShowElements(true);
    };

    return (
        <div >
            <ModalCategory
                open={showModal}
                handleClose={handleCloseModal}
                allCategories={allCategoriesState}
                handleChange={handleChange}
                handleClickUpdateCategory={handleClickUpdateCategory}
                handleClickOnCreateNewCategory={handleClickOnCreateNewCategory}
                newCategory={newCategory}
                editMode={editMode}
            />
            <div >
                <div className={styles.main}>
                    <h3>Categories</h3>
                </div>

                <div className={styles.main}>
                    {showElements ?
                        <button
                            className="btn btn-success"
                            onClick={() => handleClickAddCategory()}
                        >
                            <AddIcon fontSize="small" />Add new Category</button>
                        :
                        null
                    }
                </div>

                <div >
                    <ListCategory
                        allCategories={allCategoriesState}
                        handleClickEditCategory={handleClickEditCategory}
                        Borrar={handleClickDeleteCategory}
                    />
                </div>
            </div>
        </div>
    );
};