export default function AddContract(props) {
    const { allContacts, allCompanies, newContract, handleChange, cancelCreateNewContract, createNewContract } = props

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
                <label htmlFor="multi-company">Company</label>
                <select className="custom-select" id="multi-company"
                    onChange={handleChange()("company")}
                    value={newContract.company ? newContract.company._id : []}
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
                <label htmlFor="multi-contact">Contact</label>
                <select className="custom-select" id="multi-contact"
                    onChange={handleChange()("contact")}
                    value={newContract.contact ? newContract.contact._id : []}
                >
                    <option value="" disabled  >Select Contact</option>
                    {allContacts.map(contact => (
                        <option key={contact._id} value={contact._id}
                        >{contact.name}
                        </option>
                    ))}
                </select>
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
