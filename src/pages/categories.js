//import styles from "../../styles/Home.module.css"
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

        <div>
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
                                <button className="btn btn-primary">Edit</button>
                                &nbsp;
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};
