import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import { Card } from '@material-ui/core';


export default function ListRoom(props) {

    const { allRooms, handleClickEditRoom, Borrar } = props;

    return allRooms && allRooms.length > 0 ? (
        <>

            <div className={styles.container}>
                <table className="table table-bordered" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Location</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allRooms.map(room => (
                            <tr key={room._id}>
                                <td>{room.name}</td>
                                <td>{room.description}</td>
                                <td>
                                    <Card key={room._id}>
                                        <div className="card bg-dark text-white">
                                            <img size="16by9" src={room.pictures} className="card-img" alt=""></img>
                                            <div className="card-img-overlay" />
                                        </div>
                                    </Card>
                                </td>
                                <td>{room.location}</td>
                                <td>
                                    <button type="button" className="btn btn-primary" onClick={() => handleClickEditRoom(room._id)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => Borrar(room._id)}>Delete</button>
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