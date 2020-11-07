import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';



export default function ListCategory(props) {

    const { allCategories, handleClickEditCategory, handleClickDeleteCategory } = props;

    return allCategories && allCategories.length > 0 ? (
        <>

            <div className={styles.container}>
                <table className="table table-bordered" >
                    <thead>
                        <tr>
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
                                <td>{category.subCategories}</td>
                                <td>
                                    <button type="button" className="btn btn-primary" onClick={() => handleClickEditCategory(category._id)}>Edit&nbsp;<i class="fas fa-edit"></i></button>
                                    <button className="btn btn-danger" onClick={() => handleClickDeleteCategory(category._id)}>Delete&nbsp;<i class="fas fa-trash-alt"></i></button>
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
        );
}