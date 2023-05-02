const express = require("express"); 
const app = express();
const port = 8000;
const {faker} = require('@faker-js/faker')

const generateUser = () => {
    const userObject = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        password: faker.internet.password(),
        _id:faker.datatype.uuid() 
    }
    return userObject;
}
const newUser = generateUser();
console.log(newUser)

const generateCompany = () => {
    const companyObject = {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCodeByState(),
            country: faker.address.county()
        }
    }
    return companyObject;
}

app.get('/api/users/new', (req, res) => { 
    const lookNiceUser = generateUser();
    res.json(lookNiceUser); }); 

app.get('/api/companies/new', (req, res) => { 
    const lookNiceCo = generateCompany();
    res.json(lookNiceCo); }); 

app.get('/api/user/company', (req, res) => {
    const userMix = generateUser();
    const companyMix = generateCompany();
    const userAndCo = {userMix, companyMix};
    res.json(userAndCo);
})
app.listen( port, () => console.log(`Listening on port: ${port}`) );

