import React from 'react';
import styles from "../../styles/Home.module.css"
import { viewAllCategories, createCategory, updateCategory } from "../../src/lib/apiCategory";
import ListCategory from '../../components/List/ListCategory';

export default function categoriesPage() {

    const [allCategories, setAllCategories] = React.useState([]);


    React.useEffect(() => {
        getCategories();
    }, []);

    const getCategories = () => {
        viewAllCategories().then(categories => {
            setAllCategories(categories);
        });
    }



    return allCategories ? (
        <>

            <div item="true" xs={12}></div>
            <ListCategory
                allCategories={allCategories}
            />

        </>
    ) : (
            <>
                <div className="spinner-border"></div>
            </>
        );
};
