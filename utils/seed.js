import faker from 'faker';
import SubCategory from '../src/models/SubCategory';
import Category from '../src/models/Category';
// import Company from '../src/models/Company';
// import Condition from '../src/models/Condition';
// import Contact from '../src/models/Contact';
// import Contract from '../src/models/Contract';
// import Location from '../src/models/Location';
// import Room from '../src/models/Room';
// import Item from '../src/models/Item';
import _ from "lodash";
import dbConnect from './dbConnect';

dbConnect();

//********************************************************************************************************************************* */

export const seedSubCategory = async () => {
    try {
        const loop = 5;
        const subCategories = [];

        for (let index = 0; index < loop; index++) {
            subCategories.push(
                new SubCategory({
                    name: faker.name.findName(),
                    description: faker.lorem.paragraph(),
                    isActive: faker.random.boolean(),
                })
            )
        }

        SubCategory.remove();

        subCategories.forEach(subcategory => {
            SubCategory.create(subcategory)
        })
        console.log('Condition Collection has been Populated!')

    } catch (error) {
        console.log(error)
    }
};

export const seedCategory = async () => {
    try {
        const loop = 5;
        const categories = [];
        const allSubCategories = await SubCategory.find();

        for (let i = 0; i < loop; i++) {

            categories.push(
                new Category({
                    name: faker.name.findName(),
                    description: faker.lorem.paragraph(),
                    subCategories: [_.sample(allSubCategories)],
                    isActive: faker.random.boolean(),
                })
            )
        }

        Category.remove();

        categories.forEach(category => {
            Category.create(category)
        })
        console.log('Category Collection has been Populated!')

    } catch (error) {
        console.log(error)
    }
};



// Databse Seeds
seedSubCategory();
seedCategory();
// seedCompany();
// seedCondition();
// seedContact();
// seedContract();
// seedLocation();
// seedRoom();
// seedItem();