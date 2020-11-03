

export default function AddLocation(props) {
    const { newLocation, handleChange, cancelCreateNewLocation, createNewLocation } = props

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
                    value={newLocation.name || ""}
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
                    value={newLocation.description || ""}
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
                    value={newLocation.address ? newLocation.address.streetNumber : ""}
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
                    value={newLocation.address ? newLocation.address.street : ""}
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
                    value={newLocation.address ? newLocation.address.street2 : ""}
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
                    value={newLocation.address ? newLocation.address.city : ""}
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
                    value={newLocation.address ? newLocation.address.province : ""}
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
                    value={newLocation.address ? newLocation.address.country : ""}
                />
            </div>

            
        </div>
    )
}

AddLocation.defaultProps = {
    newLocation: {
        name: "",
        description: "",
        isActive: true,
        user: "",
        pictures: "",
        files: "",
        status: "",
        address: {
            streetNumber: "",
            street: "",
            street2: "",
            city: "",
            province: "",
            country: ""
        }
    }
}