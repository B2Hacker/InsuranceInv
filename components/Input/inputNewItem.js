export default function AddItem(props) {
    const { newItem, handleChange, cancelCreateNewItem, createNewItem } = props

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
                    size="small"
                    id="purchaseDate-input"
                    label="PurchaseDate"
                    onChange={handleChange("purchaseInfo")("purchaseDate")}
                    value={newItem.purchaseInfo ? newItem.purchaseInfo.purchaseDate : ""}
                />
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

            {/* <div >
                <label>Warranty</label>
                <input
                    type="checkbox"
                    size="small"
                    id="waranty-input"
                    label="Waranty"
                    onChange={handleChange("purchaseInfo")("waranty")}
                    value={newItem.purchaseInfo ? newItem.purchaseInfo.waranty : ""}
                />
            </div> */}

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

AddItem.defaultProps = {
    newItem: {
        name: "",
        description: "",
        pictures: "",
        location: "",
        room: "",
        category: "",
        condition: "",
        estimatedValue: "",
        model: "",
        brand: "",
        serialNumber: "",
        notes: "",
        purchaseInfo: {
            purchaseDate: "",
            company: "",
            cost: "",
            waranty: "",
            contract: "",
        purchaseNotes: ""
        }
    }
}