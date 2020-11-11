import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';

export default function ListCondition(props) {

    const { allConditions, handleClickEditCondition, handleClickDeleteCondition, DeleteConditionOnClick, open } = props;

    return allConditions && allConditions.length > 0 ? (
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
                            {allConditions.map(condition => (
                                <tr key={condition._id}>
                                    <td>{condition.name}</td>
                                    <td>{condition.description}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary" onClick={() => handleClickEditCondition(condition._id)}>Edit&nbsp;<i className="fas fa-edit"></i></button>
                                        <button type="button" className="btn btn-danger" onClick={() => handleClickDeleteCondition(condition._id)}>Delete&nbsp;<i className="fas fa-trash-alt"></i></button>
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