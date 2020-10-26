import styles from "../../styles/Home.module.css"
import { viewAllCategories } from "../../src/lib/apiCategory";

export default function categoriesPage() {

    const [allCategories, setAllCategories] = React.useState([]);
    const [isShown, setIsShown] = React.useState(false);

    const showModal = () => {
        setIsShown(true);
    };

    const closeModal = () => {
        setIsShown(false);
    };


    React.useEffect(() => {
        if (!sessionStorage.popupModal) {
            const timer = setTimeout(() => {
                setIsShown(true);
                sessionStorage.popupModal = 1;
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, []);


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
                                    <button className="btn btn-primary " data-toggle="modal" data-target="channelModal">Edit</button>
                                    &nbsp;
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal Edit */}

            <div className="modal" id="channelModal">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-light">Free Measure. Free Quote.</h5>

                            <button
                                onClick={closeModal}
                                style={{ color: '#fff' }}
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="row">
                                <div className="col-6">
                                    <img src="image.jpg" alt="react-hooks" />
                                </div>

                                <div className="col-6">
                                    <p className="lead text-light">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae cumque, assumenda cupiditate
                                        incidunt reiciendis earum
                </p>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn-lg btn btn-primary">
                                <span style={{ color: '#fff' }}>
                                    <i className="fa fa-phone mr-1 " />
                                    <a href="tel:01234567" style={{ color: '#fff' }}>
                                        0123 4567{' '}
                                    </a>
                                </span>
                            </button>
                            <button onClick={closeModal} type="button" className="btn btn-lg">
                                No Thanks
            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
