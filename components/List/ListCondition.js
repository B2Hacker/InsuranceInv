import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';


export default function ListCondition(props) {

    const { allConditions, handleClickEditCondition, Borrar } = props;

    return allConditions && allConditions.length > 0 ? (
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
                        {allConditions.map(condition => (
                            <tr key={condition._id}>
                                <td>{condition.name}</td>
                                <td>{condition.description}</td>
                                <td>
                                    <button type="button" className="btn btn-primary" onClick={() => handleClickEditCondition(condition._id)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => Borrar(condition._id)}>Delete</button>
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