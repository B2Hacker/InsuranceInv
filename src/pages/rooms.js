import { viewAllRooms, viewRoom, createRoom, updateRoom, deleteRoom } from "../../src/lib/apiRoom";
import { viewAllLocations, viewLocation } from "../../src/lib/apiLocation";
import ListRoom from "../../components/List/ListRoom";
import styles from '../../styles/Home.module.css';
import ModalRoom from '../../components/Modal/ModalRoom';
import ModalDelete from "../../components/Modal/ModalDelete";

export default function roomsPage() {

    const [showElements, setShowElements] = React.useState(true);
    const [showModal, setShowModal] = React.useState(false);
    const [showDeleteModal, setShowDeleteModal] = React.useState(false);
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

    const handleClickEditRoom = roomID => {
        viewRoom(roomID).then(room => {
            console.log("FOUND IT", room);
            setShowModal(true);
            setEditMode(true);
            setNewRoom(room);
        })
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const handleClickDeleteRoom = room => {
        setNewRoom(room);
        setShowDeleteModal(true);
    };


    const DeleteRoomOnClick = () => {
        console.log("DELETING", newRoom);
        deleteRoom(newRoom._id).then(() => {
            getRooms();
            setNewRoom({});
            setShowDeleteModal(false);
        })
    }

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

            <ModalDelete
                open={showDeleteModal}
                handleClose={handleCloseDeleteModal}
                handleDelete={DeleteRoomOnClick}
                item={newRoom}
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