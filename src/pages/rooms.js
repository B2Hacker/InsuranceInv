import { viewAllRooms, viewRoom, createRoom, updateRoom, deleteRoom } from "../../src/lib/apiRoom";
import ListRoom from "../../components/List/ListRoom";
import styles from '../../styles/Home.module.css';
import ModalRoom from '../../components/Modal/ModalRoom';

export default function roomsPage() {

    const [showElements, setShowElements] = React.useState(true);
    const [showModal, setShowModal] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);
    const [allRoomsState, setAllRoomsState] = React.useState([]);
    const [newRoom, setNewRoom] = React.useState({});


    React.useEffect(() => getRooms(), []);

    const getRooms = () => {
        viewAllRooms().then(allRooms => {
            setAllRoomsState(allRooms);
        })
    };

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
        const borrandoRoom = allRoomsState.filter((room) => room.roomID !== roomID);
        console.log("DELETING", roomID);
        setAllRoomsState(borrandoRoom)

        deleteRoom(roomID);
        setNewRoom(true);
        setShowElements(true);

        getRooms();
    };

    return (
        <div >
            <ModalRoom
                open={showModal}
                handleClose={handleCloseModal}
                allRooms={allRoomsState}
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
                            <i class="fas fa-plus-square"></i>&nbsp;Add new Room</button>
                        :
                        null
                    }
                </div>

                <div >
                    <ListRoom
                        allRooms={allRoomsState}
                        handleClickEditRoom={handleClickEditRoom}
                        handleClickDeleteRoom={handleClickDeleteRoom}
                    />
                </div>
            </div>
        </div>
    );
};