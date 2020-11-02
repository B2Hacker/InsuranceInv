import React from 'react';
import { viewAllCategories, createCategory, updateCategory } from "../../src/lib/apiCategory";
import { viewAllSubCategories, createSubCategory, updateSubCategory } from "../../src/lib/apiSubCategory";
import ListCategory from '../../components/List/ListCategory';
import ListSubCategory from '../../components/List/ListSubCategory';
import ModalCategory from '../../components/Modal/modalCategory';
import ModalSubCategory from '../../components/Modal/modalSubCategory';

export default function categoriesPage() {

    const [allCategories, setAllCategories] = React.useState([]);
    const [allSubCategories, setAllSubCategories] = React.useState([]);
    const [newCategory, setNewCategory] = React.useState({});
    const [openModalCategory, setOpenModalCategory] = React.useState(false);


    React.useEffect(() => {
        getCategories();
        getSubCategories();
    }, []);

    const getCategories = () => {
        viewAllCategories().then(categories => {
            setAllCategories(categories);
        });
    }

    const getSubCategories = () => {
        viewAllSubCategories().then(subCategories => {
            setAllSubCategories(subCategories);
        });
    }

    const handleChange = name => event => {
        setNewCategory({
            ...newCategory,
            [name]: event.target.value
        });
    };

    const handleCloseModal = () => {
        setOpenModalCategory(false);
    };

    const handleClickOnCreateNewCategory = () => {
        createCategory(newCategory).then(() => {
            setOpenModalCategory(false);
            getCategories();
        })
    }

    const handleClickOnCancelNewCategory = () => {
        setNewCategory({})

    };

    return allCategories ? (
        <>
            <ModalCategory
                open={openModalCategory}
                handleClose={handleCloseModal}
                handleChange={handleChange}
                createCategory={handleClickOnCreateNewCategory}
                cancelCreateCategory={handleClickOnCancelNewCategory}
                newCategory={newCategory}
            />

            <ListCategory
                allCategories={allCategories}
            />

            <ModalSubCategory />

            <ListSubCategory
                allSubCategories={allSubCategories}
            />

        </>
    ) : (
            <>
                <div className="spinner-border"></div>
            </>
        );
};
