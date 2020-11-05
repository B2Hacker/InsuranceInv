export default function AddCategory(props) {
    const { newCategory, handleChange, cancelCreateNewCategory, createNewCategory } = props

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
                    value={newCategory.name || ""}
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
                    value={newCategory.description || ""}
                />
            </div>

        </div>
    )
}

AddCategory.defaultProps = {
    newCategory: {
        name: "",
        description: "",
        pictures: "",
        subCategories: ""
    }
}