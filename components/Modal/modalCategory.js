import styles from '../../styles/Home.module.css';
import React, {useState, useEffect} from 'react';

const ModalCategory = props => {

    const {handleChange, createCategory, newCategory } = props;

    return (

        <>
            <div className={styles.main}>
                <h2>Categories</h2>
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modalCategoryCreate">New Category</button>
            </div>
            <br />

            { /* Modal create */}
            <div className="modal fade" id="modalCategoryCreate" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>New Category</h2>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close">
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">

                            <div className="card-body">
                                <div className="form-group">
                                    <label>ID</label>
                                    <input
                                        className="form-control"
                                        readOnly
                                        type="text"
                                    />
                                    <br />

                                    <label>Category</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        placeholder="Insert Category name"
                                        value={newCategory.name}
                                        onChange={handleChange("name")}
                                    />
                                    <br />

                                    <label>Description</label>
                                    <textarea
                                        className="form-control"
                                        type="text"
                                        name="description"
                                        placeholder="Insert a description about the category"
                                        value={newCategory.description}
                                        onChange={handleChange("description")}
                                    />
                                    <br />

                                    <label>New Image</label>
                                    <input
                                        className="form-control"
                                        type="file"
                                        name="pictures"
                                        placeholder="Insert a new Picture"
                                        value={newCategory.pictures}
                                        onchange={handleChange("pictures")} />
                                    <br />

                                    <label>SubCategory</label>
                                    <input
                                        className="form-control"
                                        name="subCategories"
                                        placeholder="Select a subCategory" />
                                    <br />&nbsp;

                                    </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-success" onClick={createCategory}>Add</button>
                        </div>
                    </div>
                </div>
            </div>

            { /* Modal edit */}
            <div className="modal fade" id="modalCategoryEdit" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Edit Category</h5>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close">
                                &times;
                            </button>
                        </div>

                        <div className="card-body">
                            <div className="form-group">
                                <label>ID</label>
                                <input
                                    className="form-control"
                                    readOnly
                                    type="text"
                                    name="_id" />
                                <br />

                                <label>Category</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="category"
                                    placeholder="Insert new category" />
                                <br />

                                <label>Description</label>
                                <textarea
                                    className="form-control"
                                    type="text"
                                    name="description"
                                    placeholder="Insert new description" />
                                <br />

                                <label>SubCategory</label>
                                <input
                                    className="form-control"
                                    name="text"
                                    placeholder="Insert new subCategory" />
                                <br />&nbsp;

                                <label>New Image</label>
                                <input
                                    className="form-control"
                                    type="file"
                                    name="pictures"
                                    placeholder="Insert new Picture" />
                                <br />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-success"><i className="fa fa-database"></i> &nbsp; Save</button>
                        </div>
                    </div>
                </div>
            </div>

            { /* Modal delete */}
            <div className="modal fade" id="modalCategoryDelete" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Delete Category</h2>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close">
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">

                            Are you sure you want to delete this category?

                            </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">NO</button>
                            <button type="button" className="btn btn-success">YES</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ModalCategory;