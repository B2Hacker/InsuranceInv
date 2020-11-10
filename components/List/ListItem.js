import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';



export default function ListItem(props) {

    const { allItems, handleClickEditItem, handleClickDeleteItem } = props;

    return allItems && allItems.length > 0 ? (
        <>

            <div className={styles.container}>
                <div className="table-responsive">
                    <table className="datatable table-bordered table-sm table-hover" >
                        <thead className="bg-success">
                            <tr className="text-white">
                                <th>Name</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Location</th>
                                <th>Room</th>
                                <th>Category</th>
                                <th>Condition</th>
                                <th>Estimated Cost</th>
                                <th>Model</th>
                                <th>Brand</th>
                                <th>Serial No.</th>
                                <th>Notes</th>
                                <th>Purchase Date</th>
                                <th>Company</th>
                                <th>Cost</th>
                                {/* <th>Warranty</th> */}
                                <th>Contract</th>
                                <th>Purchase Notes</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allItems.map(item => (
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td><img src={item.pictures} className="img-fluid" alt="" /></td>
                                    <td>{item.location ? `${item.location.name}` : ""}</td>
                                    <td>{item.room ? `${item.room.name}` : ""}</td>
                                    <td>{item.category ? `${item.category.name}` : ""}</td>
                                    <td>{item.condition ? `${item.condition.name}` : ""}</td>
                                    <td>{item.estimatedValue}</td>
                                    <td>{item.model}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.serialNumber}</td>
                                    <td>{item.notes}</td>
                                    <td>{item.purchaseInfo.purchaseDate}</td>
                                    <td>{item.purchaseInfo && item.purchaseInfo.company ? `${item.purchaseInfo.company.name}` : ""}</td>
                                    <td>{item.purchaseInfo.cost}</td>
                                    {/* <td>{item.purchaseInfo.waranty}</td> */}
                                    <td>{item.purchaseInfo && item.purchaseInfo.contract ? `${item.purchaseInfo.contract.name}` : ""}</td>
                                    <td>{item.purchaseInfo.purchaseNotes}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary" onClick={() => handleClickEditItem(item._id)}>Edit&nbsp;<i className="fas fa-edit"></i></button>
                                        <button type="button" className="btn btn-danger" onClick={() => handleClickDeleteItem(item._id)}>Delete&nbsp;<i className="fas fa-trash-alt"></i></button>
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