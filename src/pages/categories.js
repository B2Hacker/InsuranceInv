import React from 'react';
import styles from "../../styles/Home.module.css"
import { viewAllCategories, createCategory, updateCategory } from "../../src/lib/apiCategory";
import ListCategory from '../../components/List/ListCategory';
import ModalAddCategory from '../../components/Modal/modalCategory';

export default function categoriesPage() {

    const [allCategories, setAllCategories] = React.useState([]);
    const [newCategory, setNewCategory] = React.useState({});
    const [editMode, setEditMode] = React.useState(false);

    React.useEffect(() => {
        getCategories();
    }, []);

    const getCategories = () => {
        viewAllCategories().then(categories => {
            setAllCategories(categories);
        });
    }

    const handleChange = name => event => {
        setNewCategory({
            ...newCategory,
            [name]: event.target.value
        });
    };

    const handleClickOnCreateNewCategory = () => {
        console.log("SAVING", { editMode, newCategory })
        if (editMode) {
            updateCategory(newCategory).then(() => {
                setEditMode(false);
                getCategories();
            })
        } else {
            createNewCategory(newCategory).then(() => {
                setEditMode(false);
                getCategories();
            })
        }
    };


    return allCategories ? (
        <>
            <ModalAddCategory />

            <div item="true" xs={12}></div>
            <ListCategory
                allCategories={allCategories}
                handleChange={handleChange}
                createNewCategory={handleClickOnCreateNewCategory}
                newCategory={newCategory}
                editMode={editMode}
            />

        </>
    ) : (
            <>
                <div className="spinner-border"></div>
            </>
        );
};
