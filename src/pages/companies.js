import { viewAllCompanies, viewCompany, createCompany, updateCompany, deleteCompany } from "../../src/lib/apiCompany";
import ListCompany from "../../components/List/ListCompany";
import styles from '../../styles/Home.module.css';
import ModalCompany from '../../components/Modal/ModalCompany';
import ModalDelete from "../../components/Modal/ModalDelete";

export default function companiesPage() {

    const [showElements, setShowElements] = React.useState(true);
    const [showModal, setShowModal] = React.useState(false);
    const [showDeleteModal, setShowDeleteModal] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);
    const [allCompanies, setAllCompanies] = React.useState([]);
    const [newCompany, setNewCompany] = React.useState({});


    React.useEffect(() => getCompanies(), []);

    const getCompanies = () => {
        viewAllCompanies().then(allCompanies => {
            setAllCompanies(allCompanies);
        })
    };

    const handleCloseModal = () => {
        console.log("handleCloseModal")
        setShowModal(false);
        setNewCompany({});
    };

    const handleClickAddCompany = () => {
        console.log("handleClickAddCompany")
        setShowModal(true);
        setEditMode(false);
        setNewCompany({});
    }

    const handleClickUpdateCompany = () => {
        updateCompany(newCompany).then(() => {
            handleCloseModal()
            getCompanies();
        })
    }

    const handleChange = path => name => event => {
        if (path) {
            setNewCompany({
                ...newCompany,
                [path]: {
                    ...newCompany[path],
                    [name]: event.target.value
                }
            });
        } else {
            setNewCompany({
                ...newCompany,
                [name]: event.target.value
            });
        }
        console.log(newCompany);
    };

    const handleClickOnCreateNewCompany = () => {

        createCompany(newCompany).then(company => {
            getCompanies();
            setNewCompany({})
            setShowElements(true);
            handleCloseModal();
        })

    };

    const handleClickEditCompany = companyID => {
        viewCompany(companyID).then(company => {
            console.log("FOUND IT", company);
            setShowModal(true);
            setEditMode(true);
            setNewCompany(company);
        })
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const handleClickDeleteCompany = company => {
        setNewCompany(company);
        setShowDeleteModal(true);
    };


    const DeleteCompanyOnClick = () => {
        console.log("DELETING", newCompany);
        deleteCompany(newCompany._id).then(() => {
            getCompanies();
            setNewCompany({});
            setShowDeleteModal(false);
        })
    }

    return (
        <div >
            <ModalCompany
                open={showModal}
                handleClose={handleCloseModal}
                allCompanies={allCompanies}
                handleChange={handleChange}
                handleClickUpdateCompany={handleClickUpdateCompany}
                handleClickOnCreateNewCompany={handleClickOnCreateNewCompany}
                newCompany={newCompany}
                editMode={editMode}
            />

            <ModalDelete
                open={showDeleteModal}
                handleClose={handleCloseDeleteModal}
                handleDelete={DeleteCompanyOnClick}
                item={newCompany}
            />

            <div >
                <div className={styles.tabletop}>
                    <h3>Companies</h3>
                </div>

                <div className={styles.tabletop}>
                    {showElements ?
                        <button
                            className="btn btn-success"
                            onClick={() => handleClickAddCompany()}
                        >
                            <i className="fas fa-plus-square"></i>&nbsp;Add new Company</button>
                        :
                        null
                    }
                </div>

                <div >
                    <ListCompany
                        allCompanies={allCompanies}
                        handleClickEditCompany={handleClickEditCompany}
                        handleClickDeleteCompany={handleClickDeleteCompany}
                    />
                </div>
            </div>
        </div>
    );
};