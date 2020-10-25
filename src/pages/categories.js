import styles from "../../styles/Home.module.css"
import { viewAllCategories } from "../../src/lib/apiCategory";

export default function categoriesPage() {

    const [allCategories, setAllCategories] = React.useState([]);



    React.useEffect(() => {
        getCategories();
    }, []);

    const getCategories = () => {
        viewAllCategories().then(categories => {
            setAllCategories(categories);
        });
    }



    return (
        <>
            <div className={styles.container}>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>SubCategory</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allCategories.map(category => (
                            <tr key={category._id}>
                                <td>{category.name}</td>
                                <td>{category.description}</td>
                                <td>{Object.keys(category.subCategories).length}</td>
                                <td>
                                    <button className="btn btn-primary " data-toggle="modal" data-target="editModal">Edit</button>
                                    &nbsp;
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal Edit */}

            <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="editModalLabel">Edit Category</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
