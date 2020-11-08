export default function AddCompany(props) {
    const { newCompany, handleChange, cancelCreateNewCompany, createNewCompany } = props

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
                    value={newCompany.name || ""}
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
                    value={newCompany.description || ""}
                />
            </div>

            <div >
                <label>Company Full Name</label>
                <input
                    type="text"
                    size="small"
                    id="companyFullName-input"
                    label="CompanyFullName"
                    onChange={handleChange()("companyFullName")}
                    value={newCompany.companyFullName || ""}
                />
            </div>

            <div >
                <label>Primary Phone #</label>
                <input
                    size="small"
                    type="tel"
                    id="tel-input"
                    label="tel"
                    onChange={handleChange("contactInfo")("tel")}
                    value={newCompany.contactInfo ? newCompany.contactInfo.tel : ""}
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
                    value={newCompany.contactInfo ? newCompany.contactInfo.tel2 : ""}
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
                    value={newCompany.contactInfo ? newCompany.contactInfo.email : ""}
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
                    value={newCompany.contactInfo ? newCompany.contactInfo.email2 : ""}
                />
            </div>

            <div >
                <label>Company's URL</label>
                <input
                    size="small"
                    type="url"
                    id="url-input"
                    label="Url"
                    onChange={handleChange("contactInfo")("url")}
                    value={newCompany.contactInfo ? newCompany.contactInfo.url : ""}
                />
            </div>


            <div >
                <label>Street #</label>
                <input
                    size="small"
                    type="number"
                    id="streetNumber-input"
                    label="Number"
                    onChange={handleChange("address")("streetNumber")}
                    value={newCompany.address ? newCompany.address.streetNumber : ""}
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
                    value={newCompany.address ? newCompany.address.street : ""}
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
                    value={newCompany.address ? newCompany.address.street2 : ""}
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
                    value={newCompany.address ? newCompany.address.city : ""}
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
                    value={newCompany.address ? newCompany.address.province : ""}
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
                    value={newCompany.address ? newCompany.address.country : ""}
                />
            </div>


        </div>
    )
}