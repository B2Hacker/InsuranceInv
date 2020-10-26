import React from 'react';
import styles from '../../styles/Home.module.css';
import { viewAllCategories, viewCategory, updateCategory } from '../../src/lib/apiCategory';

export default function CategoriesList(props) {

    const { allCategories, editCategory } = props;

    return allCategories && allCategories.length > 0 ? (
        <>
            <div className={styles.container}>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>SubCategory</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allCategories.map(category => (
                            <tr key={category._id}>
                                <td>{category.name}</td>
                                <td>{category.description}</td>
                                <td>{Object.keys(category.subCategories).length}</td>
                                <td>
                                    <button className="btn btn-primary " data-toggle="modal" data-target="editModal">Edit</button>
                                    &nbsp;
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>

    ) : (
            <>
                <div className="spinner-border"></div>
            </>
        )
}