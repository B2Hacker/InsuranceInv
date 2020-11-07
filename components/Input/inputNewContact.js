export default function AddContact(props) {
    const { allCompanies, newContact, handleChange, cancelCreateNewContact, createNewContact } = props

    return (
        <div>
            <div >
                <label>Name</label>
                <input
                    required
                    size="small"
                    type="text"
                    id="name-input"
                    label="Name"
                    onChange={handleChange()("name")}
                    value={newContact.name || ""}
                />
            </div>

            <div >
                <label>Description</label>
                <input
                    type="text"
                    size="small"
                    id="description-input"
                    label="Description"
                    onChange={handleChange()("description")}
                    value={newContact.description || ""}
                />
            </div>

            <div >
                <label>First Name</label>
                <input
                    type="text"
                    size="small"
                    id="firstName-input"
                    label="FirstName"
                    onChange={handleChange()("firstName")}
                    value={newContact.firstName || ""}
                />
            </div>

            <div >
                <label>Last Name</label>
                <input
                    type="text"
                    size="small"
                    id="lastName-input"
                    label="LastName"
                    onChange={handleChange()("lastName")}
                    value={newContact.lastName || ""}
                />
            </div>

            <div >
                <label htmlFor="multi-company">Company</label>
                <select className="custom-select" id="multi-company"
                    onChange={handleChange()("company")}
                    value={newContact.company ? newContact.company._id : []}
                >
                    <option value="" disabled  >Select Company</option>
                    {allCompanies.map(company => (
                        <option key={company._id} value={company._id}
                        >{company.name}
                        </option>
                    ))}
                </select>
            </div>

            <div >
                <label>Primary Phone #</label>
                <input
                    size="small"
                    type="tel"
                    id="tel-input"
                    label="tel"
                    onChange={handleChange("contactInfo")("tel")}
                    value={newContact.contactInfo ? newContact.contactInfo.tel : ""}
                />
            </div>

            <div >
                <label>Secondary Phone #</label>
                <input
                    size="small"
                    type="tel"
                    id="tel2-input"
                    label="tel2"
                    onChange={handleChange("contactInfo")("tel2")}
                    value={newContact.contactInfo ? newContact.contactInfo.tel2 : ""}
                />
            </div>

            <div >
                <label>Primary Email</label>
                <input
                    type="email"
                    size="small"
                    id="email-input"
                    label="Email"
                    onChange={handleChange("contactInfo")("email")}
                    value={newContact.contactInfo ? newContact.contactInfo.email : ""}
                />
            </div>

            <div >
                <label>Secondary Email</label>
                <input
                    type="email"
                    size="small"
                    id="email2-input"
                    label="Email2"
                    onChange={handleChange("contactInfo")("email2")}
                    value={newContact.contactInfo ? newContact.contactInfo.email2 : ""}
                />
            </div>

            <div >
                <label>Contact's URL</label>
                <input
                    size="small"
                    type="url"
                    id="url-input"
                    label="Url"
                    onChange={handleChange("contactInfo")("url")}
                    value={newContact.contactInfo ? newContact.contactInfo.url : ""}
                />
            </div>


            <div >
                <label>Street number</label>
                <input
                    size="small"
                    type="number"
                    id="streetNumber-input"
                    label="Number"
                    onChange={handleChange("address")("streetNumber")}
                    value={newContact.address ? newContact.address.streetNumber : ""}
                />
            </div>

            <div >
                <label>Street</label>
                <input
                    type="text"
                    size="small"
                    id="street-input"
                    label="Street"
                    onChange={handleChange("address")("street")}
                    value={newContact.address ? newContact.address.street : ""}
                />
            </div>

            <div >
                <label>Street 2</label>
                <input
                    type="text"
                    size="small"
                    id="street2-input"
                    label="Street 2"
                    onChange={handleChange("address")("street2")}
                    value={newContact.address ? newContact.address.street2 : ""}
                />
            </div>

            <div >
                <label>City</label>
                <input
                    type="text"
                    size="small"
                    id="city-input"
                    label="City"
                    onChange={handleChange("address")("city")}
                    value={newContact.address ? newContact.address.city : ""}
                />
            </div>

            <div >
                <label>Province</label>
                <input
                    type="text"
                    size="small"
                    id="province-input"
                    label="Province"
                    onChange={handleChange("address")("province")}
                    value={newContact.address ? newContact.address.province : ""}
                />
            </div>

            <div >
                <label>Country</label>
                <input
                    size="small"
                    type="text"
                    id="country-input"
                    label="Country"
                    onChange={handleChange("address")("country")}
                    value={newContact.address ? newContact.address.country : ""}
                />
            </div>


        </div>
    )
}

AddContact.defaultProps = {
    newContact: {
        name: "",
        description: "",
        pictures: "",
        firstName: "",
        lastName: "",
        contactInfo: {
            tel: "",
            tel2: "",
            email: "",
            email2: "",
            url: ""
        },
        address: {
            streetNumber: "",
            street: "",
            street2: "",
            city: "",
            province: "",
            country: "",
        }
    }
}