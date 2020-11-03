import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import { Card } from '@material-ui/core';


export default function ListLocation(props) {

    const { allLocations, handleClickEditLocation, Borrar } = props;

        return allLocations && allLocations.length > 0 ? (
            <>

                <div className={styles.container}>
                    <table className="table table-bordered" >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allLocations.map(location => (
                                <tr key={location._id}>
                                    <td>{location.name}</td>
                                    <td>{location.description}</td>
                                    <td>{location.pictures}
                                    <Card key={location._id}>
                                            <div className="card bg-dark text-white">
                                                <img size="16by9" src={location.pictures} className="card-img" alt="..."></img>
                                                <div className="card-img-overlay">
                                                </div>
                                            </div>
                                        </Card></td>
                                    <td>
                                        <button type="button" className="btn btn-warning"
                                            data-toggle="modal" data-target="#EditLocation"
                                            onClick={() => handleClickEditLocation(location._id)}
                                        >Edit</button>
                                        <button className="btn btn-danger" onClick={() => Borrar(location._id)}>Delete</button>
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