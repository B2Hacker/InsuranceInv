import { viewAllRooms, viewRoom, createRoom, updateRoom, deleteRoom } from "../../src/lib/apiRoom";
import { viewAllLocations, viewLocation } from "../../src/lib/apiLocation";
import ListRoom from "../../components/List/ListRoom";
import styles from '../../styles/Home.module.css';
import ModalRoom from '../../components/Modal/ModalRoom';

export default function roomsPage() {

    const [showElements, setShowElements] = React.useState(true);
    const [showModal, setShowModal] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);
    const [allRooms, setAllRooms] = React.useState([]);
    const [allLocations, setAllLocations] = React.useState([]);
    const [newRoom, setNewRoom] = React.useState({});


    React.useEffect(() => {
        getRooms();
        getLocations();
    }, []);

    const getRooms = () => {
        viewAllRooms().then(allRooms => {
            setAllRooms(allRooms);
        })
    };

    const getLocations = () => {
        viewAllLocations().then(allRooms => {
            setAllLocations(allRooms);
        });
    }

    const handleCloseModal = () => {
        console.log("handleCloseModal")
        setShowModal(false);
        setNewRoom({});
    };

    const handleClickAddRoom = () => {
        console.log("handleClickAddRoom")
        setShowModal(true);
        setEditMode(false);
        setNewRoom({});
    }

    const handleClickUpdateRoom = () => {
        updateRoom(newRoom).then(() => {
            handleCloseModal()
            getRooms();
        })
    }

    const handleChange = path => name => event => {
        if (path) {
            setNewRoom({
                ...newRoom,
                [path]: {
                    ...newRoom[path],
                    [name]: event.target.value
                }
            });
        } else {
            setNewRoom({
                ...newRoom,
                [name]: event.target.value
            });
        }
        console.log(newRoom);
    };

    const handleClickOnCreateNewRoom = () => {

        createRoom(newRoom).then(room => {
            getRooms();
            setNewRoom({})
            setShowElements(true);
            handleCloseModal();
        })

    };

    const handleClickOnCancelNewRoom = () => {
        setNewRoom({})
        setShowElements(true);
    };

    const handleClickEditRoom = roomID => {
        viewRoom(roomID).then(room => {
            console.log("FOUND IT", room);
            setShowModal(true);
            setEditMode(true);
            setNewRoom(room);
        })
    };

    const handleClickDeleteRoom = roomID => {
        const borrandoRoom = allRooms.filter((room) => room._id !== roomID);
        console.log("DELETING", roomID);
        deleteRoom(roomID);
        setAllRooms(borrandoRoom)
    };

    return (
        <div >
            <ModalRoom
                open={showModal}
                handleClose={handleCloseModal}
                allRooms={allRooms}
                allLocations={allLocations}
                handleChange={handleChange}
                handleClickUpdateRoom={handleClickUpdateRoom}
                handleClickOnCreateNewRoom={handleClickOnCreateNewRoom}
                newRoom={newRoom}
                editMode={editMode}
            />
            <div >
                <div className={styles.main}>
                    <h3>Rooms</h3>
                </div>

                <div className={styles.main}>
                    {showElements ?
                        <button
                            className="btn btn-success"
                            onClick={() => handleClickAddRoom()}
                        >
                            <i className="fas fa-plus-square"></i>&nbsp;Add new Room</button>
                        :
                        null
                    }
                </div>

                <div >
                    <ListRoom
                        allRooms={allRooms}
                        handleClickEditRoom={handleClickEditRoom}
                        handleClickDeleteRoom={handleClickDeleteRoom}
                    />
                </div>
            </div>
        </div>
    );
};