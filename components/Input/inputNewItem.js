export default function AddItem(props) {
    const { allLocations, allRooms, allCategories, allConditions, allCompanies, allContracts, newItem, handleChange, cancelCreateNewItem, createNewItem } = props

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
                    value={newItem.name || ""}
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
                    value={newItem.description || ""}
                />
            </div>

            <div >
                <label htmlFor="multi-location">Location</label>
                <select className="custom-select" id="multi-location"
                    onChange={handleChange()("location")}
                    value={newItem.location ? newItem.location._id : []}
                >
                    <option value="" disabled  >Select Location</option>
                    {allLocations.map(location => (
                        <option key={location._id} value={location._id}
                        >{location.name}
                        </option>
                    ))}
                </select>
            </div>

            <div >
                <label htmlFor="multi-room">Room</label>
                <select className="custom-select" id="multi-room"
                    onChange={handleChange()("room")}
                    value={newItem.room ? newItem.room._id : []}
                >
                    <option value="" disabled  >Select Room</option>
                    {allRooms.map(room => (
                        <option key={room._id} value={room._id}
                        >{room.name}
                        </option>
                    ))}
                </select>
            </div>

            <div >
                <label htmlFor="multi-category">Category</label>
                <select className="custom-select" id="multi-category"
                    onChange={handleChange()("category")}
                    value={newItem.category ? newItem.category._id : []}
                >
                    <option value="" disabled  >Select Category</option>
                    {allCategories.map(category => (
                        <option key={category._id} value={category._id}
                        >{category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div >
                <label htmlFor="multi-condition">Condition</label>
                <select className="custom-select" id="multi-condition"
                    onChange={handleChange()("condition")}
                    value={newItem.condition ? newItem.condition._id : []}
                >
                    <option value="" disabled  >Select Condition</option>
                    {allConditions.map(condition => (
                        <option key={condition._id} value={condition._id}
                        >{condition.name}
                        </option>
                    ))}
                </select>
            </div>

            <div >
                <label>Estimated Value</label>
                <input
                    type="number"
                    size="small"
                    id="estimatedValue-input"
                    label="EstimatedValue"
                    onChange={handleChange()("estimatedValue")}
                    value={newItem.estimatedValue || ""}
                />
            </div>

            <div >
                <label>Model</label>
                <input
                    type="text"
                    size="small"
                    id="model-input"
                    label="Model"
                    onChange={handleChange()("model")}
                    value={newItem.model || ""}
                />
            </div>

            <div >
                <label>Brand</label>
                <input
                    type="text"
                    size="small"
                    id="brand-input"
                    label="Brand"
                    onChange={handleChange()("brand")}
                    value={newItem.brand || ""}
                />
            </div>

            <div >
                <label>Serial No.</label>
                <input
                    type="text"
                    size="small"
                    id="serialNumber-input"
                    label="SerialNumber"
                    onChange={handleChange()("serialNumber")}
                    value={newItem.serialNumber || ""}
                />
            </div>

            <div >
                <label>Notes</label>
                <input
                    type="text"
                    size="small"
                    id="notes-input"
                    label="Notes"
                    onChange={handleChange()("notes")}
                    value={newItem.notes || ""}
                />
            </div>

            <div >
                <label>Purchase Date</label>
                <input
                    type="date"
                    required pattern="\d{4}-\d{2}-\d{2}"
                    size="small"
                    id="purchaseDate-input"
                    label="PurchaseDate"
                    onChange={handleChange("purchaseInfo")("purchaseDate")}
                    value={newItem.purchaseInfo ? newItem.purchaseInfo.purchaseDate : ""}
                />
            </div>

            <div >
                <label htmlFor="multi-company">Company</label>
                <select className="custom-select" id="multi-company"
                    onChange={handleChange("purchaseInfo")("company")}
                    value={newItem.purchaseInfo && newItem.purchaseInfo.company ? newItem.purchaseInfo.company._id : []}
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
                <label>Cost</label>
                <input
                    type="text"
                    size="small"
                    id="cost-input"
                    label="Cost"
                    onChange={handleChange("purchaseInfo")("cost")}
                    value={newItem.purchaseInfo ? newItem.purchaseInfo.cost : ""}
                />
            </div>

            <div >
                <label htmlFor="multi-contract">Contract</label>
                <select className="custom-select" id="multi-contract"
                    onChange={handleChange("purchaseInfo")("contract")}
                    value={newItem.purchaseInfo && newItem.purchaseInfo.contract ? newItem.purchaseInfo.contract._id : []}
                >
                    <option value="" disabled  >Select Contract</option>
                    {allContracts.map(contract => (
                        <option key={contract._id} value={contract._id}
                        >{contract.name}
                        </option>
                    ))}
                </select>
            </div>

            <div >
                <label>Purchase Notes</label>
                <input
                    type="text"
                    size="small"
                    id="purchaseNotes-input"
                    label="PurchaseNotes"
                    onChange={handleChange("purchaseInfo")("purchaseNotes")}
                    value={newItem.purchaseInfo ? newItem.purchaseInfo.purchaseNotes : ""}
                />
            </div>
        </div>
    )
}