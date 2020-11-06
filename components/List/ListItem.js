import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import { Card } from '@material-ui/core';


export default function ListItem(props) {

    const { allItems, handleClickEditItem, Borrar } = props;

    return allItems && allItems.length > 0 ? (
        <>

            <div className={styles.container}>
                <table className="table table-bordered" >
                    <thead>
                        <tr>
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
                            <th>Warranty</th>
                            <th>Contract</th>
                            <th>Purchase Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allItems.map(item => (
                            <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>
                                    <Card key={item._id}>
                                        <div className="card bg-dark text-white">
                                            <img size="16by9" src={item.pictures} className="card-img" alt=""></img>
                                            <div className="card-img-overlay" />
                                        </div>
                                    </Card>
                                </td>
                                <td>{item.location.name}</td>
                                <td>{item.room.name}</td>
                                <td>{item.category.name}</td>
                                <td>{item.condition}</td>
                                <td>{item.estimatedValue}</td>
                                <td>{item.model}</td>
                                <td>{item.brand}</td>
                                <td>{item.serialNumber}</td>
                                <td>{item.notes}</td>
                                <td>{item.purchaseInfo.purchaseDate}</td>
                                <td>{item.purchaseInfo.company}</td>
                                <td>{item.purchaseInfo.cost}</td>
                                <td>{item.purchaseInfo.waranty}</td>
                                <td>{item.purchaseInfo.contract}</td>
                                <td>{item.purchaseInfo.purchaseNotes}</td>
                                <td>
                                    <button type="button" className="btn btn-primary" onClick={() => handleClickEditItem(item._id)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => Borrar(item._id)}>Delete</button>
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