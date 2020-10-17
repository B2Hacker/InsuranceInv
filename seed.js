import faker from 'faker';
//import dbConnect from './utils/dbConnect';
import Condition from './src/models/Condition';
import Category from './src/models/Category';
import Company from './src/models/Company';
import Contact from './src/models/Contact';

//dbConnect();

export const seedCategory = async () => {
    try {
        //checks if there's stuff already on the database
        const CategoryCollection = await Category.find();
        if (CategoryCollection.length > 1) {
            return;
        }

        //How many notes I want
        const quantity = 5;
        //Empty array of data to store new data
        let categories = [];

        for (let i = 0; i < quantity; i++) {
            categories.push(
                new Category({
                    name: faker.lorem.word(),
                    description: faker.lorem.sentence(),
                    pictures: faker.image.image(),

                })
            )
        }
        //removes notes from databse, before we add more
        await Category.remove()
        
        //creates new database entries for each note in the array
		categories.forEach(category => {
			Category.create(category)
		})
		console.log('Category Collection has been Populated!')
    } catch (error) {
        console.log(error);
    }
}

export const seedCompany = async () => {
    try {
        const CompanyCollection = await Company.find();
        if (CompanyCollection.length > 1) {
            return;
        }

        const quantity = 5;
        let companies = [];

        for (let i = 0; i < quantity; i++) {
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
        await Company.remove()
        
		companies.forEach(company => {
			Company.create(company)
		})
		console.log('Company Collection has been Populated!')
    } catch (error) {
        console.log(error);
    }
}

export const seedCondition = async () => {
    try {
        const ConditionCollection = await Condition.find();
        if (ConditionCollection.length > 1) {
            return;
        }

        const quantity = 3;
        let conditions = [];

        for (let i = 0; i < quantity; i++) {
            conditions.push(
                new Condition({
                    name: faker.lorem.word(),
                    description: faker.lorem.sentence()
                })
            )
        }
        await Condition.remove()
        
		conditions.forEach(condition => {
			Condition.create(condition)
		})
		console.log('Condition Collection has been Populated!')
    } catch (error) {
        console.log(error);
    }
}

export const seedContact = async () => {
    try {
        const ContactCollection = await Contact.find();
        if (ContactCollection.length > 1) {
            return;
        }

        const quantity = 5;
        let contacts = [];

        for (let i = 0; i < quantity; i++) {
            contacts.push(
                new Contact({
                    name: faker.lorem.word(),
                    description: faker.lorem.sentence(),
                    pictures: faker.image.image(),
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
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
        await Contact.remove()
        
		contacts.forEach(contact => {
			Contact.create(contact)
		})
		console.log('Contact Collection has been Populated!')
    } catch (error) {
        console.log(error);
    }
}

    // Databse Seeds
    // seedCategory();
    // seedCompany();
    // seedCondition();
    // seedContact();