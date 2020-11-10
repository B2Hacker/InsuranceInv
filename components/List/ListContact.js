import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';



export default function ListContact(props) {

    const { allContacts, handleClickEditContact, handleClickDeleteContact } = props;

    return allContacts && allContacts.length > 0 ? (
        <>

            <div className={styles.container}>
                <div className="table-responsive">
                    <table className="datatable table-bordered table-sm table-hover" >
                        <thead className="bg-success">
                            <tr className="text-white">
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
                                    <td><img src={contact.pictures} className="img-fluid" alt="" /></td>
                                    <td>{contact.firstName}</td>
                                    <td>{contact.lastName}</td>
                                    <td>{contact.company ? `${contact.company.name}` : ""}</td>
                                    <td>{contact.contactInfo ? contact.contactInfo.tel : ""}</td>
                                    <td>{contact.contactInfo ? contact.contactInfo.tel2 : ""}</td>
                                    <td>{contact.contactInfo ? contact.contactInfo.email : ""}</td>
                                    <td>{contact.contactInfo ? contact.contactInfo.email2 : ""}</td>
                                    <td>{contact.contactInfo ? contact.contactInfo.url : ""}</td>
                                    <td>{contact.address ? contact.address.streetNumber : ""}</td>
                                    <td>{contact.address ? contact.address.street : ""}</td>
                                    <td>{contact.address ? contact.address.street2 : ""}</td>
                                    <td>{contact.address ? contact.address.city : ""}</td>
                                    <td>{contact.address ? contact.address.province : ""}</td>
                                    <td>{contact.address ? contact.address.country : ""}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary" onClick={() => handleClickEditContact(contact._id)}>Edit&nbsp;<i className="fas fa-edit"></i></button>
                                        <button type="button" className="btn btn-danger" onClick={() => handleClickDeleteContact(contact._id)}>Delete&nbsp;<i className="fas fa-trash-alt"></i></button>
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