import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import { Card } from '@material-ui/core';


export default function ListContact(props) {

    const { allContacts, handleClickEditContact, Borrar } = props;

    return allContacts && allContacts.length > 0 ? (
        <>

            <div className={styles.container}>
                <table className="table table-bordered" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Company</th>
                            <th>Primary Phone #</th>
                            <th>Secondary Phone #</th>
                            <th>Primary Email</th>
                            <th>Secondary Email</th>
                            <th>Url</th>
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
                        {allContacts.map(contact => (
                            <tr key={contact._id}>
                                <td>{contact.name}</td>
                                <td>{contact.description}</td>
                                <td>
                                    <Card key={contact._id}>
                                        <div className="card bg-dark text-white">
                                            <img size="16by9" src={contact.pictures} className="card-img" alt=""></img>
                                            <div className="card-img-overlay" />
                                        </div>
                                    </Card>
                                </td>
                                <td>{contact.firstName}</td>
                                <td>{contact.lastName}</td>
                                <td>{contact.company}</td>
                                <td>{contact.contactInfo.tel}</td>
                                <td>{contact.contactInfo.tel2}</td>
                                <td>{contact.contactInfo.email}</td>
                                <td>{contact.contactInfo.email2}</td>
                                <td>{contact.contactInfo.url}</td>
                                <td>{contact.address.streetNumber}</td>
                                <td>{contact.address.street}</td>
                                <td>{contact.address.street2}</td>
                                <td>{contact.address.city}</td>
                                <td>{contact.address.province}</td>
                                <td>{contact.address.country}</td>
                                <td>
                                    <button type="button" className="btn btn-primary" onClick={() => handleClickEditContact(contact._id)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => Borrar(contact._id)}>Delete</button>
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