import { viewAllConditions, viewCondition, createCondition, updateCondition, deleteCondition } from "../../src/lib/apiCondition";
import ListCondition from "../../components/List/ListCondition";
import styles from '../../styles/Home.module.css';
import ModalCondition from '../../components/Modal/ModalCondition';
import { get } from "mongoose";

export default function conditionsPage() {

    const [showElements, setShowElements] = React.useState(true);
    const [showModal, setShowModal] = React.useState(false);
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
        const borrandoCondition = allConditions.filter((condition) => condition._id !== conditionID);
        console.log("Delete", conditionID);
        deleteCondition(conditionID);
        setAllConditions(borrandoCondition);
    };


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
            <div >
                <div>
                    <h3>Conditions</h3>
                </div>

                <div>
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
