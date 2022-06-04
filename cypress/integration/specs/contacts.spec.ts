import { SalesPage } from "../page/sales.page"
import { LoginPage } from "../page/login.page"
import { CustomerPage } from "../page/customer.page"
import { ContactPage } from "../page/contacts.page"

describe('Customer Contact Test', () => {

    const salespage = new SalesPage();
    const loginpage = new LoginPage();
    const customerpage = new CustomerPage();
    const contactpage = new ContactPage();

    beforeEach(() => {
        cy.viewport(1024, 768)
        loginpage.navigate('https://katanamrp.com/login/')
        loginpage.doLogin('nishitgupta76@gmail.com','ng1qaz!QAZ');
        cy.url().should('be.equal', 'https://factory.katanamrp.com/sales')
    })

    it('verify customer contact page', () => {
        contactpage.navigate('https://factory.katanamrp.com/contacts/customers')
        contactpage.verifyCustomerTable()
    })

    it('verify add new customer from contacts page', () => {
        contactpage.navigate('https://factory.katanamrp.com/contacts/customers')
        contactpage.verifyCustomerTable()
        contactpage.clickAddNewCustomer()
        cy.url().should('be.equal', 'https://factory.katanamrp.com/customer')
        customerpage.enterCustomerDetails('Michael','Scott','Dunder Mifflin','abcxyz@nbc.com','2313')
        customerpage.closeCustomerCard()
        cy.url().should('be.equal', 'https://factory.katanamrp.com/contacts/customers')
        cy.contains('Michael').should('have.text', 'Michael Scott')
    })

    it('verify update existing customer from contacts page', () => {
        contactpage.navigate('https://factory.katanamrp.com/contacts/customers')
        contactpage.verifyCustomerTable()
        contactpage.openCustomerExistingDetails('Michael')
        cy.url().should('include','https://factory.katanamrp.com/customer')
        customerpage.updateCustomerDetails('Dwight','Schrute','Dwight Schrute')
        customerpage.closeCustomerCard()  
        cy.url().should('be.equal', 'https://factory.katanamrp.com/contacts/customers')
        cy.contains('Dwight').should('have.text', 'Dwight Schrute')
    })

    it('verify delete existing customer from contacts page', () => {
        contactpage.navigate('https://factory.katanamrp.com/contacts/customers')
        contactpage.verifyCustomerTable()
        contactpage.openCustomerExistingDetails('Michael')
        cy.url().should('include','https://factory.katanamrp.com/customer')
        customerpage.deleteDetails()
        cy.url().should('be.equal', 'https://factory.katanamrp.com/contacts/customers')
    })


})
