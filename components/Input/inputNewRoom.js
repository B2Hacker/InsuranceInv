export default function AddRoom(props) {
    const { newRoom, handleChange, cancelCreateNewRoom, createNewRoom } = props

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

        </div>
    )
}

AddRoom.defaultProps = {
    newRoom: {
        name: "",
        description: "",
        pictures: "",
        location: [{}]
    }
}