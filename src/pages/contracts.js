import { viewAllContracts, viewContract, createContract, updateContract, deleteContract } from "../../src/lib/apiContract";
import ListContract from "../../components/List/ListContract";
import styles from '../../styles/Home.module.css';
import ModalContract from '../../components/Modal/ModalContract';

export default function contractsPage() {

    const [showElements, setShowElements] = React.useState(true);
    const [showModal, setShowModal] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);
    const [allContractsState, setAllContractsState] = React.useState([]);
    const [newContract, setNewContract] = React.useState({});


    React.useEffect(() => getContracts(), []);

    const getContracts = () => {
        viewAllContracts().then(allContracts => {
            setAllContractsState(allContracts);
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

    const handleClickOnCancelNewContract = () => {
        setNewContract({})
        setShowElements(true);
    };

    const handleClickEditContract = contractID => {
        viewContract(contractID).then(contract => {
            console.log("FOUND IT", contract);
            setShowModal(true);
            setEditMode(true);
            setNewContract(contract);
        })
    };

    const handleClickDeleteContract = contractID => {
        const borrandoContract = allContractsState.filter((contract) => contract.contractID !== contractID);
        console.log("DELETING", contractID);
        setAllContractsState(borrandoContract)

        deleteContract(contractID);
        setNewContract(true);
        setShowElements(true);

        getContracts();
    };

    return (
        <div >
            <ModalContract
                open={showModal}
                handleClose={handleCloseModal}
                allContracts={allContractsState}
                handleChange={handleChange}
                handleClickUpdateContract={handleClickUpdateContract}
                handleClickOnCreateNewContract={handleClickOnCreateNewContract}
                newContract={newContract}
                editMode={editMode}
            />
            <div >
                <div className={styles.main}>
                    <h3>Contracts</h3>
                </div>

                <div className={styles.main}>
                    {showElements ?
                        <button
                            className="btn btn-success"
                            onClick={() => handleClickAddContract()}
                        >
                            <i class="fas fa-plus-square"></i>&nbsp;Add new Contract</button>
                        :
                        null
                    }
                </div>

                <div >
                    <ListContract
                        allContracts={allContractsState}
                        handleClickEditContract={handleClickEditContract}
                        handleClickDeleteContract={handleClickDeleteContract}
                    />
                </div>
            </div>
        </div>
    );
};
