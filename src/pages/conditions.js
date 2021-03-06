import { viewAllConditions, viewCondition, createCondition, updateCondition, deleteCondition } from "../../src/lib/apiCondition";
import ListCondition from "../../components/List/ListCondition";
import styles from '../../styles/Home.module.css';
import ModalCondition from '../../components/Modal/ModalCondition';
import ModalDelete from "../../components/Modal/ModalDelete";

export default function conditionsPage() {

    const [showElements, setShowElements] = React.useState(true);
    const [showModal, setShowModal] = React.useState(false);
    const [showDeleteModal, setShowDeleteModal] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);
    const [allConditions, setAllConditions] = React.useState([]);
    const [newCondition, setNewCondition] = React.useState({});


    React.useEffect(() => getConditions(), []);

    const getConditions = () => {
        viewAllConditions().then(allConditions => {
            setAllConditions(allConditions);
        })
    };

    const handleCloseModal = () => {
        console.log("handleCloseModal")
        setShowModal(false);
        setNewCondition({});
    };

    const handleClickAddCondition = () => {
        console.log("handleClickAddCondition")
        setShowModal(true);
        setEditMode(false);
        setNewCondition({});
    }

    const handleClickUpdateCondition = () => {
        updateCondition(newCondition).then(() => {
            handleCloseModal();
            getConditions();
        })
    }

    const handleChange = path => name => event => {
        if (path) {
            setNewCondition({
                ...newCondition,
                [path]: {
                    ...newCondition[path],
                    [name]: event.target.value
                }
            });
        } else {
            setNewCondition({
                ...newCondition,
                [name]: event.target.value
            });
        }
        console.log(newCondition);
    };

    const handleClickOnCreateNewCondition = () => {

        createCondition(newCondition).then(condition => {
            getConditions();
            setNewCondition({})
            setShowElements(true);
            handleCloseModal();
        })

    };

    const handleClickEditCondition = conditionID => {
        viewCondition(conditionID).then(condition => {
            console.log("FOUND IT", condition);
            setShowModal(true);
            setEditMode(true);
            setNewCondition(condition);
        })
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const handleClickDeleteCondition = condition => {
        setNewCondition(condition);
        setShowDeleteModal(true);
    };


    const DeleteConditionOnClick = () => {
        console.log("DELETING", newCondition);
        deleteCondition(newCondition._id).then(() => {
            getConditions();
            setNewCondition({});
            setShowDeleteModal(false);
        })
    }


    return (
        <div >
            <ModalCondition
                open={showModal}
                handleClose={handleCloseModal}
                allConditions={allConditions}
                handleChange={handleChange}
                handleClickUpdateCondition={handleClickUpdateCondition}
                handleClickOnCreateNewCondition={handleClickOnCreateNewCondition}
                newCondition={newCondition}
                editMode={editMode}
            />

            <ModalDelete
                open={showDeleteModal}
                handleClose={handleCloseDeleteModal}
                handleDelete={DeleteConditionOnClick}
                item={newCondition}
            />

            <div >
                <div className={styles.tabletop}>
                    <h3>Conditions</h3>
                </div>

                <div className={styles.tabletop}>
                    {showElements ?
                        <button
                            className="btn btn-success"
                            onClick={() => handleClickAddCondition()}
                        >
                            <i className="fas fa-plus-square"></i>&nbsp;Add new Condition</button>
                        :
                        null
                    }
                </div>

                <div >
                    <ListCondition
                        allConditions={allConditions}
                        handleClickEditCondition={handleClickEditCondition}
                        handleClickDeleteCondition={handleClickDeleteCondition}
                    />
                </div>
            </div>
        </div>
    );
};
