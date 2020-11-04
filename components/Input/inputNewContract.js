export default function AddContract(props) {
    const { newContract, handleChange, cancelCreateNewContract, createNewContract } = props

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
                    value={newContract.name || ""}
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
                    value={newContract.description || ""}
                />
            </div>

            <div >
                <label>Contract #</label>
                <input
                    type="text"
                    size="small"
                    id="contractNumber-input"
                    label="ContractNumber"
                    onChange={handleChange()("contractNumber")}
                    value={newContract.contractNumber || ""}
                />
            </div>

            <div >
                <label>Type</label>
                <input
                    type="text"
                    size="small"
                    id="type-input"
                    label="Type"
                    onChange={handleChange()("type")}
                    value={newContract.type || ""}
                />
            </div>

            <div >
                <label>Emergency Phone</label>
                <input
                    type="tel"
                    size="small"
                    id="Emergency-input"
                    label="emergency"
                    onChange={handleChange()("Emergency")}
                    value={newContract.Emergency || ""}
                />
            </div>

            <div >
                <label>Start Date</label>
                <input
                    type="date"
                    size="small"
                    id="dateStart-input"
                    label="DateStart"
                    onChange={handleChange()("dateStart")}
                    value={newContract.dateStart || ""}
                />
            </div>

            <div >
                <label>End Date</label>
                <input
                    type="date"
                    size="small"
                    id="dateEnd-input"
                    label="DateEnd"
                    onChange={handleChange()("dateEnd")}
                    value={newContract.dateEnd || ""}
                />
            </div>

            <div >
                <label>Renewal Date</label>
                <input
                    type="date"
                    size="small"
                    id="dateRenewal-input"
                    label="DateRenewal"
                    onChange={handleChange()("dateRenewal")}
                    value={newContract.dateRenewal || ""}
                />
            </div>

            <div >
                <label>Cost</label>
                <input
                    type="number"
                    size="small"
                    id="cost-input"
                    label="Cost"
                    onChange={handleChange()("cost")}
                    value={newContract.cost || ""}
                />
            </div>

            <div >
                <label>Type of Payment</label>
                <input
                    type="text"
                    size="small"
                    id="paymentType-input"
                    label="PaymentType"
                    onChange={handleChange()("paymentType")}
                    value={newContract.paymentType || ""}
                />
            </div>

        </div>
    )
}

AddContract.defaultProps = {
    newContract: {
        name: "",
        description: "",
        pictures: "",
        files: "",
        company: "",
        contact: "",
        contractNumber: "",
        type: "",
        Emergency: "",
        dateStart: "",
        dateEnd: "",
        dateRenewal: "",
        dateRenewalReminder: "",
        cost: "",
        paymentType: ""
    }
}