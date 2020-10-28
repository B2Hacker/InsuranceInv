import React from 'react';
import styles from '../../styles/Home.module.css';
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

export default function ListCategory(props) {

    const { allCategories } = props;

    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading();
        }, 5000);
    }, [])

    const loader = () => {
        return allCategories && allCategories.length > 0 ? (

            <>
                <SkeletonTheme color="gray" highlightColor="green">
                    <div className={styles.container}>
                        <table className="table table-bordered" >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>SubCategory</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allCategories.map(category => (
                                    <tr >
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td>
                                        <td><Skeleton /></td>
                                        <td>
                                            <Skeleton />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </SkeletonTheme>
            </>
        ) : (
                <>
                </>
            );
    }



    if (loading) {
        return (
            loader()
        )

    }
    else {

        return allCategories && allCategories.length > 0 ? (
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
                                        <button className="btn btn-primary " data-toggle="modal" data-target="#modalCategoryEdit">Edit</button>
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
                </>
            )
    }
}