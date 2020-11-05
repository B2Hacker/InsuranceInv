import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import { Card } from '@material-ui/core';


export default function ListCategory(props) {

    const { allCategories, handleClickEditCategory, Borrar } = props;

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
                                <td>
                                    <Card key={category._id}>
                                        <div className="card bg-dark text-white">
                                            <img size="16by9" src={category.pictures} className="card-img" alt=""></img>
                                            <div className="card-img-overlay" />
                                        </div>
                                    </Card>
                                </td>
                                <td>{category.subCategories}</td>
                                <td>
                                    <button type="button" className="btn btn-primary" onClick={() => handleClickEditCategory(category._id)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => Borrar(category._id)}>Delete</button>
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