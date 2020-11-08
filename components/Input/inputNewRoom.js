export default function AddRoom(props) {
    const { newRoom, allRooms, allLocations, handleChange, cancelCreateNewRoom, createNewRoom } = props

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
                    value={newRoom.name || ""}
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
                    value={newRoom.description || ""}
                />
            </div>

            <div >
                <label htmlFor="multi-location">Location</label>
                <select className="custom-select" id="multi-location"
                    onChange={handleChange()("location")}
                    value={newRoom.location && newRoom.location[0]  ? newRoom.location[0]._id : []}
                >
                    <option value="" disabled  >Select location</option>
                    {allLocations.map(location => (
                        <option key={location._id} value={location._id}
                        >{location.name}
                        </option>
                    ))}
                </select>
            </div>

        </div>
    )
}