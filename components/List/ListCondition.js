import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';

export default function ListCondition(props) {

    const { allConditions, handleClickEditCondition, handleClickDeleteCondition } = props;

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
                                    <button type="button" className="btn btn-primary" onClick={() => handleClickEditCondition(condition._id)}>Edit&nbsp;<i class="fas fa-edit"></i></button>
                                    <button className="btn btn-danger" onClick={() => handleClickDeleteCondition(condition._id)}>Delete&nbsp;<i class="fas fa-trash-alt"></i></button>
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