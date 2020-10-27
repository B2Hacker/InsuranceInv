import styles from '../../styles/Home.module.css';


const ModalSubCategory = props => {

    return (

        <>
            <div className={styles.main}>
                <h2>SubCategories</h2>
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modalSubCategoryCreate">New SubCategory</button>
            </div>
            <br />

            { /* Modal edit */}
            <div className="modal fade" id="modalSubCategoryEdit" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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

            { /* Modal create */}
                <div className="modal fade" id="modalSubCategoryCreate" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                                            placeholder="Insert category" />
                                        <br />

                                        <label>Description</label>
                                        <textarea
                                            className="form-control"
                                            type="text"
                                            name="description"
                                            placeholder="Insert description" />
                                        <br />

                                        <label>SubCategory</label>
                                        <input
                                            className="form-control"
                                            name="subCategories"
                                            placeholder="Insert subCategory" />
                                        <br />&nbsp;

                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-success">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
};

export default ModalSubCategory;