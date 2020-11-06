import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';



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
                            <th>Street #</th>
                            <th>Street</th>
                            <th>Street2</th>
                            <th>City</th>
                            <th>Province</th>
                            <th>Country</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allLocations.map(location => (
                            <tr key={location._id}>
                                <td>{location.name}</td>
                                <td>{location.description}</td>
                                <td><img src={location.pictures} className="img-fluid" alt="" /></td>
                                <td>{location.address.streetNumber}</td>
                                <td>{location.address.street}</td>
                                <td>{location.address.street2}</td>
                                <td>{location.address.city}</td>
                                <td>{location.address.province}</td>
                                <td>{location.address.country}</td>
                                <td>
                                    <button type="button" className="btn btn-primary" onClick={() => handleClickEditLocation(location._id)}>Edit</button>
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