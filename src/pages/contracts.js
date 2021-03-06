import { viewAllContracts, viewContract, createContract, updateContract, deleteContract } from "../../src/lib/apiContract";
import { viewAllContacts, viewContact } from "../../src/lib/apiContact";
import { viewAllCompanies, viewCompany } from "../../src/lib/apiCompany";
import ListContract from "../../components/List/ListContract";
import styles from '../../styles/Home.module.css';
import ModalContract from '../../components/Modal/ModalContract';
import ModalDelete from "../../components/Modal/ModalDelete";

export default function contractsPage() {

    const [showElements, setShowElements] = React.useState(true);
    const [showModal, setShowModal] = React.useState(false);
    const [showDeleteModal, setShowDeleteModal] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);
    const [allContracts, setAllContracts] = React.useState([]);
    const [allContacts, setAllContacts] = React.useState([]);
    const [allCompanies, setAllCompanies] = React.useState([]);
    const [newContract, setNewContract] = React.useState({});


    React.useEffect(() => {
        getContracts();
        getContacts();
        getCompanies();
    }, []);

    const getContracts = () => {
        viewAllContracts().then(allContracts => {
            setAllContracts(allContracts);
        })
    };

    const getContacts = () => {
        viewAllContacts().then(allContracts => {
            setAllContacts(allContracts);
        })
    };

    const getCompanies = () => {
        viewAllCompanies().then(allContracts => {
            setAllCompanies(allContracts);
        })
    };

    const handleCloseModal = () => {
        console.log("handleCloseModal")
        setShowModal(false);
        setNewContract({});
    };

    const handleClickAddContract = () => {
        console.log("handleClickAddContract")
        setShowModal(true);
        setEditMode(false);
        setNewContract({});
    }

    const handleClickUpdateContract = () => {
        updateContract(newContract).then(() => {
            handleCloseModal()
            getContracts();
        })
    }

    const handleChange = path => name => event => {
        if (path) {
            setNewContract({
                ...newContract,
                [path]: {
                    ...newContract[path],
                    [name]: event.target.value
                }
            });
        } else {
            setNewContract({
                ...newContract,
                [name]: event.target.value
            });
        }
        console.log(newContract);
    };

    const handleClickOnCreateNewContract = () => {

        createContract(newContract).then(contract => {
            getContracts();
            setNewContract({})
            setShowElements(true);
            handleCloseModal();
        })

    };

    const handleClickEditContract = contractID => {
        viewContract(contractID).then(contract => {
            console.log("FOUND IT", contract);
            setShowModal(true);
            setEditMode(true);
            setNewContract(contract);
        })
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const handleClickDeleteContract = contract => {
        setNewContract(contract);
        setShowDeleteModal(true);
    };


    const DeleteContractOnClick = () => {
        console.log("DELETING", newContract);
        deleteContract(newContract._id).then(() => {
            getContracts();
            setNewContract({});
            setShowDeleteModal(false);
        })
    }

    return (
        <div >
            <ModalContract
                open={showModal}
                handleClose={handleCloseModal}
                allContracts={allContracts}
                allContacts={allContacts}
                allCompanies={allCompanies}
                handleChange={handleChange}
                handleClickUpdateContract={handleClickUpdateContract}
                handleClickOnCreateNewContract={handleClickOnCreateNewContract}
                newContract={newContract}
                editMode={editMode}
            />

            <ModalDelete
                open={showDeleteModal}
                handleClose={handleCloseDeleteModal}
                handleDelete={DeleteContractOnClick}
                item={newContract}
            />

            <div >
                <div className={styles.tabletop}>
                    <h3>Contracts</h3>
                </div>

                <div className={styles.tabletop}>
                    {showElements ?
                        <button
                            className="btn btn-success"
                            onClick={() => handleClickAddContract()}
                        >
                            <i className="fas fa-plus-square"></i>&nbsp;Add new Contract</button>
                        :
                        null
                    }
                </div>

                <div >
                    <ListContract
                        allContracts={allContracts}
                        handleClickEditContract={handleClickEditContract}
                        handleClickDeleteContract={handleClickDeleteContract}
                    />
                </div>
            </div>
        </div>
    );
};
