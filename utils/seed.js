import faker from 'faker';
import SubCategory from '../src/models/SubCategory';
import Category from '../src/models/Category';
import Company from '../src/models/Company';
import Contact from '../src/models/Contact';
import Contract from '../src/models/Contract';
import Location from '../src/models/Location';
import Room from '../src/models/Room';
import Condition from '../src/models/Condition';
import Item from '../src/models/Item';
import _ from "lodash";
import { dbConnect } from './dbConnect';

dbConnect();

//********************************************************************************************************************************* */


// SEED SUBCATEGORY

export const seedSubCategory = async () => {
    try {
        const loop = 5;
        const subCategories = [];

        for (let i = 0; i < loop; i++) {
            subCategories.push(
                new SubCategory({
                    name: faker.name.findName(),
                    description: faker.lorem.paragraph(),
                })
            )
        }

        SubCategory.collection.drop();

        subCategories.forEach(subcategory => {
            SubCategory.create(subcategory)
        })
        console.log('SubCategory Collection has been Populated!')

    } catch (error) {
        console.log(error)
    }
};

// SEED CATEGORY

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
                    pictures: faker.image.image(),
                    subCategories: [_.sample(allSubCategories)],
                })
            )
        }

        Category.collection.drop();

        categories.forEach(category => {
            Category.create(category)
        })
        console.log('Category Collection has been Populated!')

    } catch (error) {
        console.log(error)
    }
};

// SEED COMPANY

export const seedCompany = async () => {
    try {
        const loop = 5;
        const companies = [];

        for (let i = 0; i < loop; i++) {
            companies.push(
                new Company({
                    name: faker.lorem.word(),
                    description: faker.lorem.sentence(),
                    pictures: faker.image.image(),
                    companyFullName: faker.company.companyName(),
                    contactInfo: {
                        tel: faker.phone.phoneNumber(),
                        tel2: faker.phone.phoneNumber(),
                        email: faker.internet.email(),
                        email2: faker.internet.email(),
                        url: faker.internet.url()
                    },
                    address: {
                        streetNumber: faker.address.zipCode(),
                        street: faker.address.streetAddress(),
                        street2: faker.address.secondaryAddress(),
                        city: faker.address.city(),
                        province: faker.address.state(),
                        country: faker.address.country(),
                    }
                })
            )
        }

        Company.collection.drop();

        companies.forEach(company => {
            Company.create(company)
        })
        console.log('Company Collection has been Populated!')

    } catch (error) {
        console.log(error)
    }
};

// SEED CONTACT

export const seedContact = async () => {
    try {
        const loop = 5;
        const contacts = [];
        const allCompanies = await Company.find();

        for (let i = 0; i < loop; i++) {

            contacts.push(
                new Contact({
                    name: faker.lorem.word(),
                    description: faker.lorem.sentence(),
                    pictures: faker.image.image(),
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    company: [_.sample(allCompanies)._id],
                    contactInfo: {
                        tel: faker.phone.phoneNumber(),
                        tel2: faker.phone.phoneNumber(),
                        email: faker.internet.email(),
                        email2: faker.internet.email(),
                        url: faker.internet.url()
                    },
                    address: {
                        streetNumber: faker.address.zipCode(),
                        street: faker.address.streetAddress(),
                        street2: faker.address.secondaryAddress(),
                        city: faker.address.city(),
                        province: faker.address.state(),
                        country: faker.address.country(),
                    }
                })
            )
        }

        Contact.collection.drop();

        contacts.forEach(contact => {
            Contact.create(contact)
        })
        console.log('Contact Collection has been Populated!')

    } catch (error) {
        console.log(error)
    }
};

// SEED CONTRACT

export const seedContract = async () => {
    try {
        const loop = 5;
        const contracts = [];
        const allCompanies = await Company.find();
        const allContacts= await Contact.find();

        for (let i = 0; i < loop; i++) {

            contracts.push(
                new Contract({
                    name: faker.name.findName(),
                    description: faker.lorem.paragraph(),
                    pictures: faker.image.image(),
                    files: faker.image.image(),
                    company: [_.sample(allCompanies)._id],
                    contact: [_.sample(allContacts)._id],
                    contractNumber: faker.finance.creditCardNumber(),
                    type: faker.lorem.word(),
                    Emergency: faker.phone.phoneNumber(),
                    dateStart: faker.date.past(),
                    dateEnd: faker.date.future(),
                    dateRenewal: faker.date.future(),
                    dateRenewalReminder: faker.date.future(),
                    cost: faker.commerce.price(),
                    paymentType: faker.finance.transactionType()
                })
            )
        }

        Contract.collection.drop();

        contracts.forEach(contract=> {
            Contract.create(contract)
        })
        console.log('Contract Collection has been Populated!')

    } catch (error) {
        console.log(error)
    }
};

// SEED LOCATION

export const seedLocation = async () => {
    try {
        const loop = 5;
        const locations = [];

        for (let i = 0; i < loop; i++) {
            locations.push(
                new Location({
                    name: faker.lorem.word(),
                    description: faker.lorem.sentence(),
                    pictures: faker.image.image(),
                    status: faker.lorem.word(),
                    address: {
                        streetNumber: faker.address.zipCode(),
                        street: faker.address.streetAddress(),
                        street2: faker.address.secondaryAddress(),
                        city: faker.address.city(),
                        province: faker.address.state(),
                        country: faker.address.country(),
                    }
                })
            )
        }

        Location.collection.drop();

        locations.forEach(location=> {
            Location.create(location)
        })
        console.log('Location Collection has been Populated!')

    } catch (error) {
        console.log(error)
    }
};

// SEED ROOM

export const seedRoom = async () => {
    try {
        const loop = 5;
        const rooms = [];
        const allLocations = await Location.find();

        for (let i = 0; i < loop; i++) {

            rooms.push(
                new Room({
                    name: faker.name.findName(),
                    description: faker.lorem.paragraph(),
                    pictures: faker.image.image(),
                    location: [_.sample(allLocations)]
                })
            )
        }

        Room.collection.drop();

        rooms.forEach(room => {
            Room.create(room)
        })
        console.log('Room Collection has been Populated!')

    } catch (error) {
        console.log(error)
    }
};

// SEED CONDITION

export const seedCondition = async () => {
    try {
        const loop = 5;
        const conditions = [];

        for (let i = 0; i < loop; i++) {
            conditions.push(
                new Condition({
                    name: faker.name.findName(),
                    description: faker.lorem.paragraph(),
                })
            )
        }

        Condition.collection.drop();

        conditions.forEach(condition => {
            Condition.create(condition)
        })
        console.log('Condition Collection has been Populated!')

    } catch (error) {
        console.log(error)
    }
};

// SEED ITEM

export const seedItem = async () => {
    try {
        const loop = 5;
        const items = [];
        const allLocations= await Location.find();
        const allRooms= await Room.find();
        const allCategory= await Category.find();
        const allCondition= await Condition.find();
        const allCompany = await Company.find();
        const allContract= await Contract.find();

        for (let i = 0; i < loop; i++) {

            items.push(
                new Item({
                    name: faker.name.findName(),
                    description: faker.lorem.paragraph(),
                    pictures: faker.internet.avatar(),
					location: [_.sample(allLocations)._id],       
					room: [_.sample(allRooms)._id],
					category: [_.sample(allCategory)._id],
                    condition: [_.sample(allCondition)._id],
                    estimatedValue: faker.commerce.price(),
					model: faker.name.title(),
					brand: faker.name.title(),
					serialNumber: faker.name.title(),
					notes: faker.name.title(),
					purchaseInfo: {
                        purchaseDate: faker.date.past(),
                        company: [_.sample(allCompany)._id],
                        cost: faker.commerce.price(),
                        waranty: faker.random.boolean(),
                        contract: [_.sample(allContract)._id],
                    purchaseNotes: faker.lorem.sentence()
                    }
                })
            )
        }

        Item.collection.drop();

        items.forEach(item=> {
            Item.create(item)
        })
        console.log('Item Collection has been Populated!')

    } catch (error) {
        console.log(error)
    }
};

// Databse Seeds
seedSubCategory();
seedCategory();
seedCompany();
seedContact();
seedLocation();
seedRoom();
seedContract();
seedCondition();
seedItem();
