import { viewAllLocations, viewLocation, createLocation, updateLocation, deleteLocation } from "../../src/lib/apiLocation";
import ListLocation from "../../components/List/ListLocation";
import AddIcon from "@material-ui/icons/Add";
import styles from '../../styles/Home.module.css';
import ModalLocation from '../../components/Modal/ModalLocation';

export default function locationsPage() {

    const [showElements, setShowElements] = React.useState(true);
    const [showModal, setShowModal] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);
    const [allLocationsState, setAllLocationsState] = React.useState([]);
    const [newLocation, setNewLocation] = React.useState({});


    React.useEffect(() => getLocations(), []);

    const getLocations = () => {
        viewAllLocations().then(allLocations => {
            setAllLocationsState(allLocations);
        })
    };

    const handleCloseModal = () => {
        console.log("handleCloseModal")
        setShowModal(false);
        setNewLocation({});
    };

    const handleClickAddLocation = () => {
        console.log("handleClickAddLocation")
        setShowModal(true);
        setEditMode(false);
        setNewLocation({});
    }

    const handleClickUpdateLocation = () => {
        updateLocation(newLocation).then(() => {
            handleCloseModal()
            getLocations();
        })
    }

    const handleChange = path => name => event => {
        if (path) {
            setNewLocation({
                ...newLocation,
                [path]: {
                    ...newLocation[path],
                    [name]: event.target.value
                }
            });
        } else {
            setNewLocation({
                ...newLocation,
                [name]: event.target.value
            });
        }
        console.log(newLocation);
    };

    const handleClickOnCreateNewLocation = () => {

        createLocation(newLocation).then(location => {
            getLocations();
            setNewLocation({})
            setShowElements(true);
        })

    };

    const handleClickOnCancelNewLocation = () => {
        setNewLocation({})
        setShowElements(true);
    };

    const handleClickEditLocation = locationID => {
        viewLocation(locationID).then(location => {
            console.log("FOUND IT", location);
            setShowModal(true);
            setEditMode(true);
            setNewLocation(location);
        })
    };

    const handleClickDeleteLocation = locationID => {
        const borrandoLocation = allLocationsState.filter((location) => location.locationID !== locationID);
        console.log("DELETING", locationID);
        setAllLocationsState(borrandoLocation)

        deleteLocation(locationID);
        setNewLocation(true);
        setShowElements(true);
    };

    return (
        <div >
            <ModalLocation
                open={showModal}
                handleClose={handleCloseModal}
                allLocations={allLocationsState}
                handleChange={handleChange}
                handleClickUpdateLocation={handleClickUpdateLocation}
                handleClickOnCreateNewLocation={handleClickOnCreateNewLocation}
                newLocation={newLocation}
                editMode={editMode}
            />
            <div >
                <div className={styles.main}>
                    <h3>Locations</h3>
                </div>

                <div className={styles.main}>
                    {showElements ?
                        <button
                            variant="success" size="sm"
                            onClick={() => handleClickAddLocation()}
                        >
                            <AddIcon fontSize="small" />Add new location</button>
                        :
                        null
                    }
                </div>

                <div >
                    <ListLocation
                        allLocations={allLocationsState}
                        handleClickEditLocation={handleClickEditLocation}
                        Borrar={handleClickDeleteLocation}
                    />
                </div>
            </div>
        </div>
    );
};