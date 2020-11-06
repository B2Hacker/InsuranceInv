import { viewAllSubCategories } from "../../src/lib/apiSubCategory";

export default function AddCategory(props) {
    const { allSubCategories, newCategory, handleChange, cancelCreateNewCategory, createNewCategory } = props

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
            
            <div >
                <label htmlFor="multi-subcategories">Sub Categories</label>
                <select className="custom-select" id="multi-subcategories"
                    onChange={handleChange()("subCategories")}
                    value={newCategory.subCategories || []}
                >
                    <option value="" disabled  >Select subCategory</option>
                    {allSubCategories.map(subCategory => (
                        <option key={subCategory._id} value={subCategory._id}
                        >{subCategory.name}
                        </option>
                    ))}
                </select>
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