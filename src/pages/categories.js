import { viewAllCategories, viewCategory, createCategory, updateCategory, deleteCategory } from "../../src/lib/apiCategory";
import { viewAllSubCategories, viewSubCategory, createSubCategory, updateSubCategory, deleteSubCategory } from "../../src/lib/apiSubCategory";
import ListCategory from "../../components/List/ListCategory";
import ListSubCategory from "../../components/List/ListSubCategory";
import styles from '../../styles/Home.module.css';
import ModalCategory from "../../components/Modal/ModalCategory";
import ModalSubCategory from "../../components/Modal/ModalSubCategory";
import ModalDelete from "../../components/Modal/ModalDelete";

export default function categoriesPage() {


    const [showModal, setShowModal] = React.useState(false);
    const [showDeleteModal, setShowDeleteModal] = React.useState(false);
    const [allCategories, setAllCategories] = React.useState([]);
    const [newCategory, setNewCategory] = React.useState({});

    const [showModalSubCategory, setShowModalSubCategory] = React.useState(false);
    const [showDeleteModalSubCategory, setShowDeleteModalSubCategory] = React.useState(false);
    const [allSubCategories, setAllSubCategories] = React.useState([]);
    const [newSubCategory, setNewSubCategory] = React.useState({});

    const [showElements, setShowElements] = React.useState(true);
    const [editMode, setEditMode] = React.useState(false);

    React.useEffect(() => {
        getCategories();
        getSubCategories();
    }, []);

    // CATEGORIES    

    const getCategories = () => {
        viewAllCategories().then(allCategories => {
            setAllCategories(allCategories);
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
            handleCloseModal();
        })

    };

    const handleClickEditCategory = categoryID => {
        viewCategory(categoryID).then(category => {
            console.log("FOUND IT", category);
            setShowModal(true);
            setEditMode(true);
            setNewCategory(category);
        })
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const handleClickDeleteCategory = Category => {
        setNewCategory(Category);
        setShowDeleteModal(true);
    };


    const DeleteCategoryOnClick = () => {
        console.log("DELETING", newCategory);
        deleteCategory(newCategory._id).then(() => {
            getCategories();
            setNewCategory({});
            setShowDeleteModal(false);
        })
    }

    //SUBCATEGORIES

    const getSubCategories = () => {
        viewAllSubCategories().then(allSubCategories => {
            setAllSubCategories(allSubCategories);
        })
    };

    const handleCloseModalSubCategory = () => {
        console.log("handleCloseModalSC")
        setShowModalSubCategory(false);
        setNewSubCategory({});
    };

    const handleClickAddSubCategory = () => {
        console.log("handleClickAddSubCategory")
        setShowModalSubCategory(true);
        setEditMode(false);
        setNewSubCategory({});
    }

    const handleClickUpdateSubCategory = () => {
        updateSubCategory(newSubCategory).then(() => {
            handleCloseModalSubCategory()
            getSubCategories();
            getCategories();
        })
    }

    const handleChangeSubCategory = path => name => event => {
        if (path) {
            setNewSubCategory({
                ...newSubCategory,
                [path]: {
                    ...newSubCategory[path],
                    [name]: event.target.value
                }
            });
        } else {
            setNewSubCategory({
                ...newSubCategory,
                [name]: event.target.value
            });
        }
        console.log(newSubCategory);
    };

    const handleClickOnCreateNewSubCategory = () => {

        createSubCategory(newSubCategory).then(subcategory => {
            getSubCategories();
            setNewSubCategory({})
            setShowElements(true);
            handleCloseModalSubCategory();
        })

    };

    const handleClickEditSubCategory = subcategoryID => {
        viewSubCategory(subcategoryID).then(subcategory => {
            console.log("FOUND IT", subcategory);
            setShowModalSubCategory(true);
            setEditMode(true);
            setNewSubCategory(subcategory);
        })
    };

    const handleCloseDeleteModalSubCategory = () => {
        setShowDeleteModalSubCategory(false);
    };

    const handleClickDeleteSubCategory = subCategory => {
        setNewSubCategory(subCategory);
        setShowDeleteModalSubCategory(true);
    };


    const DeleteSubCategoryOnClick = () => {
        console.log("DELETING", newSubCategory);
        deleteSubCategory(newSubCategory._id).then(() => {
            getSubCategories();
            getCategories();
            setNewSubCategory({});
            setShowDeleteModalSubCategory(false);
        })
    }


    return (
        <div >
            <ModalCategory
                open={showModal}
                handleClose={handleCloseModal}
                allSubCategories={allSubCategories}
                allCategories={allCategories}
                handleChange={handleChange}
                handleClickUpdateCategory={handleClickUpdateCategory}
                handleClickOnCreateNewCategory={handleClickOnCreateNewCategory}
                newCategory={newCategory}
                editMode={editMode}
            />

            <ModalDelete
                open={showDeleteModal}
                handleClose={handleCloseDeleteModal}
                handleDelete={DeleteCategoryOnClick}
                item={newCategory}
            />

            <ModalSubCategory
                open={showModalSubCategory}
                handleClose={handleCloseModalSubCategory}
                allSubCategories={allSubCategories}
                handleChange={handleChangeSubCategory}
                handleClickUpdateSubCategory={handleClickUpdateSubCategory}
                handleClickOnCreateNewSubCategory={handleClickOnCreateNewSubCategory}
                newSubCategory={newSubCategory}
                editMode={editMode}
            />

            <ModalDelete
                open={showDeleteModalSubCategory}
                handleClose={handleCloseDeleteModalSubCategory}
                handleDelete={DeleteSubCategoryOnClick}
                item={newSubCategory}
            />

            <div >
                <div className={styles.tabletop}>
                    <h3>Categories</h3>
                </div>

                <div className={styles.tabletop}>
                    {showElements ?
                        <button
                            className="btn btn-success"
                            onClick={() => handleClickAddCategory()}>
                            <i className="fas fa-plus-square"></i>&nbsp;Add new Category</button>
                        :
                        null
                    }
                </div>

                <div >
                    <ListCategory
                        allCategories={allCategories}
                        handleClickEditCategory={handleClickEditCategory}
                        handleClickDeleteCategory={handleClickDeleteCategory}
                    />
                </div>

                <div className={styles.tabletop}>
                    <h3>SubCategories</h3>
                </div>

                <div className={styles.tabletop}>
                    {showElements ?
                        <button
                            className="btn btn-success"
                            onClick={() => handleClickAddSubCategory()}
                        >
                            <i className="fas fa-plus-square"></i>&nbsp;Add new SubCategory</button>
                        :
                        null
                    }
                </div>

                <div >
                    <ListSubCategory
                        allSubCategories={allSubCategories}
                        handleClickEditSubCategory={handleClickEditSubCategory}
                        handleClickDeleteSubCategory={handleClickDeleteSubCategory}
                    />
                </div>
            </div>
        </div>
    );
};