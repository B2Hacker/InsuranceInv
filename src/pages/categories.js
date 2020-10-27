import React from 'react';
import { viewAllCategories, createCategory, updateCategory } from "../../src/lib/apiCategory";
import { viewAllSubCategories, createSubCategory, updateSubCategory } from "../../src/lib/apiSubCategory";
import ListCategory from '../../components/List/ListCategory';
import ListSubCategory from '../../components/List/ListSubCategory';
import ModalAddCategory from '../../components/Modal/modalCategory';

export default function categoriesPage() {

    const [allCategories, setAllCategories] = React.useState([]);
    const [allSubCategories, setAllSubCategories] = React.useState([]);


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

    return allCategories ? (
        <>
            <ModalAddCategory />

            <div item="true" xs={12}></div>
            <ListCategory
                allCategories={allCategories}
            />

            <div item="true" xs={12}></div>
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
