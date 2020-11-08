import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';



export default function ListCompany(props) {

    const { allCompanies, handleClickEditCompany, handleClickDeleteCompany } = props;

    return allCompanies && allCompanies.length > 0 ? (
        <>

            <div className={styles.container}>
                <table className="table table-bordered" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Company Name</th>
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
                        {allCompanies.map(company => (
                            <tr key={company._id}>
                                <td>{company.name}</td>
                                <td>{company.description}</td>
                                <td><img src={company.pictures} className="img-fluid" alt="" /></td>
                                <td>{company.companyFullName}</td>
                                <td>{company.contactInfo ? company.contactInfo.tel : ""}</td>
                                <td>{company.contactInfo ? company.contactInfo.tel2 : ""}</td>
                                <td>{company.contactInfo ? company.contactInfo.email : ""}</td>
                                <td>{company.contactInfo ? company.contactInfo.email2 : ""}</td>
                                <td>{company.contactInfo ? company.contactInfo.url : ""}</td>
                                <td>{company.address ? company.address.streetNumber : ""}</td>
                                <td>{company.address ? company.address.street : ""}</td>
                                <td>{company.address ? company.address.street2 : ""}</td>
                                <td>{company.address ? company.address.city : ""}</td>
                                <td>{company.address ? company.address.province : ""}</td>
                                <td>{company.address ? company.address.country : ""}</td>
                                <td>
                                    <button type="button" className="btn btn-primary" onClick={() => handleClickEditCompany(company._id)}>Edit&nbsp;<i class="fas fa-edit"></i></button>
                                    <button type="button" className="btn btn-danger" onClick={() => handleClickDeleteCompany(company._id)}>Delete&nbsp;<i class="fas fa-trash-alt"></i></button>
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