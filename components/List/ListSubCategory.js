import React from 'react';
import styles from '../../styles/Home.module.css';

export default function CategoriesList(props) {

    const { allSubCategories } = props;

    return allSubCategories && allSubCategories.length > 0 ? (
        <>
            <div className={styles.container}>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allSubCategories.map(subCategory => (
                            <tr key={subCategory._id}>
                                <td>{subCategory.name}</td>
                                <td>{subCategory.description}</td>
                                <td>
                                    <button className="btn btn-primary " data-toggle="modal" data-target="#staticBackdrop">Edit</button>
                                    &nbsp;
                                    <button className="btn btn-danger">Delete</button>
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
        )
}