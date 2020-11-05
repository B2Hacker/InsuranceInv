export default function AddSubCategory(props) {
    const { newSubCategory, handleChange, cancelCreateNewSubCategory, createNewSubCategory } = props

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
                    value={newSubCategory.name || ""}
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
                    value={newSubCategory.description || ""}
                />
            </div>
        </div>
    )
}

AddSubCategory.defaultProps = {
    newSubCategory: {
        name: "",
        description: "",
    }
}