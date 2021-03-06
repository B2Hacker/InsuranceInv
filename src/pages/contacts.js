import { viewAllContacts, viewContact, createContact, updateContact, deleteContact } from "../../src/lib/apiContact";
import { viewAllCompanies, viewCompany } from "../../src/lib/apiCompany";
import ListContact from "../../components/List/ListContact";
import styles from '../../styles/Home.module.css';
import ModalContact from '../../components/Modal/ModalContact';
import ModalDelete from "../../components/Modal/ModalDelete";

export default function contactsPage() {

    const [showElements, setShowElements] = React.useState(true);
    const [showModal, setShowModal] = React.useState(false);
    const [showDeleteModal, setShowDeleteModal] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);
    const [allContacts, setAllContacts] = React.useState([]);
    const [allCompanies, setAllCompanies] = React.useState([]);
    const [newContact, setNewContact] = React.useState({});


    React.useEffect(() => {
        getContacts();
        getCompanies();
    }, []);

    const getContacts = () => {
        viewAllContacts().then(allContacts => {
            setAllContacts(allContacts);
        })
    };

    const getCompanies = () => {
        viewAllCompanies().then(allContacts => {
            setAllCompanies(allContacts);
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

    const handleClickEditContact = contactID => {
        viewContact(contactID).then(contact => {
            console.log("FOUND IT", contact);
            setShowModal(true);
            setEditMode(true);
            setNewContact(contact);
        })
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const handleClickDeleteContact = contact => {
        setNewContact(contact);
        setShowDeleteModal(true);
    };


    const DeleteContactOnClick = () => {
        console.log("DELETING", newContact);
        deleteContact(newContact._id).then(() => {
            getContacts();
            setNewContact({});
            setShowDeleteModal(false);
        })
    }

    return (
        <div >
            <ModalContact
                open={showModal}
                handleClose={handleCloseModal}
                allContacts={allContacts}
                allCompanies={allCompanies}
                handleChange={handleChange}
                handleClickUpdateContact={handleClickUpdateContact}
                handleClickOnCreateNewContact={handleClickOnCreateNewContact}
                newContact={newContact}
                editMode={editMode}
            />

            <ModalDelete
                open={showDeleteModal}
                handleClose={handleCloseDeleteModal}
                handleDelete={DeleteContactOnClick}
                item={newContact}
            />

            <div >
                <div className={styles.tabletop}>
                    <h3>Contacts</h3>
                </div>

                <div className={styles.tabletop}>
                    {showElements ?
                        <button
                            className="btn btn-success"
                            onClick={() => handleClickAddContact()}
                        >
                            <i className="fas fa-plus-square"></i>&nbsp;Add new Contact</button>
                        :
                        null
                    }
                </div>

                <div >
                    <ListContact
                        allContacts={allContacts}
                        handleClickEditContact={handleClickEditContact}
                        handleClickDeleteContact={handleClickDeleteContact}
                    />
                </div>
            </div>
        </div>
    );
};
