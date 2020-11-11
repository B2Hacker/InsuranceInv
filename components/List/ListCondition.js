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
                                        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#DeleteModal" onClick={() => handleClickDeleteCondition(condition._id)}>Delete&nbsp;<i className="fas fa-trash-alt"></i></button>
                                    </td>

                                    <div className="modal fade" id="DeleteModal" >
                                        <div className="modal-dialog">
                                            <div className="modal-content">

                                                {/* <!-- Modal Header --> */}
                                                <div className="modal-header">
                                                    <h4 className="modal-title">Be Careful</h4>
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                </div>

                                                {/* <!-- Modal body --> */}
                                                <div className="modal-body">
                                                    ARE YOU SURE YOU WANT TO DELETE THIS ITEM ?
                                                </div>

                                                {/* <!-- Modal footer --> */}
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-danger" data-dismiss="modal" >Close</button>
                                                </div>
                                                <button type="button" className="btn btn-danger" onClick={() => DeleteConditionOnClick(condition._id)} data-dismiss="modal">
                                                    <i className="fa fa-database"></i> &nbsp; Delete</button>

                                            </div>
                                        </div>
                                    </div>
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