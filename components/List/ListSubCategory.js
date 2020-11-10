import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';

export default function ListSubCategory(props) {

    const { allSubCategories, handleClickEditSubCategory, handleClickDeleteSubCategory } = props;

    return allSubCategories && allSubCategories.length > 0 ? (
        <>

            <div className={styles.container}>
                <div className="table-responsive">
                    <table className="datatable table-bordered table-sm table-hover" >
                        <thead className="bg-success">
                            <tr className="text-white">
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
                                        <button type="button" className="btn btn-primary" onClick={() => handleClickEditSubCategory(subCategory._id)}>Edit&nbsp;<i className="fas fa-edit"></i></button>
                                        <button type="button" className="btn btn-danger" onClick={() => handleClickDeleteSubCategory(subCategory._id)}>Delete&nbsp;<i className="fas fa-trash-alt"></i></button>
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
                <div className="spinner-border"></div>
            </>
        );
}