import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';



export default function ListLocation(props) {

    const { allLocations, handleClickEditLocation, handleClickDeleteLocation } = props;

    return allLocations && allLocations.length > 0 ? (
        <>

            <div className={styles.container}>
                <div className="table-responsive">
                    <table className="datatable table-bordered table-sm table-hover" >
                        <thead className="bg-success">
                            <tr className="text-white">
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
                                    <td>{location.address ? location.address.streetNumber : ""}</td>
                                    <td>{location.address ? location.address.street : ""}</td>
                                    <td>{location.address ? location.address.street2 : ""}</td>
                                    <td>{location.address ? location.address.city : ""}</td>
                                    <td>{location.address ? location.address.province : ""}</td>
                                    <td>{location.address ? location.address.country : ""}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary" onClick={() => handleClickEditLocation(location._id)}>Edit&nbsp;<i className="fas fa-edit"></i></button>
                                        <button type="button" className="btn btn-danger" onClick={() => handleClickDeleteLocation(location._id)}>Delete&nbsp;<i className="fas fa-trash-alt"></i></button>
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