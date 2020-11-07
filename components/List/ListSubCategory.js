import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';

export default function ListSubCategory(props) {

    const { allSubCategories, handleClickEditSubCategory, handleClickDeleteSubCategory } = props;

    return allSubCategories && allSubCategories.length > 0 ? (
        <>

            <div className={styles.container}>
                <table className="table table-bordered" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allSubCategories.map(subCategory => (
                            <tr key={subCategory._id}>
                                <td>{subCategory.name}</td>
                                <td>{subCategory.description}</td>
                                <td>
                                    <button type="button" className="btn btn-primary" onClick={() => handleClickEditSubCategory(subCategory._id)}>Edit&nbsp;<i class="fas fa-edit"></i></button>
                                    <button className="btn btn-danger" onClick={() => handleClickDeleteSubCategory(subCategory._id)}>Delete&nbsp;<i class="fas fa-trash-alt"></i></button>
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