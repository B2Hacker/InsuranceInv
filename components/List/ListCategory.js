import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';



export default function ListCategory(props) {

    const { allCategories, handleClickEditCategory, handleClickDeleteCategory } = props;

    return allCategories && allCategories.length > 0 ? (
        <>

            <div className={styles.container}>
                <div className="table-responsive">
                    <table className="datatable table-bordered table-sm table-hover" >
                        <thead className="bg-success">
                            <tr className="text-white">
                                <th>Name</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>SubCategory</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allCategories.map(category => (
                                <tr key={category._id}>
                                    <td>{category.name}</td>
                                    <td>{category.description}</td>
                                    <td><img src={category.pictures} className="img-fluid" alt="" /></td>
                                    <td>{category.subCategories && category.subCategories[0] ? `${category.subCategories[0].name}` : ""}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary" onClick={() => handleClickEditCategory(category._id)}>Edit&nbsp;<i className="fas fa-edit"></i></button>
                                        <button type="button" className="btn btn-danger" onClick={() => handleClickDeleteCategory(category)}>Delete&nbsp;<i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    ) : (
            <>
                <div className={styles.container}>
                    <div className="spinner-border"></div>
                </div>
            </>
        );
}