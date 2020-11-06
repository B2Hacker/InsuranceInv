import { viewAllContacts, viewContact, createContact, updateContact, deleteContact } from "../../src/lib/apiContact";
import ListContact from "../../components/List/ListContact";
import styles from '../../styles/Home.module.css';
import ModalContact from '../../components/Modal/ModalContact';

export default function contactsPage() {

    const [showElements, setShowElements] = React.useState(true);
    const [showModal, setShowModal] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);
    const [allContactsState, setAllContactsState] = React.useState([]);
    const [newContact, setNewContact] = React.useState({});


    React.useEffect(() => getContacts(), []);

    const getContacts = () => {
        viewAllContacts().then(allContacts => {
            setAllContactsState(allContacts);
        })
    };

    const handleCloseModal = () => {
        console.log("handleCloseModal")
        setShowModal(false);
        setNewContact({});
    };

    const handleClickAddContact = () => {
        console.log("handleClickAddContact")
        setShowModal(true);
        setEditMode(false);
        setNewContact({});
    }

    const handleClickUpdateContact = () => {
        updateContact(newContact).then(() => {
            handleCloseModal()
            getContacts();
        })
    }

    const handleChange = path => name => event => {
        if (path) {
            setNewContact({
                ...newContact,
                [path]: {
                    ...newContact[path],
                    [name]: event.target.value
                }
            });
        } else {
            setNewContact({
                ...newContact,
                [name]: event.target.value
            });
        }
        console.log(newContact);
    };

    const handleClickOnCreateNewContact = () => {

        createContact(newContact).then(contact => {
            getContacts();
            setNewContact({})
            setShowElements(true);
            handleCloseModal();
        })

    };

    const handleClickOnCancelNewContact = () => {
        setNewContact({})
        setShowElements(true);
    };

    const handleClickEditContact = contactID => {
        viewContact(contactID).then(contact => {
            console.log("FOUND IT", contact);
            setShowModal(true);
            setEditMode(true);
            setNewContact(contact);
        })
    };

    const handleClickDeleteContact = contactID => {
        const borrandoContact = allContactsState.filter((contact) => contact.contactID !== contactID);
        console.log("DELETING", contactID);
        setAllContactsState(borrandoContact)

        deleteContact(contactID);
        setNewContact(true);
        setShowElements(true);
    };

    return (
        <div >
            <ModalContact
                open={showModal}
                handleClose={handleCloseModal}
                allContacts={allContactsState}
                handleChange={handleChange}
                handleClickUpdateContact={handleClickUpdateContact}
                handleClickOnCreateNewContact={handleClickOnCreateNewContact}
                newContact={newContact}
                editMode={editMode}
            />
            <div >
                <div className={styles.main}>
                    <h3>Contacts</h3>
                </div>

                <div className={styles.main}>
                    {showElements ?
                        <button
                            className="btn btn-success"
                            onClick={() => handleClickAddContact()}
                        >
                            <i class="fas fa-plus-square"></i>&nbsp;Add new Contact</button>
                        :
                        null
                    }
                </div>

                <div >
                    <ListContact
                        allContacts={allContactsState}
                        handleClickEditContact={handleClickEditContact}
                        Borrar={handleClickDeleteContact}
                    />
                </div>
            </div>
        </div>
    );
};
