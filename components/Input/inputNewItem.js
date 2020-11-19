export default function AddItem(props) {
    const { allLocations, allRooms, allCategories, allConditions, allCompanies, allContracts, newItem, handleChange, cancelCreateNewItem, createNewItem } = props

    return (
        <form>
            <div>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        required
                        size="small"
                        type="text"
                        className="form-control"
                        placeholder="Enter the name of the item"
                        id="name-input"
                        label="Name"
                        onChange={handleChange()("name")}
                        value={newItem.name || ""}
                    />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        className="form-control"
                        placeholder="Write small description of the item"
                        size="small"
                        id="description-input"
                        label="Description"
                        onChange={handleChange()("description")}
                        value={newItem.description || ""}
                    />
                </div>

                <div class="form-group">
                    <label htmlFor="multi-location">Location</label>
                    <select
                        className="form-control"
                        id="multi-location"
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

                <div class="form-group">
                    <label htmlFor="multi-room">Room</label>
                    <select className="form-control" id="multi-room"
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

                <div class="form-group">
                    <label htmlFor="multi-category">Category</label>
                    <select className="form-control" id="multi-category"
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

                <div class="form-group">
                    <label htmlFor="multi-condition">Condition</label>
                    <select className="form-control" id="multi-condition"
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

                <div class="form-group">
                    <label>Estimated Cost</label>
                    <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Monetary amount"
                        size="small"
                        id="estimatedValue-input"
                        label="EstimatedValue"
                        onChange={handleChange()("estimatedValue")}
                        value={newItem.estimatedValue || ""}
                    />
                    </div>
                </div>

                <div class="form-group">
                    <label>Model</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Model of the item"
                        size="small"
                        id="model-input"
                        label="Model"
                        onChange={handleChange()("model")}
                        value={newItem.model || ""}
                    />
                </div>

                <div class="form-group">
                    <label>Brand</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Brand of the item"
                        size="small"
                        id="brand-input"
                        label="Brand"
                        onChange={handleChange()("brand")}
                        value={newItem.brand || ""}
                    />
                </div>

                <div class="form-group">
                    <label>Serial No.</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Serial No. of the item"
                        size="small"
                        id="serialNumber-input"
                        label="SerialNumber"
                        onChange={handleChange()("serialNumber")}
                        value={newItem.serialNumber || ""}
                    />
                </div>

                <div class="form-group">
                    <label>Notes</label>
                    <textarea
                        className="form-control"
                        placeholder="Write notes about the item"
                        size="small"
                        id="notes-input"
                        label="Notes"
                        onChange={handleChange()("notes")}
                        value={newItem.notes || ""}
                    />
                </div>

                <div class="form-group">
                    <label>Purchase Date</label>
                    <input
                        type="date"
                        className="form-control"
                        size="small"
                        id="purchaseDate-input"
                        label="PurchaseDate"
                        onChange={handleChange("purchaseInfo")("purchaseDate")}
                        value={newItem.purchaseInfo ? newItem.purchaseInfo.purchaseDate : ""}
                    />
                </div>

                <div class="form-group">
                    <label htmlFor="multi-company">Company</label>
                    <select className="form-control" id="multi-company"
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

                <div class="form-group">
                    <label>Cost</label>
                    <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Original cost of the item"
                        size="small"
                        id="cost-input"
                        label="Cost"
                        onChange={handleChange("purchaseInfo")("cost")}
                        value={newItem.purchaseInfo ? newItem.purchaseInfo.cost : ""}
                    />
                    </div>
                </div>

                <div class="form-group">
                    <label htmlFor="multi-contract">Contract</label>
                    <select className="form-control" id="multi-contract"
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

                <div class="form-group">
                    <label>Purchase Notes</label>
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notes about the purchase"
                        size="small"
                        id="purchaseNotes-input"
                        label="PurchaseNotes"
                        onChange={handleChange("purchaseInfo")("purchaseNotes")}
                        value={newItem.purchaseInfo ? newItem.purchaseInfo.purchaseNotes : ""}
                    />
                </div>
            </div>
        </form>
    )
}