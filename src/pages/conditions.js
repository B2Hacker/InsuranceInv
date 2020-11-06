import { viewAllConditions, viewCondition, createCondition, updateCondition, deleteCondition } from "../../src/lib/apiCondition";
import ListCondition from "../../components/List/ListCondition";
import styles from '../../styles/Home.module.css';
import ModalCondition from '../../components/Modal/ModalCondition';

export default function conditionsPage() {

    const [showElements, setShowElements] = React.useState(true);
    const [showModal, setShowModal] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);
    const [allConditionsState, setAllConditionsState] = React.useState([]);
    const [newCondition, setNewCondition] = React.useState({});


    React.useEffect(() => getConditions(), []);

    const getConditions = () => {
        viewAllConditions().then(allConditions => {
            setAllConditionsState(allConditions);
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

    const handleClickOnCancelNewCondition = () => {
        setNewCondition({})
        setShowElements(true);
    };

    const handleClickEditCondition = conditionID => {
        viewCondition(conditionID).then(condition => {
            console.log("FOUND IT", condition);
            setShowModal(true);
            setEditMode(true);
            setNewCondition(condition);
        })
    };

    const handleClickDeleteCondition = conditionID => {
        const borrandoCondition = allConditionsState.filter((condition) => condition.conditionID !== conditionID);
        console.log("DELETING", conditionID);
        setAllConditionsState(borrandoCondition)

        deleteCondition(conditionID);
        setNewCondition(true);
        setShowElements(true);

        getConditions();
    };

    return (
        <div >
            <ModalCondition
                open={showModal}
                handleClose={handleCloseModal}
                allConditions={allConditionsState}
                handleChange={handleChange}
                handleClickUpdateCondition={handleClickUpdateCondition}
                handleClickOnCreateNewCondition={handleClickOnCreateNewCondition}
                newCondition={newCondition}
                editMode={editMode}
            />
            <div >
                <div className={styles.main}>
                    <h3>Conditions</h3>
                </div>

                <div className={styles.main}>
                    {showElements ?
                        <button
                            className="btn btn-success"
                            onClick={() => handleClickAddCondition()}
                        >
                            <i class="fas fa-plus-square"></i>&nbsp;Add new Condition</button>
                        :
                        null
                    }
                </div>

                <div >
                    <ListCondition
                        allConditions={allConditionsState}
                        handleClickEditCondition={handleClickEditCondition}
                        handleClickDeleteCondition={handleClickDeleteCondition}
                    />
                </div>
            </div>
        </div>
    );
};
