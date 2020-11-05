import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import { Card } from '@material-ui/core';


export default function ListContract(props) {

    const { allContracts, handleClickEditContract, Borrar } = props;

    return allContracts && allContracts.length > 0 ? (
        <>

            <div className={styles.container}>
                <table className="table table-bordered" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Files</th>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Contract #</th>
                            <th>Type</th>
                            <th>Emergency Phone</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Renewal Date</th>
                            <th>Cost</th>
                            <th>PaymentType</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allContracts.map(contract => (
                            <tr key={contract._id}>
                                <td>{contract.name}</td>
                                <td>{contract.description}</td>
                                <td>
                                    <Card key={contract._id}>
                                        <div className="card bg-dark text-white">
                                            <img size="16by9" src={contract.pictures} className="card-img" alt=""></img>
                                            <div className="card-img-overlay" />
                                        </div>
                                    </Card>
                                </td>
                                <td>{contract.files}</td>
                                <td>{contract.company}</td>
                                <td>{contract.contact}</td>
                                <td>{contract.contractNumber}</td>
                                <td>{contract.type}</td>
                                <td>{contract.Emergency}</td>
                                <td>{contract.dateStart}</td>
                                <td>{contract.dateEnd}</td>
                                <td>{contract.dateRenewal}</td>
                                <td>{contract.cost}</td>
                                <td>{contract.paymentType}</td>
                                <td>
                                    <button type="button" className="btn btn-primary" onClick={() => handleClickEditContract(contract._id)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => Borrar(contract._id)}>Delete</button>
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