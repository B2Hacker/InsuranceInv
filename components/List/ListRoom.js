import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';

export default function ListRoom(props) {

    const { allRooms, handleClickEditRoom, handleClickDeleteRoom } = props;

    return allRooms && allRooms.length > 0 ? (
        <>

            <div className={styles.container}>
                <div className="table-responsive">
                    <table className="datatable table-bordered table-sm table-hover" >
                        <thead className="bg-success">
                            <tr className="text-white">
                                <th>Name</th>
                                <th>Description</th>
                                {/* <th>Image</th> */}
                                <th>Location</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allRooms.map(room => (
                                <tr key={room._id}>
                                    <td>{room.name}</td>
                                    <td>{room.description}</td>
                                    {/* <td><img src={room.pictures} className="img-fluid" alt="" /></td> */}
                                    <td>{room.location && room.location[0] ? `${room.location[0].name}` : ""}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary" onClick={() => handleClickEditRoom(room._id)}>Edit&nbsp;<i className="fas fa-edit"></i></button>
                                        <button type="button" className="btn btn-danger" onClick={() => handleClickDeleteRoom(room)}>Delete&nbsp;<i className="fas fa-trash-alt"></i></button>
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